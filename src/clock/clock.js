import './clock.scss'

const clock = () => {
  const container = document.createElement('section')
  container.classList.add('clock')

  for (let i = 0; i < 3; i++) {
    const element = document.createElement('div')
    element.classList.add('clock__hand')
    i === 0 && element.classList.add('clock__hand--s')
    i === 1 && element.classList.add('clock__hand--m')
    i === 2 && element.classList.add('clock__hand--h')
    container.appendChild(element)
  }

  for (let i = 1; i < 13; i++) {
    const element = document.createElement('div')
    element.classList.add('clock__number', `clock__number--${i}`)
    element.textContent = i
    container.appendChild(element)
  }

  const setClock = () => {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(container.firstChild, seconds)
    setRotation(container.children[1], minutes)
    setRotation(container.children[2], hours)
  }

  const setRotation = (element, rotation) => {
    element.style.setProperty('--rotation', `${rotation * 360}deg`)
  }

  setClock()
  setInterval(setClock, 1000)

  return container
}

export default clock