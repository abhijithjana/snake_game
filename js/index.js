alert(
  "use ↑ ↓ → ← if u r using keyboard also u can turn  on or off audio  using button in top right corner"
)

function main(ctime) {
  window.requestAnimationFrame(main)
  if ((ctime - lastspeed) / 1000 < 1 / V.s) return
  lastspeed = ctime
  gameEngine()
}

window.requestAnimationFrame(main)

window.addEventListener("keydown", (e) => {
  reset()
  motion.play()
  switch (e.key) {
    case "ArrowUp":
      V.x = 0
      V.y = -1
      console.log("ArrowUp")
      break
    case "ArrowDown":
      V.x = 0
      V.y = 1
      console.log("ArrowDown")
      break
    case "ArrowLeft":
      V.x = -1
      V.y = 0
      console.log("ArrowLeft")
      break
    case "ArrowRight":
      V.x = 1
      V.y = 0
      console.log("ArrowRight")
      break
    default:
      break
  }
})
