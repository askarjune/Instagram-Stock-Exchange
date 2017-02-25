/*
AUTHOR: Amber Skarjune
DATE: 2/25/17
PURPOSE: Hack@Smith Hackathon
*/

//User Side Implementation
var userCoin;
var userHashtags;
var userQuantity;

userCoin = 100;
userHashtags = ["Pepe", "Here Come Dat Boi", "Forever Alone"];
userQuantity = {"Pepe" : 5, "Here Come Dat Boi" : 10, "Forever Alone" : 1}

//Market Side Implementation
var marketHashtags;
var marketValue;

//reads JSON file to get current buy/sell data
marketHashtags = ["Pepe", "Here Come Dat Boi", "Forever Alone", "BirdsRightsActivists"];

marketValue = {"Pepe" : 500, "Here Come Dat Boi" : 20, "Forever Alone" : 5000}


//Functions

function sellHashtag(quantity, tag){
  if (quantity < userQuantity[tag]) {
    var profit = quanity*marketValue[tag];
    userCoin += profit;
    //removes sold hashtags from userQuantity
    userQuantity[tag] -= quantity;
  }
  //removes hashtag from userQuantity if user has none
  if (userQuantity[tag] <= 0){
    delete userQuantity[tag];
  }

  for (int i = 0; i < userHashtag.length(); i++){
    if (userHashtag[i] == tag){
      array.splice(i, 1);
    }
  }

}


function buyHashtag(quantity, tag){
  var profit = quanity*marketValue[tag];
  userCoin -= profit;

  //adds bought hashtags to userQuantity
  for (int i = 0; i < userHashtags.length(); i++){
    if (userQuantity[i] == tag){
      userQuantity[i] += quantity;
    }
    else{
      dict.push({
        key: tag,
        value: 1;
      });
    }
  }
}