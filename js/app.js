const ballS = 40
const gameWidth = 800
const  ballLeft = 60
const gravity= 0.8
const jumpPower = 12
const obstacleSize = 40
const win = 2000


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





  


function spawObstacles(){
    for(let i = 0; i < obstacles.length; i++){
        if (obstacles[i] !== ''){
obstacles[i].style.left = i * slotWidth + 'px'

        }
    }



}

function obstacleStep(){

    stuffiInUrWay() 
    drawObstacles()

}
function IfThereIsCrash(){



    if ((obstacles[1] !== '' || obstacles [0] !== '') && ballY < obstacleSize) {
        endGame ('GAME OVER')
    }
}
function gameLoop(){

    ballMoving()
    IfThereIsCrash()

}
function updateTimer(){

    timeLeft -- 
    timerElement.textContent = timeLeft
    if 
    (timeLeft === 0){
        endGame(' You won')

    }
    function endGame(message){


        isGameOver = true
        clearInterval(gameLoopId)
        clearInterval(obstacleLoopId)
        clearInterval(timerId)

        messageElement.textContent = message
        restartButtonElement.classList.remove('hidden')
    }

}
function startGame(){

for(let oneObstacle of obstacles){

    for (let oneObstacle of obstacles){
        if(oneObstacle !== ''){
            oneObstacle.style.display = 'none'
        }
    }
}

}

 ballY = 0
    velocityY = 0
    obstacles = ['', '', '', '', '', '', '', '', '', '', '']
    spawnCountdown = 3
    timeLeft = win
    isGameOver = false

    ballElement.style.bottom = '0px'
    timerElement.textContent = timeLeft
    messageElement.textContent = ''
    restartButtonElement.classList.add('hidden')

    gameLoopId = setInterval(gameLoop,20)
    obstacleLoopId = setInterval(obstacleStep,200)
    timerId = setInterval(updateTimer)


//  Event Listeners 

  gameElement.addEventListener('click',jumps)
 gameElement.addEventListener('spaceBar',jumps)

setInterval(ballMoving,20)
console.log(gameElement)


