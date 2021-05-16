console.log("Script is running...")

// HTML elements constants
const mainButtonIF = document.querySelector("#mainButtonIF")
const studentWrapperIF = document.querySelector("#student-if")
const studentSelectIF = document.querySelector("#student-select-if")

mainButtonIF.addEventListener('click', (e) => {
  console.log("Testing")
  studentWrapperIF.innerHTML = `<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@CS101SY2021/Command-Line-Adventure-Game-${studentSelectIF.value}?lite=true&outputonly=1"></iframe>`
})