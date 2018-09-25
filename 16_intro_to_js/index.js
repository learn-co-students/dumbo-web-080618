var z
// console.log('hi')
//
// function throwAlert() {
//   alert('yo yo yo')
// }
//
// // throwAlert()
//
// let array = [1,2,3,4]
//
// function arrayChanger(arr) {
//   return arr
// }
//
// arrayChanger()
//

// block-scoped

// const cant be reassigned


// console.log(x)
let x = 3
const y = 4
// y = 5
z = 6
// scoping, you can see things in a higher scope
// function has knowledge of the variables and information in a higher scope than where it was defined
function outFunc() {
  let x = 4
  function Inner() {
    const a = 7
    console.log(x)
    if (true) {
      let b = 10
      // this is the only place b exists
    }
    console.log(b)
  }
  Inner()
  console.log(a)
}

console.log('im in global scope', y)

