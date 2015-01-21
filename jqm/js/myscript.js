$(document).on('pageshow', '#blog', function() {
	console.log('blog');
	$.ajax({
		url : 'https://apis.daum.net/blog/post/list.do?blogName=androidsam&output=json&callback=?',
		dataType : 'jsonp',
		success : function(data) {
			listPosts(data);
		}
	});
});

// 블로그 리스트
function listPosts(data) {
	var items = data.channel.item;
	var output = '';
	for(var i=0; i<items.length; i++) {
		var item = items[i];
		output += '<li>';
		output += '<a href="#blogpost" onclick="showPost(' + item.postId + ')">';
		output += '<img src="images/vs_logo.png">';
		output += '<h2>' + item.title + '</h2>';
		output += '<p>' + item.date + '</p>';
		output += '</a>';
		output += '</li>';
	}//for
	$('#postlist').html(output);
	$('#postlist').listview('refresh');
}//listPosts

// 블로그 글 하나 보기
function showPost(id) {
	var url = 'https://apis.daum.net/blog/post/read.do?blogName=androidsam&postId=' + id + '&output=json&callback=?';
	$.getJSON(url, function(data) {
		var output = '';
		output += '<h3>' + data.channel.title + '</h3>';
		output += data.channel.content;
		$('#mypost').html(output);
	});
}//showPost

$(document).on('pageshow', '#videos', function() {
	//console.log('videos');
	$.ajax({
		url: 'http://gdata.youtube.com/feeds/users/GoogleDevelopers/uploads?alt=json-in-script',
		dataType: 'jsonp',
		success: listVideos
	});
});

// 유튜브 비디오 리스트
function listVideos(data) {
	$('#videotemplate').tmpl(data.feed).appendTo('#videolist');
}//listVideos

// 비디오 하나 보기
function playVideo(id, title, description) {
	// console.log('id=' + id + ",title=" + title + ",description=" + description);
	var output = '<iframe src="http://www.youtube.com/embed/' + id + '?wmode=transparent&amp;HD=0&amp;rel=0;showinfo=0;controls=1&amp;autoplay=1" frameboder="0" allowfullscreen></iframe>';
	output += '<h3>' + title + '</h3>';
	output += '<p>' + unescape(description) + '</p>';
	$('#myplayer').html(output);
}//playVideo

