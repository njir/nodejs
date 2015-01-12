* node.js 설치
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

*express generator

npm install -g express-generator
//프로젝트 할때는 아래에서부터 시작
express --ejs ex2
cd ex2
npm install
node bin/www <실행


*nodemon
npm install -g nodemon

*supervisor
npm install -g supervisor
supervisor app.js

*express
npm init
npm install express --save 

npm install mysql --save //이거는 제이슨에 추가해줌

ex) board 프로젝트
express --ejs board
cd board

npm install 전에 추가하고 싶은 모듈 있으면
package.json 수정 > mysql 모듈 추가

("dependencies"에   "mysql":"*" 추가)

npm install