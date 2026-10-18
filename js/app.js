const ballS = 40
const gameWidth = 800
const  ballLeft = 60
const gravity= 0.8
const jumpPower = 14
const obstacle = 6
const win = 30


///varaibles dont forget nor get confuced 

let ballY = 0
let velocityY = 0
let obstacles = []
let spawnCountdown
let isGameOver = false 
let gameLoopId
let timerId



const gameElement = document.querySelector('#game')
const ballElement = document.querySelector('#ball')
const timerElement = document.querySelector('#timer')
const messageElement = document.querySelector('#message')
const restartButtonElement = document.querySelector('#restart-button')




//functions 


function jumps(){


    if
    (ballY === 0 && isGameOver === false) {
        velocityY = jumpPower
    }
}

function ballMoving(){
velocityY -= gravity
ballY += velocityY

if 
(ballY <0) {

    ballY = 0 
    velocityY = 0

}
ballElement.style.bottom = ballY + 'px'
}
function stuffiInUrWay() {
    const size = Math.round(Math.random() * 10)

    const newObstacleElemnt = document.createElement('div')
    newObstacleElemnt.classList.add('box')
    newObstacleElemnt.style.width = size + 10 + 'px'
    newObstacleElemnt.style.height = size + 20 + 'px'

    gameElement.appendChild(newObstacleElemnt)

    obstacles.push({
        gameElement: newObstacleElemnt,
        x: gameWidth,
        size: size
    })
}



function startGame(){

    gameElement.addEventListener('click',jumps)


setInterval(ballMoving,20)
console.log(gameElement)
}

function spawnBox(){



}

//  Event Listeners 

gameElement.addEventListener('click',jumps)


startGame()
