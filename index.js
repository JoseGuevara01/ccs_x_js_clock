const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// const time = document.querySelector('.time')

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    const mins = now.getMinutes()
    const minDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90
    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`


}

function getTime(){
    let d = new Date()
    let hours = d.getHours() > 12 ? '0' + (d.getHours() - 12) : '0' + d.getHours()
    let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
    document.getElementById('time').innerHTML = `${hours} : ${minutes} : ${seconds}`
}

setInterval(setDate, 1000)
setInterval(getTime, 1000)

setDate()