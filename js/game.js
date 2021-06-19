const startGame = () => {
  snake = [{ x: 13, y: 15 }]
  if (audioEnabled) bgm.play()
  score = 0
  scoreBox.innerHTML = "score: " + score
  V = { s: 6, x: 0, y: 0 }
}

const endGame = () => {
  if (willCollide()) {
    gameOver.play()
    if (audioEnabled) bgm.pause()
    alert("Game Over ,press any key to continue")
    startGame()
  }
}

const ate = () => {
  if (snake[0].x === food.x && snake[0].y === food.y) {
    burp.play()
    score += 1
    scoreBox.innerHTML = "score: " + score
    V.s += 0.5

    snake.unshift({
      x: snake[0].x + V.x,
      y: snake[0].y + V.y,
    })

    let a = 0
    let b = 18

    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    }
  }
}

const spawnFood = () => {
  FoodElement = document.createElement("div")
  FoodElement.style.gridRowStart = food.y
  FoodElement.style.gridColumnStart = food.x
  FoodElement.classList.add("food")
  board.appendChild(FoodElement)
}

const growSnake = () => {
  snake.forEach((e, index) => {
    snakeElement = document.createElement("div")
    snakeElement.style.gridRowStart = e.y
    snakeElement.style.gridColumnStart = e.x
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
}

let render = () => {
  board.innerHTML = ""
  updateSnakeLoc()
  growSnake()
  spawnFood()
}

const gameEngine = () => {
  endGame()
  ate() //if ate ...

  render()
  allTimeHigh()
}

if (!leaderboard) {
  localStorage.setItem("highScoreBox", JSON.stringify(highScore))
} else {
  highScore = JSON.parse(highScoreBox)
  highScoreBox.innerHTML = "HighScore: " + highScore
}

const allTimeHigh = () => {
  if (score > highScore) {
    highScore = score
    console.log(highScore)
    localStorage.setItem("highScoreBox", JSON.stringify(highScore))
    highScoreBox.innerHTML = "HighScore :" + highScore
  }
}
