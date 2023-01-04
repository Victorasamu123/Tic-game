let intialValue : string='X'
let firstTd = document.getElementById('one') as HTMLElement
let secondTd = document.getElementById('one') as HTMLElement
let thirdTd = document.getElementById('one') as HTMLElement
let fourthTd = document.getElementById('one') as HTMLElement
let fifthTd = document.getElementById('one') as HTMLElement
let sixTd = document.getElementById('one') as HTMLElement
let sevenTd = document.getElementById('one') as HTMLElement
let eightTd = document.getElementById('one') as HTMLElement
let ninethTd = document.getElementById('one') as HTMLElement
let winOne = document.getElementById('infoOne') as HTMLElement
let winTwo = document.getElementById('infoTwo') as HTMLElement
let nameOne = document.getElementById('playerOneNaming') as HTMLElement
let nameTwo = document.getElementById('playerTwoNaming') as HTMLElement
let scoreOne = document.getElementById('playerOneScore') as HTMLElement
let scoreTwo = document.getElementById('playerTwoScore') as HTMLElement
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
