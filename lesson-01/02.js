// проверка на четность и нечетность

function number() {
  let number = Math.floor(Math.random() * 100)
  return number % 2 === 0 ? console.log('Это четное число: ' + number) : console.log('Это нечетное число: ' + number)
}
number()
