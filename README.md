CSC 410 Web Programming Course Project
======================================

Team members: Xingxing Li,Runhua Gao,Jiyun Xu
--------------

 __We build a badminton game registration web application, users could register here and use their email&password to log in to see their game history__

### Technical Stack:

This project was bootstrapped with **Create React App**.</br>
The front end is designed based on **React** with reactstrap, bootstrap and some other UI components libraries.</br>
Server side controller is established based on **Express**, a JavaScript server library, to construct multiple routers to get requeset and send data with client.</br>
Also manipulate data via **MongoDB**, connect it to server controller with usage of **mongoose**, a mongoDB JavaScript driver.
There are three **live boards** on our page, from which all users could see the score of games that are playing.</br>
After registering, as we get user's address, we use the **Google Map API** and react mark component to show the rountine from< user's home to game station, which help user to find right place. Also we offer user a **Google Cloud Translate** input text to translate the words into other languages at thee rule page.</br>

### Main Functions of Our Web application(Website Map)
**Registration**: *Collect user's personal information* to register for our game(including email,password,name,group etc).</br>
</br>
**Login**: *User could use their email address and password* used in registration to login to our website to see their personal information and **game histroy**.
</br>
</br>
**Score Board**: This is to show each court's scores lively for those users who are not present at the play station and wnat to to check the scores of other games.
</br>
</br>
**Rule**: Show the rule of our game.
</br>
</br>
**Third party API Usage**: **Google Cloud Map & Translate**, used to help user find a route from his/her address to our play station and translate strange words in rule page for non native speakers.

Development Environment:
Global environment: Node.js & npm.js
Front end part: React-creat-app create-react-app [projectname]
Backend: Express-generator/install command: express [projectname]
Database: MongoDB 
You could see all third-party libraries we use in our project in package.json file in both 


front part:
App.js:
	this part works like the entrance to the project.

Component document:
	Home.js: create a home component and work as home page. there are a header which can redirect to other page, and a footer to define some information. Besides set the route for other component and give them a unique URL. And I design the default page is login page.
	
	Login.js: create a form of logining page. and when submit the information, it will send request to the server and validate whether the information is matched. Then it will direct to userinfo page.

	RegisterComponent.js: create a form of register page. And when submit the information, it will at first check the information and then send request to the server. if sign uo successfully, then it will utomatically direct to home page.
	
	Navbar.js: create a component of header and bind all the button with unique URL.

	Live.js: this component is to see the court information. And it will automatically arrange the court.The page will send requeset to server every 3 second without reload the page. We assume there is a judge and use some tool to tell server the court information. At first the court is avaiable, and when there will be a game, you can use the postman to send a request to server and tell it the game is coming. Then page get the information from server, updata the information. When the game is over(the score become 21) the court will be avaible again. 
	
	rule.js: it is used for help audience to know the basic rule of badminton game. Besides there is a Google Translate api
,it can help audience to tarnslate the sentence to the language they want. There are some choices for languages.

	Users.js: this page just to define the data format in register page and then return a json data.

Userinfopage: 
	UserInterface.js : this component design the userinfo page and help player to know their information and in this page they can also know their game history like the opponent name and scores. Besides when click find route button it will direct to simple map component.

	Showgame.js: this component design how to display the game history.

	UserComponent.js: this component design how to display the player information.

	SimpleMap.js: this component load the google map api and at first it will display the default map. then after you click get route button it will firstly find the absolute geographic address of your address then find the router from your address to game gym. 


Server part:
Backend:
  For our project, we use express(a JavaScript library) to configure the server.  This is actually how you configure the router to match different url to process different types of request. This is also our web API.
  There are total 4 routers in the server.

  CourtRouter: this router matches the url: localhost:3001/court
  CourtRouter.get()
	If the client want to get all scores, just include a query variable called id in the url. As we only have three courts, if id is in range[1,3], it will send correspond court’s info to client. If id equals 4, it will send all courts’ info to client.
  Courtrouter.post()
	This post method is to update each court’s score manually by sending the data to server via postman. Then the server will update database locally and then send updated data to client server to show the newest score of each court.

  playerRouter: url: localhost:3001/player?fullname=[name]
  playerRouter.get(): 
	fetch a user’s personal information from server by including a query variable called full name, then the server will use it as a key to search in database and then send the search result to client.
  playerRouter.post():
	This method is used to get a user’s information when registering and then store it to database.
  
  loginRouter: localhost:3001/login
  loginRouter.post(): 
	get a email and a password from client then search it in database to clarify if the user has already registered and the email address&password match well. Send the confirmation result to client.
  
  gameRouter():localhost:3001/game
  gameRouter.get():
	search the game history of a user(there must be query variable name in the url of request) then send the search result to client.
  gameRouter.post():
	send data to server and then server will store this data into database automatically


  For database part, we use mongoDB as our database and use mongoose(a JavaScript mongoDB driver to connect server to database) to manipulate data in JavaScript.
  Another key point of mongoose is to establish a prototype data. There are two models(you could also call it as data type). Each model of mongoose is actually a class the specifies that the data should be. What is also convenient is that each data prototype corresponds to a collection in database as whenever you want to insert, update or do some other actions about data it will check the data to be done automatically.

	
