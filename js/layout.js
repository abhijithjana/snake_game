const initialVelocity = () => {
  let u = { s: 0, x: true, y: true }
  return u
}

const pace = 0.5

let V = initialVelocity()

const babySnake = () => [
  { x: 13, y: 15 },
] /*[{ x: 4, y: 18 },{ x: 4, y: 17 },{ x: 5, y: 17 }, { x: 6, y: 17 }, { x: 7, y: 17 },  { x: 8, y: 17 },
  { x: 9, y: 17 },
  { x: 10, y: 17 },
  { x: 11, y: 17 },
  { x: 11, y: 16 },
  { x: 11, y: 15 },
] */

let lastspeed = 0
let snake = babySnake()

let food = {
  x: 6,
  y: 5,
}
let maze = { x: 18, x0: 0, y: 18, y0: 0 }

let score = 0
let leaderboard = localStorage.getItem("hiScoreBox")
let highScore = 0
