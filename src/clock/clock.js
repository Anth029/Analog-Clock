import styles from './clock.scss' //{ clock: "_223paBrnGWtVFet2T3VU-6",... }

const clock = () => {
  const container = document.createElement('section')

  const secondsHand = document.createElement('div')
  const minutesHand = document.createElement('div')
  const hoursHand = document.createElement('div')
  
  container.classList.add(styles['clock'])

  secondsHand.classList.add(styles['clock__hand'], styles['clock__hand--s'])
  minutesHand.classList.add(styles['clock__hand'], styles['clock__hand--m'])
  hoursHand.classList.add(styles['clock__hand'], styles['clock__hand--h'])

  container.append(secondsHand, minutesHand, hoursHand)  

  for (let i = 1; i < 13; i++) {
    const element = document.createElement('div')
    element.classList.add(styles['clock__number'], styles[`clock__number--${i}`])
    element.textContent = i
    container.appendChild(element)
  }

  const setClock = () => {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(secondsHand, seconds)
    setRotation(minutesHand, minutes)
    setRotation(hoursHand, hours)
  }

  const setRotation = (element, rotation) => {
    element.style.setProperty('--rotation', `${rotation * 360}deg`)
  }

  setClock()
  setInterval(setClock, 1000)

  return container
}

export default clock