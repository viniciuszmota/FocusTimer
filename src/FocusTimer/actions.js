import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function reset() {
  state.isRunnig = false
  state.isRunnig = document.documentElement.classList.remove("running")

  timer.updateDisplay()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function toggleMusic() {
  state.isRunnig = document.documentElement.classList.toggle("music-on")
}
