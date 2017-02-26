/*
AUTHOR: Amber Skarjune
DATE: 2/25/17
PURPOSE: Hack@Smith Hackathon
*/

//User Side Implementation
var userCoin;
var userInstas
var fs = require('fs');

userCoin = 100;
file = "yeehaw_memes.json"
userQuantity = {"therock" : 5}

//Market Side Implementation
var marketInstas

//Functions

function sellHashtag(tag){
    var profit = marketValue[tag];
    userCoin += profit;
    //removes sold hashtags from userQuantity
    userQuantity[tag] -= 1;
  
  //removes hashtag from userQuantity if user has none
  if (userQuantity[tag] <= 0){
    delete userQuantity[tag];
  }

  for (i = 0; i < userHashtag.length(); i++){
    if (userHashtag[i] == tag){
      array.splice(i, 1);
    }
  }

}


function buyHashtag(tag){
  var profit = marketValue[tag];
  userCoin -= profit;

  //adds bought hashtags to userQuantity
  for (i = 0; i < userHashtags.length(); i++){
    if (userQuantity[i] == tag){
      userQuantity[i] += 1;
    }
    else{
      dict.push({
        key: tag,
        value: 1
      });
    }
  }
}

function getMarkets() {
  return marketHashtags;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
    return allText;
}

setInterval(readTextFile, 10000);

