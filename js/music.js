let burp = new Audio("music/food.mp3")
let gameOver = new Audio("music/gameover.mp3")
let motion = new Audio("music/move.mp3") //Change
let bgm = new Audio("music/music.mp3")
let audioEnabled = false

const bgmEnabler = () => {
  if (audioEnabled) {
    audio.innerHTML = "on"
    bgm.pause()
    audioEnabled = false
  } else {
    audio.innerHTML = "Off"
    bgm.play()
    audioEnabled = true
  }
}
