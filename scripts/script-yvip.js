console.log("Script is running...")

// HTML elements constants
const mainButtonYVIP = document.querySelector("#mainButtonYVIP")
const studentWrapperYVIP = document.querySelector("#student-earsketch")
const studentSelectYVIP = document.querySelector("#student-select-yvip")

mainButtonYVIP.addEventListener('click', (e) => {
  studentWrapperYVIP.innerHTML = `<iframe width="100%" height="500px" src="https://earsketch.gatech.edu/earsketch2/?sharing=${studentSelectYVIP.value}&embedded=true&hideDaw"></iframe>`
})
