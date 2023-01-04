"use strict";
let intialValue = 'X';
let firstTd = document.getElementById('one');
let secondTd = document.getElementById('two');
let thirdTd = document.getElementById('three');
let fourthTd = document.getElementById('four');
let fifthTd = document.getElementById('five');
let sixTd = document.getElementById('six');
let sevenTd = document.getElementById('seven');
let eightTd = document.getElementById('eight');
let ninethTd = document.getElementById('nine');
let winOne = document.getElementById('infoOne');
let winTwo = document.getElementById('infoTwo');
let nameOne = document.getElementById('playerOneNaming');
let nameTwo = document.getElementById('playerTwoNaming');
let scoreOne = document.getElementById('playerOneScore');
let scoreTwo = document.getElementById('playerTwoScore');
// Function for starting game.
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
// Function for playing game.
const logGame = (e) => {
    let playerOneName = document.getElementById('PlayerOne').value;
    let playerTwoName = document.getElementById('PlayerTwo').value;
    if (playerOneName != "" && playerTwoName != "") {
        if (e.target.innerText == "" && intialValue === "X") {
            e.target.innerText = "X";
            intialValue = "O";
            winOne.innerHTML = `You Turn (O)`;
        }
        else if (e.target.innerText == "" && intialValue === "O") {
            e.target.innerText = "O";
            intialValue = "X";
            winOne.innerHTML = `You Turn (X)`;
        }
        let a = firstTd.innerHTML;
        let b = secondTd.innerHTML;
        let c = thirdTd.innerHTML;
        let d = fourthTd.innerHTML;
        let ee = fifthTd.innerHTML;
        let f = sixTd.innerHTML;
        let g = sevenTd.innerHTML;
        let h = eightTd.innerHTML;
        let i = eightTd.innerHTML;
        if ((a == "X" && b == "X" && c == "X") || (d == "X" && ee == "X" && f == "X") || (g == "X" && h == "X" && i == "X") || (a == "X" && d == "X" && g == "X") || (b == "X" && ee == "X" && h == "X") || (c == "X" && f == "X" && i == "X") || (a == "X" && ee == "X" && i == "X") || (c == "X" && ee == "X" && g == "X")) {
            intialValue = "O";
            winOne.innerText = `${playerOneName} is the winner`;
            winTwo.innerHTML = "there is a winner pls press the continue button";
            ++scoreOne.innerHTML;
        }
        else if ((a == "O" && b == "O" && c == "O") || (d == "O" && ee == "O" && f == "O") || (g == "O" && h == "O" && i == "O") || (a == "O" && d == "O" && g == "O") || (b == "O" && ee == "O" && h == "O") || (c == "O" && f == "O" && i == "O") || (a == "O" && ee == "O" && i == "O") || (c == "O" && ee == "O" && g == "O")) {
            console.log("ose");
            intialValue = "X";
            winOne.innerText = `${playerTwoName} is the winner`;
            winTwo.innerHTML = "there is a winner pls press the continue button";
            ++scoreTwo.innerHTML;
        }
        else if (a != "" && b != "" && c != "" && d != "" && ee != "" && f != "" && g != "" && h != "" && i != "") {
            winOne.innerHTML = "oops";
            winTwo.innerText = `it a draw`;
        }
    }
    else {
        winOne.innerText = "CLick on start button for game to start";
        winTwo.innerHTML = "!!!!!!!!!!!!!!!!";
    }
};
