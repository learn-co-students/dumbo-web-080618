let instructors = ['Gigi', 'Eva', 'Prince']

function sayName(instructors) {
  instructors.forEach((el) => console.log(el))
}

function yellIt(arr) {
  return arr.map(function (instructor) {
    return instructor + '!'
  })
}

function multiplyAndDo(num1, num2, callback) {
  let product = num1 * num2
  return callback(product)
}

function addFive(num) {
  return num + 5
}

let square = num => num * num

multiplyAndDo(3, 5, addFive) // 20
multiplyAndDo(3, 5, square) // 225


function eCardGenerator(greeting) {
  return function(sender, receiver) {
    return `${receiver}, ${sender} says ${greeting}`
  }
}

function outer() {
  let x = 3

  // remember inner function sees outer variables
  function inner() {
    console.log(x)
  }
}

// these functions share a count
let count = 0

let sellApples = () => {
  count++
  return `I've sold ${count} apples today`
}

let sellPears = () => {
  count++
  return `I've sold ${count} pears today`
}

// now we can generate functions which sell fruits and each fruit gets its own count
let fruitSeller = (fruit) => {
  let count = 0
  return () => {
    count++
    return `I've sold ${count} ${fruit}s today`
  }
}

// use an IIFE to make sure that the outer function sets the count only once
let appleSeller = (() => {
  let count = 0
  return () => {
    count++
    return `I've sold ${count} apples today`
  }
})()



// mutating original array is impure and bad!
function squares(arr) {
  arr.forEach((el, index) => {arr[index] = el * el})
  return arr
}



























