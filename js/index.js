const main = (ctime) => {
  window.requestAnimationFrame(main)
  if ((ctime - prevPace) / 1000 < 1 / V.s) return
  prevPace = ctime
  gameEngine()
}

alert("use ↑ ↓ → ←  AnyKey to pause ")
//Preload game engine
gameEngine()

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
    case "m":
      audioEnabled = !audioEnabled
      bgmEnabler()
      break
    default:
      alert("Enter to Continue")
      break
  }
})
