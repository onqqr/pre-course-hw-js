// проверка на четность и нечетность

function number() {
  let number = Math.floor(Math.random() * 100)
  return number % 2 === 0 ? console.log(number + ' :Это четное число') : console.log(number + ' :Это нечетное число')
}
number()
