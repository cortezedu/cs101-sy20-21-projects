console.log("Script is running...")

// HTML elements constants
const mainButtonScratch = document.querySelector("#mainButtonScratch")
const studentWrapperScratch = document.querySelector("#student-scratch")
const studentSelectScratch = document.querySelector("#student-select-scratch")

mainButtonScratch.addEventListener('click', (e) => {
  console.log("Testing")
  studentWrapperScratch.innerHTML = `<iframe src="https://scratch.mit.edu/projects/${studentSelectScratch.value}/embed" allowtransparency="true" width="100%" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`
})

// <iframe src="https://scratch.mit.edu/projects/${studentSelectScratch.value}/embed" allowtransparency="true" width="100%" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>