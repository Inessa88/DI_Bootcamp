// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)





const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


let usernames = new Array()

function allUsers (){
  gameInfo.forEach((element,index, array) => {usernames.push(`${array[index].username}!`)});
  return usernames;
}

allUsers();


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]


let winners = new Array()

function allWinners (){
  gameInfo.forEach((element,index, array) =>  {
    if (array[index].score > 5) {
      winners.push(array[index].username)
    }})
  return winners;
  };

allWinners();

// 3. Find and display the total score of the users. (Hint: The total score is 71)

let total = 0;

function totalScore (){
  gameInfo.forEach((element,index, array) =>  {
    total += Number(array[index].score)
  return total;
  })};

totalScore ();