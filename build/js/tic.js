"use strict";
let intialValue = 'X';
let firstTd = document.getElementById('one');
let secondTd = document.getElementById('one');
let thirdTd = document.getElementById('one');
let fourthTd = document.getElementById('one');
let fifthTd = document.getElementById('one');
let sixTd = document.getElementById('one');
let sevenTd = document.getElementById('one');
let eightTd = document.getElementById('one');
let ninethTd = document.getElementById('one');
let winOne = document.getElementById('infoOne');
let winTwo = document.getElementById('infoTwo');
let nameOne = document.getElementById('playerOneNaming');
let nameTwo = document.getElementById('playerTwoNaming');
let scoreOne = document.getElementById('playerOneScore');
let scoreTwo = document.getElementById('playerTwoScore');
const startGame = () => {
    let playerOneName = document.getElementById('PlayerOne').value;
    let playerTwoName = document.getElementById('PlayerTwo').value;
    if (playerOneName != "" && playerTwoName != "") {
        nameOne.innerHTML = `${playerOneName}`;
        nameTwo.innerHTML = `${playerTwoName}`;
        winOne.innerHTML = `Welcome`;
        winTwo.innerHTML = `Greats luck to players`;
    }
    else {
        winOne.innerHTML = `Please input Name to Start`;
        winTwo.innerHTML = `No Name`;
    }
};
