function number() {
  let number = Math.floor(Math.random() * 100)
  if (number % 2) {
    console.log(number + ' :Это нечетное число')
  } else {
    console.log(number + ' :Это четное число')
  }
}
number()
