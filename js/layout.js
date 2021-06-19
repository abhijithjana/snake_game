let V = {
  s: 6,
  x: 0,
  y: 0,
}
let lastspeed = 0
let snake = [{ x: 13, y: 15 }]
let food = {
  x: 6,
  y: 5,
}
let score = 0
let leaderboard = localStorage.getItem("hiScoreBox")
let highScore = 0
