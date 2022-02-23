"use strict"; 
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateVacation(){
  let place = [ 'Florida', 'Texas', 'California', 'Alaska'] ;
  let food = [ 'Pizza', 'Chili', 'Taco', 'Sandwich'] ;
  let vacation = capFirst(place[getRandomInt(0, place.length + 1)]) + ' ' + capFirst(food [getRandomInt(0, food.length + 1)]);
  return vacation; } ;
  console.log(vacation);
