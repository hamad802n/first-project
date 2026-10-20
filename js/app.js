const ballS = 40
const gameWidth = 800
const  ballLeft = 60
const gravity= 0.8
const jumpPower = 20
const obstacleSize = 40
const win = 30

const slotWidth = 80
const lastSlot = 10

const jumpSound = new Audio('sounds/jump.mp3')


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
function stuffInUrWay() {
   const newObstacleElemnt = document.createElement('div')

 newObstacleElemnt.classList.add('box')
 
       
newObstacleElemnt.style.height = obstacleSize + 'px'
      newObstacleElemnt.style.left = lastSlot * slotWidth + 'px'

    gameElement.appendChild(newObstacleElemnt)

    obstacles.push(newObstacleElemnt)
        
        
    }


function moveObstacles(){



if (obstacles [0] !== '') {

    obstacles[0].style.display = 'none'






}
 obstacles.shift()
spawnCountdown--
if 


(spawnCountdown <=0){
stuffInUrWay()

spawnCountdown = Math.floor(Math.random()* 4) + 5

}

else{

obstacles.push('')


}

}

  


function spawObstacles(){
    for(let i = 0; i < obstacles.length; i++){
        if (obstacles[i] !== ''){
obstacles[i].style.left = i * slotWidth + 'px'

        }
    }



}





function drawObstacles(){
    
    for(let i = 0; i < obstacles.length; i++){
        if(obstacles[i] !== ''){
            obstacles[i].style.left = i * slotWidth + 'px'
            obstacles[i].style.display = 'block'

        }

    }
}




function obstacleStep(){

    moveObstacles() 
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
   

}
 function endGame(message){


        isGameOver = true
        clearInterval(gameLoopId)
        clearInterval(obstacleLoopId)
        clearInterval(timerId)

        messageElement.textContent = message
        restartButtonElement.classList.remove('hidden')
         jumpSound.currentTime = 0
        jumpSound.play()
    }
function startGame(){
    for(let oneObstacle of obstacles){
        if(oneObstacle !== ''){
        oneObstacle.style.display = 'none'
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
    timerId = setInterval(updateTimer,1000)
}

function handleKeyDown(event){
    if(event.code === 'Space' || event.code === 'ArrowUp'){
        event.preventDefault()
        jumps()
    }
}


function restartGame(){
    clearInterval(gameLoopId)
    clearInterval(obstacleLoopId)
    clearInterval(timerId)

    startGame()


}

//  Event Listeners

gameElement.addEventListener('click',jumps)
document.addEventListener('keydown',handleKeyDown)
restartButtonElement.addEventListener('click',restartGame)


 startGame()

