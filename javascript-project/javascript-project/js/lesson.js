// Lesson2
// Event Loop - Цикл Событий
// Основы асинхронности

// console.log(1)
// console.log(2)
// console.log(3)


// setTimeout(() => {
//     console.log('1')
// }, 0)

// setTimeout(() => {
//     console.log('2')
// }, 0)

// console.log('3')

// setTimeout(() => {
//     console.log('4')
// }, 0)


// setInterval - вызывает одну и ту же функцию через какое-то время
// const interval = setInterval(() => {
//     console.log('Hello')
// }, 1000)

// clearInterval - очистить интервал, принимает в качестве параметра setInterval

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)

// const logger = () => console.log('LOG!') // lambda function

// setTimeout(logger,1000)

// Event Loop - Цикл Событий

// const btn = document.querySelector('button').onclick = () => {
//     console.log('btn')
// }


// HOD - high ordered functions

// const subject = prompt('Subject?')

// const doHomeWork = (finish, subject) => {
//     alert(`starting my ${subject} homework`)
//     finish()
// }

// const alertFinish = () => alert('FINISH!')

// doHomeWork(alertFinish, subject)

