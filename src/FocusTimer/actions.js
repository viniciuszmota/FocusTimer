import state from "./state.js"

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running")
}
