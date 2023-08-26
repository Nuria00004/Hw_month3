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

//  Homework3_part1 //
let slide = 0;
function autoSlider () {
    const slider = setInterval( (i) => {
        slide++
        if (slide > 4) {
            slide = 0
        }
        hideTabContent()
        showTabContent(slide)
    },3000)
}
autoSlider()

// Lesson4/////////////////////////////////////////////

// console.log('Hello')

// JSON

// const objAboutMe = {
//     name: 'Nuria',
//     age: 18
// }
// JSON, window, console, document - глобальные объекты

// const jsonAboutMe = JSON.stringify(objAboutMe)
// const newObjAboutMe = JSON.parse(jsonAboutMe)
// console.log(newObjAboutMe)

///////////////////////////////////
// XHR = XML HTTP Request

// const button = document.querySelector('.btn')
//
// button.addEventListener('click', () => {
//     const request = new XMLHttpRequest() // создание запроса
//     request.open("GET", "data.json") // объявление метода и указание пути
//     request.setRequestHeader("Content-type", "application/json") // указывание заголовка
//     request.send() // отправка запроса
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//         // console.log(data.name, data.age) //
//     })
// })

/////////////

// const peoples = [
//     {
//         name: 'Nuria',
//         age: 18
//     },
//     {
//         name: 'Aizek',
//         age: 19
//     },
//     {
//         name: 'Ben',
//         age: 20
//     },
// ]
//
// const peoplesBlock = document.querySelector('.peoples')
//
// peoples.forEach((person) => {
//     const div = document.createElement('div')
//     div.classList.add('card')
//     div.innerHTML = `
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZGIm8lYWI9-2TH7LQDLEcbVGaLyays2e9Q&usqp=CAU" alt="">
//         <h3>${person.name}</h3>
//         <span>${person.age}</span>
//     `
//     peoplesBlock.append(div)
// })

// Lesson5//+Homework5///////////////////////////////////////////

// CONVERTER //

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, target, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (element === som) {
                target.value = (element.value / response.usd).toFixed(2)
                isTrue.value = (element.value / response.eur).toFixed(2)
            } else if (element === usd) {
                target.value = (element.value * response.usd).toFixed(2)
                isTrue.value = (target.value / response.eur).toFixed(2)
            } else if (element === eur) {
                target.value = (element.value * response.eur).toFixed(2)
                isTrue.value = (target.value / response.usd).toFixed(2)
            }
            // element.value === '' ? target.value = '' : false
            element.value === '' && (target.value = '')
            element.value === '' && (isTrue.value = '')
        }
    }
}

converter(som, usd, eur)
converter(usd, som, eur)
converter(eur, som, usd)

// som.addEventListener('input', () => {
//     // console.log(event.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })


