CSC 410 Web Programming Course Project
======================================

Team members: Xingxing Li,Runhua Gao,Jiyun Xu
--------------

 __We build a badminton game registration web application, users could register here and use their email&password to log in to see their game history__

Technical Stack:
---------------
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

### Development Environment:
**Global environment:** _Node.js & npm.js_
</br>
</br>
**Client Design:** _**React** & ReactStrap&BootStrap4_
</br>
</br>
**Backend&Server:** _Express-generator_
</br>
</br>
**Database:** _MongoDB&Mongoose(JavaScript MongoDB driver)_ 


### React Component Doc:
**App.js:**
	Entrance File, configure reactrouter between differnet components and pages
</br>
</br>
>>**Home.js:**</br>
		Create a home component and work as home page. </br>
		There is a header which can redirect to other page</br> 
		and a footer to define some information. Configure the route for other component and give them a unique URL. 
		I design the default page is login page.</br>
	</br>
>>**Login.js:**</br> 
	Create a form of logining page. </br>
	When submit the information, it will send request to the server and </br>
	validate whether the information is matched in database. </br>
	If the email&password match, then you are directeed to right page else get a warning.</br>
	</br>
>>**RegisterComponent.js:** </br>
	Create a form of register page. </br>
	And when submit the information, it will at first check the format of information user offer</br>
	and then send request to the server. </br>
	If sign uo successfully, then it will utomatically direct to home page.</br>
	</br>
>>**Navbar.js:**</br>
	Create a component of header and bind all the button with unique URL.</br>
	</br>
>>**Live.js:**</br>
	This component is to see the court status(scores, player's name). </br>
	It will automatically arrange the court.The page will send requeset to server every 3 second without reloading. </br>
	We assume there is a judge and use some tool to tell server the court information. </br>
	At first the court is avaiable, and when there will be a game, you can use the postman to send a request to server and tell it the game is coming. </br>
	Then page get the information from server, updata the information. When the game is over(the score become 21) the court will be avaible again. </br>
	</br>
>>**rule.js:** </br>
	This component is used for help audience to know the basic rule of badminton game.</br>
	Besides there is a Google Translate api.</br>
	helping user to translate the word into the other languages(chinese,spnish,france and latino) for non nativee speakers.</br>
	</br>
>>**Users.js:** </br>
	This page just to define the data format in register page and then return a json data.</br>
	</br>
#### _User info page:_ </br>
>>**UserInterface.js:** </br>
	This component designs the userinfo page and help player to know their personal information. </br>
	Within this page user can also review their game history like the opponent name and scores. </br>
	Besides when user click find route button it will direct to simple map component to show a route from user's address to our playstation.</br>
	</br>
>>**Showgame.js:** </br>
	The component designs how to display the game history in User info page.</br>
	</br>
>>**UserComponent.js:** </br>
	The component designs how to display the player information.</br>
	</br>
>>**SimpleMap.js:**</br>
	The component loading the google map api. </br>
	Firstly it will display the default map. Then after you click get route button it should find </br>
	the absolute geographic address of your address then find a proper routine from your address to game gym.</br> 
	</br>

### Backend:</br>
  ___For this project, we use express(a JavaScript library) to configure the server.  This is actually how you configure the router to match different url to process different types of request. This is also our web API.</br>
  </br>
  There are total 4 routers configured in server.___

>>**CourtRouter:** localhost:3001/court </br>
>>>CourtRouter.get()</br>
		If the client want to get all scores, just include a query variable called id in the url.</br>
		As we only have three courts, if id is in range[1,3], it will send correspond court’s info to client. If id equals 4, it will send all courts’ info to client.</br>
>>>Courtrouter.post()</br>
	This post method is to update each court’s score manually by sending the data to server via postman.</br> 
	Then the server will update database locally and then send updated data to client server to show the newest score of each court.
</br>
</br>
>>**playerRouter:** localhost:3001/player?fullname=[name] </br>
>>>playerRouter.get(): </br>
	fetch a user’s personal information from server by including a query variable called full name,</br>
	then the server will use it as a key to search in database and then send the search result to client.</br>
>>>playerRouter.post():</br>
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

	
