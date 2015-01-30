// config/passport.js

var FacebookStrategy = require('passport-facebook').Strategy;
var async = require('async');
var authConfig = require('./auth');
var mysql = require('mysql');
var dbConfig = require('./database');
var connectionPool = mysql.createPool(dbConfig);
var logger = require('./logger');

module.exports = function(passport) {
	// 직렬화
	passport.serializeUser(function(user, done) {
		logger.debug('passport.serializeUser', user);
		done(null, user.id);
	});

	// 역직렬화
	passport.deserializeUser(function(id, done) {
		connectionPool.getConnection(function(err, conn) {
			if(err) { return done(err); }
			var sql = 'SELECT id, facebook_id, facebook_username, facebook_token, facebook_email, facebook_name, facebook_photo FROM users where id=?';
			conn.query(sql, [id], function(err, rows, fields) {
				console.log('rows', rows);
				var row = rows[0];
				var user = {};
				user.id = row.id;
				user.facebookId = row.facebook_id;
				user.facebookUsername = row.facebook_username;
				user.facebookToken = row.facebook_token;
				user.facebookEmail = row.facebook_email;
				user.facebookName = row.facebook_name;
				user.facebookPhoto = row.facebook_photo;
				conn.release();
				logger.debug('passport.deserializeUser', user);
				return done(null, user);
			});
		});
	});// deserializeUser

	// 인증
	passport.use(new FacebookStrategy({
		clientID : authConfig.facebookAuth.clientID,
		clientSecret : authConfig.facebookAuth.clientSecret,
		callbackURL : authConfig.facebookAuth.callbackURL,
		profileFields : [ 'id', 'displayName', 'name', 'emails', 'photos' ]
	},
	function(accessToken, refreshToken, profile, done) {
		process.nextTick(function() {
			connectionPool.getConnection(function(err, conn) {
				if(err) { return done(err); }
				var facebookPhoto = profile.photos[0].value;
				var sql = 'SELECT id, facebook_id, facebook_username, facebook_token, facebook_email, facebook_name, facebook_photo FROM users where facebook_id=?';
				conn.query(sql, [profile.id], function(err, rows, fields) {
					if(err) {
						conn.release();
						return done(err);
					}
					if(rows.length) { // DB에 사용자가 있을 때
						var user = {};
						var row = rows[0];
						user.id = row.id;
						user.facebookId = row.facebook_id;
						user.facebookUsername = row.facebook_username;
						user.facebookToken = row.facebook_token;
						user.facebookEmail = row.facebook_email;
						user.facebookName = row.facebook_name;
						user.facebookPhoto = row.facebook_photo;
						if(accessToken !== user.facebookToken) { // 토큰 변경된 경우
							// DB 테이블 업데이트
							var updateSql = 'UPDATE users SET facebook_token=?, facebook_photo=? WHERE facebook_id=?';
							conn.query(updateSql, [accessToken, facebookPhoto, profile.id], function(err, result) {
								if(err) {
									conn.release();
									return done(err);
								}
								conn.release();
								return done(null, user);
							});
						} else { // 토큰 변경 X
							conn.release();
							return done(null, user);
						}
					} else { // DB에 사용자 없을 때
						var newUser = {};
						newUser.facebookId = profile.id;
						newUser.facebookUsername = profile.displayName;
						newUser.facebookToken = accessToken;
						newUser.facebookEmail = profile.emails[0].value;
						newUser.facebookName = profile.name.givenName + ' ' + profile.name.familyName;
						newUser.facebookPhoto = profile.photos[0].value;
						// DB 에 insert
						var insertSql = 'INSERT INTO users(facebook_id, facebook_username, facebook_token, facebook_email, facebook_name, facebook_photo) VALUES(?,?,?,?,?,?)';
						conn.query(insertSql, [newUser.facebookId, newUser.facebookUsername, newUser.facebookToken, newUser.facebookEmail, newUser.facebookName, newUser.facebookPhoto], function(err, result) {
							if(err) {
								conn.release();
								return done(err);
							}
							newUser.id = result.insertId; // 저장 후 증가된 id 값
							conn.release();
							return done(null, newUser);
						});
					}
				});
			});
		});
	}));// use

};
