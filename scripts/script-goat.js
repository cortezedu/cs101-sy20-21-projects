console.log("Script is running...")

// HTML elements constants
const mainButtonGOAT = document.querySelector("#mainButtonGOAT")
const studentWrapperGOAT = document.querySelector("#student-goat")
const studentSelectGOAT = document.querySelector("#student-select-goat")

mainButtonGOAT.addEventListener('click', (e) => {
  console.log("Testing")
  studentWrapperGOAT.innerHTML = `<iframe width="100%" height="620" style="border: 0px;" src="https://studio.code.org/projects/applab/${studentSelectGOAT.value}/embed"></iframe>`
})

// <iframe width="500" height="620" style="border: 0px;" src="https://studio.code.org/projects/applab/${studentSelectGOAT.value}/embed"></iframe>
//https://studio.code.org/projects/applab/qa9Qd7XjopLAl6WGQ7hVf5tHw34jJoy1AC6zYc-XMHk