const ballS = 40
const gameWidth = 800
const  ballLeft = 60
const gravity=  0.1
const jumpPower = 0
const obstacleSize = 6
const win = 30000


///varaibles dont forget nor get confuced 

let ballY = 0
let velocityY = 0
let obstacles =  ['', '', '', '', '', '', '', '', '', '', '']
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
    newObstacleElemnt.style.width = size + 20 + 'px'
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
 gameElement.addEventListener('spaceBar',jumps)

setInterval(ballMoving,20)
console.log(gameElement)
}

function spawObstacles(){
    for(let i = 0; i < obstacles.length; i++){
        if (obstacles[i] !== ''){
obstacles[i].style.left = i * slotWidth + 'px'

        }
    }



}

function obstacleStep(){

    moveObstacles()
    drawObstacles()

}
function checkIfThereIsCrash(){



    if ((obstacles[1] !== '' || obstacles [0] !== '') && ballY < obstacleSize) {
        endGame ('GAME OVER')
    }
}


//  Event Listeners 

gameElement.addEventListener('click',jumps)


startGame()
