// Lesson2/////////////////////////////////////////////
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

// Lesson3/////////////////////////////////////////////
// console.log('Hello World')

// DOM - document object model

// console.log(document.body)

// document.body.style.background = 'red'

// const buttons = document.getElementsByClassName('btn')
// const button = document.getElementById('btn1')
// const button = document.getElementsByTagName('button')
// buttons[0].style.background = 'red'

// console.log(buttons[0].classList)
// console.log(buttons[0].id)

// add() remove() contains()////////////////////////
// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')


// console.dir(buttons[0].onclick)

// const logger = () => console.log('click')///
// buttons[0].onclick = logger///
///
// buttons[0].addEventListener('click', () => { ///
//     console.log('1')
// }) ///
// const buttons = document.querySelectorAll('button')
// const wrapper = document.querySelector('.btn-block')

// buttons.forEach(button => {
//     button.onclick = (event) => {
//         if (event.target.classList.contains('red')) {
//             event.target.classList.remove('red')
//         } else {
//             event.target.classList.add('red')
//         }
//     }
// })


// Делегирование событий

// const buttons = document.querySelectorAll('button')
// const wrapper = document.querySelector('.btn-block')
//
// wrapper.addEventListener('click', (event) => {
//     const element = event.target
//     if (element.tagName.toLowerCase() === 'button') {
//         element.onclick = (e) => {
//             if (e.target.classList.contains('red')) {
//                 e.target.classList.remove('red')
//             } else {
//                 e.target.classList.add('red')
//             }
//         }
//     }
// })
//
// const newButton = document.createElement('button')
// wrapper.append(newButton)


// TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent  = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (item === event.target) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}



