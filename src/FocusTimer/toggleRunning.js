import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running")

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunnig = false
  state.isRunnig = document.documentElement.classList.remove("running")

  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()

  sounds.buttonPressAudio.play()
}

export function toggleMusic() {
  state.isRunnig = document.documentElement.classList.toggle("music-on")

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}
