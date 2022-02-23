"use strict";
let places = ['Miami', 'New York', 'Seatle', 'LA'] ;
let food = [ 'Pizza', 'Tacos', 'Sandwiches', 'Steak'];
let transportation = ['Car', 'Bus', 'Plane', 'Train'];
let entertainment = ['Movies', 'Hiking', 'Themepark', 'Skydiving'];



function randomVaca(arr) {
let answer = arr[Math.floor(Math.random()*arr.length)] ;
return answer;
}
let trip = 1;
let vacation = prompt("Would you like to get away? If yes, press 1. If no, press 2.");
if(vacation <= trip) {
let destination = randomVaca(places);
alert("Where you are staying...");
alert(destination);
let eats = randomVaca(food);
alert("What is on the menu...")
alert(eats);
let how = randomVaca(transportation);
alert("You will get there by...")
alert(how);
let fun = randomVaca(entertainment);
alert("Your adventure will be...")
alert(fun);}


let greatVacation = 1;
let vacationPerson = prompt("If you like your vacation choices press 1, if not press 2?");
if(vacationPerson <= greatVacation){
    alert("Have a great time")
}
if(vacationPerson >= greatVacation) {
    alert("Sorry, refresh and let us try again.")
    
}


