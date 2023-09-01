// async await

const url = ' https://jsonplaceholder.typicode.com/todos?_limit=5'

// try catch
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    // } finally {
    //     console.warn('FINALLY')
    }
}

// const fetchDataThen = () => {
//     fetch(url)
//         .then((response) => {
//             response.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })
// }
fetchData()

///////////////////
// деструктуризация

// const obj = {
//     name: 'Nuria',
//     age: 18
// }
//
// const { name, age } = obj
//
// console.log(name, age)

// console.log(obj.name, obj.age) //

const obj = {
    name: 'Nuria',
    age: 18
}

// spread operator
const obj1 = {...obj}
obj.name = 'Koya'

console.log(obj1)
console.log(obj)


