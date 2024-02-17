//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let createManager = [managerName, managerAge, currentTeam, trophiesWon]
  return createManager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  } else {
    let formationObject = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    }
    return formationObject;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let yearArray = players.filter(function (player) {
    return player.debut === year;
  })
  return yearArray;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let PositionArray = players.filter(function (player) {
    return player.position === position;
  })
  return PositionArray;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let AwardArray = players.filter(function (player) {
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name == awardName) {
        return true
      }      
    }
    return false
  })
  return AwardArray;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let AwardArray = players.filter(function (player) {
    let count = 0;
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      return true;
    }
  })
  return AwardArray;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let awardPlayers = filterByAward(awardName);
  let arr = awardPlayers.filter(function(player){
      return player.country === country;
  })
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  let array = players.filter(function(player) {
    return (player.awards.length >= noOfAwards && player.team == team && player.age < age)
  });
  return array;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let temparr = players;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (temparr[j].age < temparr[j + 1].age) {
        let temp = temparr[j];
        temparr[j] = temparr[j + 1]
        temparr[j + 1] = temp;
      }
    }
  }
  return temparr;
}
// //Progression 10 - Sort players beloging to _____ team in descending order of awards won
function SortByAgeXawards(team) {
  let ans = players.filter(function(player){
    return player.team === team;
  })
  let temparr = ans;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (temparr[j].awards.length < temparr[j + 1].awards.length) {
        let temp = temparr[j];
        temparr[j] = temparr[j + 1]
        temparr[j + 1] = temp;
      }
    }
  }
  return temparr
}
// //Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(award,times,country){
  let arr = filterByAwardxTimes(award,times);
  let filteredArr = arr.filter(function(player){
    return player.country == country;
  })
  return filteredArr.sort()

}
// //Challenge 2 - Sort players that are older than _____ years in alphabetical order
// //Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let arr = players.filter(function(player){
    return player.age>age;
  })
  let AlphaArr = arr.sort();
  let temparr = AlphaArr;
  for (let i = 0; i < AlphaArr.length; i++) {
    for (let j = 0; j < AlphaArr.length; j++) {
      if (temparr[j].awards.length < temparr[j + 1].awards.length) {
        let temp = temparr[j];
        temparr[j] = temparr[j + 1]
        temparr[j + 1] = temp;
      }
    }
  }
  return temparr

}