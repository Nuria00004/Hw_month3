// const input = document.querySelector('#gmail_input')
// const btn = document.querySelector('#gmail_button')
// const block = document.querySelector('#gmail_result')
//
// const regExp = /^[A-Za-z0-9\-\.\_]+\@[gmail]+\.[A-Za-z]{2,3}$/
//
// btn.onclick =()=>{
//     if(regExp.test(input.value)){
//         block.innerHTML = 'GREAT!'
//         block.style.color = 'green'
//     }else{(regExp.test(input.value))
//         block.innerHTML = 'Invalid email format'
//         block.style.color = 'red'
//     }
// }
//
//
//
//
// // MOVE BLOCK
// const childBlock = document.querySelector('.child_block')
// const parentBlock = document.querySelector('.parent_block')
//
//
// let positionX = 0
// let positionY = 0
//
// const move = () => {
//     if (positionX < 449 && positionY === 0) {
//         positionX+=2
//         childBlock.style.left = `${positionX}px`
//         setTimeout(move, 10)
//     } else if (positionX >= 449 && positionY < 449) {
//         positionY+=2
//         childBlock.style.top = `${positionY}px`
//         setTimeout(move, 10)
//     } else if (positionX > 0 && positionY > 0) {
//         positionX-=2
//         childBlock.style.left = `${positionX}px`
//         setTimeout(move, 10)
//     } else if (positionX === 0 && positionY > 0) {
//         positionY-=2
//         childBlock.style.top = `${positionY}px`
//         setTimeout(move, 10)
//     }
// }
//
// move()
//
// // ANALOG CLOCK
//
// const seconds = document.querySelector('.seconds');
// const minutes = document.querySelector('.minutes');
// const minute = document.querySelector('.minute');
// const hour = document.querySelector('.hour');
//
// for(let s = 0; s < 60; s++){
//     let mSpikeEl = document.createElement('i');
//     let sSpikeEl = document.createElement('i');
//     mSpikeEl.className = 'spike'
//     sSpikeEl.className = 'spike'
//     mSpikeEl.style = `--rotate:${6 * s}deg`;
//     sSpikeEl.style = `--rotate:${6 * s}deg`;
//     mSpikeEl.setAttribute('data-i', s);
//     sSpikeEl.setAttribute('data-i', s);
//
//     seconds.append(sSpikeEl);
//     minutes.append(mSpikeEl);
// }
//
// const getTime = () => {
//     let date = new Date(),
//         s  = date.getSeconds() ,
//         m  = date.getMinutes();
//
//     hour.textContent = date.getHours();
//     minute.textContent = m;
//     minutes.style = `--dRotate:${6 * m}deg`;
//
//     if(s === 0){
//         seconds.classList.add('stop-anim')
//     } else{
//         seconds.classList.remove('stop-anim')
//     }
//     if(m === 0){
//         minutes.classList.add('stop-anim')
//     } else{
//         minutes.classList.remove('stop-anim')
//     }
//
//     seconds.style = `--dRotate:${6 * s}deg`;
// }
//
// setInterval(getTime, 1000);
// getTime();
//
// // STOPWATCH
// const minutesBlock = document.querySelector('#minutesS'),
//     secondsBlock = document.querySelector('#secondsS'),
//     mlSecondsBlock = document.querySelector('#ml-secondsS'),
//     startButton = document.querySelector('#start'),
//     stopButton = document.querySelector('#stop'),
//     resetButton = document.querySelector('#reset')
//
// let interval
// let minutesS = 0
// let secondsS = 0
// let mlSeconds = 0
//
// const startTimer = () => {
//     mlSeconds++
//     mlSeconds <= 99 && (mlSecondsBlock.innerHTML = mlSeconds)
//     mlSeconds === 100 && (mlSecondsBlock.innerHTML = '00')
//
//     mlSecondsBlock.innerHTML = `0${mlSeconds}`
//     mlSeconds > 9 && (mlSecondsBlock.innerHTML = mlSeconds)
//     if (mlSeconds > 99) {
//         secondsS++
//         secondsBlock.innerHTML = `0${seconds}`
//         mlSeconds = 0
//     }
//     seconds > 9 && (secondsBlock.innerHTML = seconds)
//     if (seconds > 59) {
//         minutesS++
//         minutesBlock.innerHTML = `0${minutes}`
//         secondsS = 0
//         secondsBlock.innerHTML = `0${seconds}`
//     }
//     minutes > 9 && (minutesBlock.innerHTML = minutes)
// }
//
// startButton.onclick = () => {
//     clearInterval(interval)
//     interval = setInterval(startTimer,  10)
// }
//
// stopButton.onclick = () => {
//     clearInterval(interval)
// }
//
// resetButton.onclick = () => {
//     clearInterval(interval)
//     minutesS = 0
//     secondsS = 0
//     mlSeconds = 0
//     minutesBlock.innerHTML = '00'
//     secondsBlock.innerHTML = '00'
//     mlSecondsBlock.innerHTML = '00'
// }
//
/////////////////////////////////
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


