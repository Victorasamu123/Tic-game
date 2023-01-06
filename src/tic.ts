let intialValue : string='X'
let firstTd = document.getElementById('one') as HTMLElement
let secondTd = document.getElementById('two') as HTMLElement
let thirdTd = document.getElementById('three') as HTMLElement
let fourthTd = document.getElementById('four') as HTMLElement
let fifthTd = document.getElementById('five') as HTMLElement
let sixTd = document.getElementById('six') as HTMLElement
let sevenTd = document.getElementById('seven') as HTMLElement
let eightTd = document.getElementById('eight') as HTMLElement
let ninethTd = document.getElementById('nine') as HTMLElement
let winOne = document.getElementById('infoOne') as HTMLElement
let winTwo = document.getElementById('infoTwo') as HTMLElement
let nameOne = document.getElementById('playerOneNaming') as HTMLElement
let nameTwo = document.getElementById('playerTwoNaming') as HTMLElement
let scoreOne:any = document.getElementById('playerOneScore') as HTMLElement
let scoreTwo:any = document.getElementById('playerTwoScore') as HTMLElement

// Function for starting game.
const startGame = () => {
    let playerOneName:string = (document.getElementById('PlayerOne') as HTMLInputElement ).value
    let playerTwoName:string = (document.getElementById('PlayerTwo') as HTMLInputElement ).value
    if(playerOneName !="" && playerTwoName!=""){
        nameOne.innerHTML= `${playerOneName}`
        nameTwo.innerHTML= `${playerTwoName}`
        winOne.innerHTML = `Welcome`
        winTwo.innerHTML = `Greats luck to players`
     } else{
        winOne.innerHTML = `Please input Name to Start`
        winTwo.innerHTML = `No Name`
     }
}


// Function for playing game.
const logGame=(e:any)=>{
    let playerOneName:string = (document.getElementById('PlayerOne') as HTMLInputElement ).value
    let playerTwoName:string = (document.getElementById('PlayerTwo') as HTMLInputElement ).value
    if(playerOneName !="" && playerTwoName!=""){
        if(e.target.innerText=="" && intialValue === "X"){
            e.target.innerText="X"
            intialValue="O"
            winOne.innerHTML= `You Turn (O)`
        } else if(e.target.innerText=="" && intialValue === "O"){
            e.target.innerText="O"
            intialValue="X"
            winOne.innerHTML = `You Turn (X)`
        }

        let a:string = firstTd.innerHTML
        let b:string = secondTd.innerHTML
        let c:string = thirdTd.innerHTML
        let d:string = fourthTd.innerHTML
        let ee:string = fifthTd.innerHTML
        let f:string = sixTd.innerHTML
        let g:string = sevenTd.innerHTML
        let h:string = eightTd.innerHTML
        let i:string = ninethTd.innerHTML
        // Condition if X wins
        if ((a=="X" && b=="X" && c=="X") || (d=="X" && ee=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && ee=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && ee=="X" && i=="X") || (c=="X" && ee=="X" && g=="X")) {
            intialValue ="O" ;
            winOne.innerText = `${playerOneName} is the winner`
            winTwo.innerHTML = "there is a winner pls press the continue button"
            ++scoreOne.innerHTML
        }
          // condition  if O wins
        else if ((a=="O" && b=="O" && c=="O") || (d=="O" && ee=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (a=="O" && d=="O" && g=="O") || (b=="O" && ee=="O" && h=="O") || (c=="O" && f=="O" && i=="O") || (a=="O" && ee=="O" && i=="O") || (c=="O" && ee=="O" && g=="O")) {
            intialValue ="X" ;
            winOne.innerText = `${playerTwoName} is the winner`
            winTwo.innerHTML = "there is a winner pls press the continue button"
            ++scoreTwo.innerHTML
        }
          // condition for if ther is a draw
        else if(a!="" && b!="" &&  c!="" &&  d!="" && ee!="" && f!="" && g!="" &&  h!="" && i!=""){
            winOne.innerHTML = "oops"
            winTwo.innerText = `it a draw`
        }
    }else{
        winOne.innerText="CLick on start button for game to start";
        winTwo.innerHTML = "!!!!!!!!!!!!!!!!"
    }
}

// function for contiuing game
const continueGame=()=>{
    let playerOneName:string = (document.getElementById('PlayerOne') as HTMLInputElement ).value
    let playerTwoName:string = (document.getElementById('PlayerTwo') as HTMLInputElement ).value
    if(playerOneName != ""&& playerTwoName !=""){
    firstTd.innerHTML = "";
    secondTd.innerHTML = "";
    thirdTd.innerHTML = "";
    fourthTd.innerHTML = "";
    fifthTd.innerHTML = "";
    sixTd.innerHTML = "";
    sevenTd.innerHTML = "";
    eightTd.innerHTML = "";
    ninethTd.innerHTML = "";
    winOne.innerText="next player turn";
    winTwo.innerHTML = "This is another game goodluck"
    }else{
        winOne.innerHTML = "please input a correct name "
        winTwo.innerText = "input name to play"
    }

}

// function for restarting game
const restartGame = () => {
  location.reload()
}

let song = document.getElementById('playMe') as HTMLMediaElement

// function for playing song
const playSong = () => {
    song.play()
}

// condition for pausing song
const songMe = () => {
    song.pause()
} 