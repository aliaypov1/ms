const timerTag = document.querySelector('.timer__time')
const startBtn = document.querySelector('.timer__btn_succes')
const pauseBtn = document.querySelector('.timer__btn_warn')
const stopBtn = document.querySelector('.timer__btn_danger')


let ss = 0
let mm = 0
let hh = 0
let isStarted = true

const addZero = (num) =>{
    const str = num.toString()
    if (str.length === 1){
        return `0${num}`
    }
    return num
}

const runTimer = () => {
    ss++
    if(ss === 60){
        ss = 0
        mm++
        if(mm === 60){
            mm = 0
            hh ++
        }
    }
    const time =`${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`
    timerTag.innerText = time
}

let startInterval = null

// setInterval(runTimer, 1000)

startBtn.addEventListener('click', () => {
    if (isStarted){
    startInterval = setInterval(runTimer, 1000)
    isStarted = false
    }
})

// clearInterval(startInterval)
pauseBtn.addEventListener('click', () => {
    isStarted = true
    clearInterval(startInterval)
})
stopBtn.addEventListener('click', () => {
clearInterval(startInterval)
ss = 0
mm = 0
hh = 0
timerTag.innerText = '00:00:00'
// console.log(`${hh}:${mm}:${ss}`)
})

const title = document.querySelector('span')
const colors = ['red', 'blue', 'green']
let i = 1

setInterval(() => {
  title.style.color = colors[i++]
  if (i === 3) {
    i = 0
  }
}, 500)