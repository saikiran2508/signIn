// var user = {
// 	name: "sai",
// 	age: 20,
// 	hobby: "games",
// };

// faceboog app

var database = [
	{
	username:"sai",
	password : "sai",
	},
	{
		username:"s",
		password : "sai",
	},
	{
		username:"a",
		password : "sai",
	},
	{
		username:"i",
		password : "sai",
	}
]
var news=[
	{
		username : "kiran",
		frineds : 10,
	},
	{
		username : "sai",
		frineds : 20,
	}
]

function userValid(username,password) {
	for(var i=0;i<database.length;i++){
		if(database[i].username === username && database[i].password===password){
			return true;
		}
	}
	return false;
}

function signIn(username,pass){
	if(userValid(username,pass)){
		console.log(news);
	}
	else{
		console.log("uesername and passwoed are not correct");
	}
	
}

var userName = prompt("Enter your username");
var Password = prompt("Enter your Password");

signIn(userName,Password);
