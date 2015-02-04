* node.js 설치
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

-------------------------------------------------------------------------

*express generator

npm install -g express-generator
//프로젝트 할때는 아래에서부터 시작
express --ejs ex2
cd ex2
npm install
node bin/www <실행

-------------------------------------------------------------------------

*nodemon
npm install -g nodemon

*supervisor
npm install -g supervisor
supervisor app.js

-------------------------------------------------------------------------

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

-------------------------------------------------------------------------

* nodejs 워크스페이스에서는 sudo 없어도 됨
sudo npm install -g forever
sudo forever start app.js
sudo forever list
sudo forever stopall

sudo npm install -g pm2
pm2 start app.js -i max --name "api"
pm2 monit


pm2 list
pm2 delete
pm2 stop

-------------------------------------------------------------------------
* multer 업로드할때 사용
npm install multer --save

* email
npm install emailjs

-------------------------------------------------------------------------

*session 사용법
app.js 에 require 추가하고
use 쿠키파서 ~~ use.route 사이에 app.use(session ...)추가
어떤 페이지든지 접속하면 세션이 만들어진다.(무조건) 
서버의 메모리에 저장됨. 
세션은 키와 값으로 이루어져있음.


----------------------------------------------------------------

* openssl
1. openssl genrsa -out key.pem 2048
> key.pem 파일 생성됨

2. openssl req -new -key key.pem -out cert_request.csr
> 정보 입력 or 엔터
> cert_request.csr 파일 생성됨

3. openssl x509 -req -in cert_request.csr -signkey key.pem -out cert.pem
> Getting private key
> cert.pem 파일 생성됨

4. AWS로 가서 security group > inbound에 HTTPS(443) 추가 해줘야함




4. 테스트 방법
sudo npm install express@3

