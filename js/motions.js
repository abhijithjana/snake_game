const reset = () => {
  if (V.s <= 1) V.s = 6
  V = { s: V.s, x: 0, y: 0 }
} //ensures unidirection

const willCollide = () => {
  console.log(snake[0].x, snake[0].y)
  return (
    snake[0].x > maze.x ||
    snake[0].x <= maze.x0 ||
    snake[0].y > maze.y ||
    snake[0].y <= maze.y0 ||
    suicide()
  )
}
const suicide = () => {
  let body = {}
  // console.log("suicide", JSON.stringify(snake))
  for (let i = 0, part; i < snake.length; i++) {
    part = JSON.stringify(snake[i])
    if (body[part]) return true
    else body[part] = 1
  }
}

const motionUp = () => {
  if (V.x) {
    reset()
    motion.play()
    V.y = -1
    console.log("ArrowUp")
  }
}
const motionDown = () => {
  if (V.x) {
    reset()
    motion.play()
    V.y = 1
    console.log("ArrowDown")
  }
}

const motionLeft = () => {
  if (V.y) {
    reset()
    motion.play()
    V.x = -1
    console.log("ArrowLeft")
  }
}
const motionRight = () => {
  if (V.y) {
    reset()
    motion.play()
    V.x = 1
    console.log("ArrowRight")
  }
}

const setSpeed = (num) => (V.s = num)
