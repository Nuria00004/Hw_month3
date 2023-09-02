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

const peoples = [
    {
        name: 'Nuria',
        age: 18
    },
    {
        name: 'Aizek',
        age: 19
    },
    {
        name: 'Ben',
        age: 20
    },
]

const peoplesBlock = document.querySelector('.peoples')

peoples.forEach((person) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZGIm8lYWI9-2TH7LQDLEcbVGaLyays2e9Q&usqp=CAU" alt="">
        <h3>${person.name}</h3>
        <span>${person.age}</span>
    `
    peoplesBlock.append(div)
})
