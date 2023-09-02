// console.log('Hello')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')


const people = [
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


btn.addEventListener('click', () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open('GET', 'data.json') // объявление метода запроса и указывание пути
    request.setRequestHeader("Content-type", "application/json") // указывание загаловка
    request.send() // отправка запроса
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data)
        document.querySelector('.name_1').innerHTML = data[0].name
        document.querySelector('.age_1').innerHTML = data[0].age

        document.querySelector('.name_2').innerHTML = data[1].name
        document.querySelector('.age_2').innerHTML = data[1].age

        document.querySelector('.name_3').innerHTML = data[2].name
        document.querySelector('.age_3').innerHTML = data[2].age
    })
})

////
const peoplesBlock = document.querySelector('.peoples')

people.forEach((person) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZGIm8lYWI9-2TH7LQDLEcbVGaLyays2e9Q&usqp=CAU" alt="">
        <h3>${person.name}</h3>
        <span>${person.age}</span>
    `
    peoplesBlock.append(div)
})