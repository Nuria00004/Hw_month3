// Homework1
const gmail_input = document.querySelector('#gmail_input')
const gmail_btn = document.querySelector('#gmail_button')
const checker = document.querySelector('#gmail_result')


const regExp = /^[A-Za-z0-9\-\.\_]+\@[gmail]+\.[A-Za-z]{2,3}$/

gmail_btn.onclick =()=>{
    if(regExp.test(gmail_input.value)){
        checker.innerHTML = 'Great!'
    }else{(regExp.test(gmail_input.value))
        checker.innerHTML = 'Invalid email format'
    }
}

///////////////////////////////////////////////////////////////////
// Homework2

const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = ()=> {
    if (positionX < 448 && positionY === 0) {
       positionX++
       box.style.left = `${positionX}px`
       setTimeout(move, 1)
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX > 0 && positionY >= 448) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if(positionY >= 0 && positionX <= 0) {
        positionY --
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()
/////////////////////////////////////////////////////////////////

const interval = document.querySelector('.interval')
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')
const btnResume = document.querySelector('#resume')

let count = 0
let stop

//////////////////////////
btnStart.addEventListener('click', () => {
    stop = setInterval(() => {
        count=count+1
        interval.innerHTML = count
    }, 1000)
})
//////////////////////////
btnStop.addEventListener('click', () => {
   clearInterval(stop)
})
//////////////////////////
btnReset.addEventListener('click', () => {
    count = 0
    interval.innerHTML = count
    clearInterval(stop)
})
//////////////////////////
btnResume.addEventListener('click', () => {
    stop = setInterval(() => {
        count++
        interval.innerHTML = count
    }, 1000)
})
///////////////////////////////////////////////////////////////////
// Homework3



