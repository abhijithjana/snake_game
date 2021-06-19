const reset = () => (V = { s: V.s, x: 0, y: 0 })

const willCollide = () =>
  snake[0].x >= 18 ||
  snake[0].x <= 0 ||
  snake[0].y >= 18 ||
  snake[0].y <= 0 ||
  suicide()

//Bugged for 2 and 1 body snake
const suicide = () => {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
  }
}

function motionUp() {
  reset()
  motion.play()
  V.x = 0
  V.y = -1
}
function motionDown() {
  reset()
  motion.play()
  V.x = 0
  V.y = 1
}
function motionLeft() {
  reset()
  motion.play()
  V.x = -1
  V.y = 0
}
function motionRight() {
  reset()
  motion.play()
  V.x = 1
  V.y = 0
}

function setSpeed(num) {
  V.s = num
}
