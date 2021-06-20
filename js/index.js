alert(
  "use ↑ ↓ → ←  if u r using keyboard also u can turn  on or off audio  using button in top right corner Enter to pause SpaceBar to suicide"
)

gameEngine() //Preload game engine

function main(ctime) {
  window.requestAnimationFrame(main)
  if ((ctime - prevPace) / 1000 < 1 / V.s) return
  prevPace = ctime
  gameEngine()
}

window.requestAnimationFrame(main)

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      motionUp()
      break
    case "ArrowDown":
      motionDown()
      break
    case "ArrowLeft":
      motionLeft()
      break
    case "ArrowRight":
      motionRight()
      break
    default:
      break
  }
})
