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

//////////////////////////////////

const child_block = document.querySelector('.child_block')
console.log(child_block)
let positionX = 0
let positionY = 0

const move = ()=> {
    if(positionY < 450 && positionX === 0){
        setTimeout(()=> {
            positionY = positionY + 10
            console.log(positionY)
            child_block.style.marginLeft = `${positionY}px`

            move()

        },50)
    }


}
move()