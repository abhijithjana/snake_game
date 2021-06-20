const endGame = () => {
  if (willCollide()) {
    gameOver.play()
    if (audioEnabled) bgm.pause()
    alert("Game Over ,press any key to continue")
    startGame()
  }
}
const allTimeHigh = () => {
  if (score > highScore) {
    highScore = score
    console.log(highScore)
    localStorage.setItem("highScoreBox", JSON.stringify(highScore))
    highScoreBox.innerHTML = "HighScore :" + highScore
  }
}

let render = () => {
  updateSnakeLoc()
  board.innerHTML = "" //clears board
  ate()
  growSnake()
  spawnFood()
}

const gameEngine = () => {
  endGame()
  render()
  allTimeHigh()
}

// if (!leaderboard)
//   localStorage.setItem("highScoreBox", JSON.stringify(highScore))
// else {
//   highScore = JSON.parse(highScoreBox)
//   highScoreBox.innerHTML = "HighScore: " + highScore
// }

const startGame = () => {
  snake = babySnake() //cloning array doesnt seem to work seems to create shallow clone always..even [].concat() and map()
  if (audioEnabled) bgm.play()
  score = 0
  scoreBox.innerHTML = "score: " + score
  V = initialVelocity()
}
const ate = () => {
  if (snake[0].x === food.x && snake[0].y === food.y) {
    burp.play()
    score += 1
    scoreBox.innerHTML = "score: " + score
    V.s += pace

    snake.unshift({
      x: snake[0].x + V.x,
      y: snake[0].y + V.y,
    })

    let a = 2
    let b = 18

    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    }
  }
}

const spawnFood = () => {
  foodElement = document.createElement("div")
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add("food")
  board.appendChild(foodElement)
}

const growSnake = () => {
  snake.forEach((e, index) => {
    snakeElement = document.createElement("div")
    let { x, y } = e
    if (x > maze.x) x--
    if (y > maze.y) y--
    snakeElement.style.gridRowStart = y
    snakeElement.style.gridColumnStart = x
    if (index === 0) snakeElement.classList.add("head")
    else snakeElement.classList.add("snake")
    board.appendChild(snakeElement)
  })
}

let updateSnakeLoc = () => {
  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] }
  }
  snake[0].x += V.x
  snake[0].y += V.y
  console.log("snake", JSON.stringify(snake))
}
