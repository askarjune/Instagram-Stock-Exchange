/*
AUTHOR: Amber Skarjune
DATE: 2/25/17
PURPOSE: Hack@Smith Hackathon
*/

//User Side Implementation
var userCoin;
var userQuantity;
var userNum = {};

userCoin = 100;
file = "yeehaw_memes.json"
userQuantity = {};



//Market Side Implementation
var marketInstas = {"therock": {"current": 26, "20values": [810, 829, 836, 847, 858, 872, 884, 909, 920, 948, 967, 969, 984, 1, 5, 27, 51, 66, 85, 26], "growth": -59, "previous": 85}, "choi_seung_hyun_tttop": {"current": 522, "20values": [476, 479, 485, 484, 487, 487, 486, 487, 491, 492, 496, 495, 498, 504, 505, 509, 514, 516, 516, 522], "growth": 6, "previous": 516}, "katyperry": {"current": 427, "20values": [378, 382, 393, 389, 391, 84, 388, 385, 387, 396, 396, 396, 405, 401, 399, 400, 411, 416, 428, 427], "growth": -1, "previous": 428}, "beyonce": {"current": 533, "20values": [347, 360, 64, 378, 399, 411, 421, 412, 412, 419, 433, 440, 41, 447, 470, 470, 496, 502, 518, 533], "growth": 15, "previous": 518}};


//Functions

function sellHashtag(){

	var buttonNum = event.target.id;
	var tag;

	if (buttonNum = "b1"){tag = 1;}
	else if (buttonNum ="b2"){tag = 2;}
	else if (buttonNum ="b3"){tag = 3;}
	else if (buttonNum ="b4"){tag = 4;}
	else if (buttonNum ="b5"){tag = 5;}


	var keys = Object.keys(marketInstas);
	var celeb = keys[tag];


    var profit = marketInstas[celeb]["current"];
    userCoin += profit;

    //removes sold hashtags from userQuantity
    delete userQuantity[celeb];

  //removes hashtag from userQuantity if user has none
  if (userQuantity[celeb] <= 0){
    delete userQuantity[tag];
  }

 getCoins(userCoin);


}


function buyHashtag(){

	var buttonNum = event.target.id;
	var tag;

	if (buttonNum = "b1"){tag = 1;}
	else if (buttonNum = "b2"){tag = 2;}
	else if (buttonNum = "b3"){tag = 3;}
	else if (buttonNum = "b4"){tag = 4;}
	else if (buttonNum = "b5"){tag = 5;}
	else if (buttonNum = "b6"){tag = 6;}
	else if (buttonNum = "b7"){tag = 7;}
	else if (buttonNum = "b8"){tag = 8;}
	else if (buttonNum = "b9"){tag = 9;}
	else if (buttonNum = "b10"){tag = 10;}

  var profit = marketInstas[tag]["current"];
  userCoin -= profit;
  var count;

  var keys = Object.keys(marketInstas);
  var celeb = keys[tag];

  //adds bought hashtags to userQuantity
  for (key in userQuantity){
	count++;
   }

   if (count > 5){
	   alert("You already own the max instas you can have!");
   }
	else{
		userQuantity.push({
			key:   celeb[tag],
			value: marketInstas[tag]
		});

		userNum.push({
			key:celeb[tag],
			value: 1

		})
		getCoins(userCoin);
	}


}
	function getCoins(userCoin){
	  var a = document.getElementById("coins1");
      a.innerHTML = userCoin;
	  var a = document.getElementById("coins2");
      a.innerHTML = userCoin;
	  var a = document.getElementById("coins3");
      a.innerHTML = userCoin;
	  return userCoin;
	}

	function getStocks(){
	  return userQuantity;
	}