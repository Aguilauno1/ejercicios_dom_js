// 1.1 evento click → log del evento
const btn = document.getElementById('btnToClick')
btn.addEventListener('click', (event) => {
  console.log('Click event:', event)
})

// 1.2 evento focus en el input .focus → log del valor
const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', (e) => {
  console.log('Focus value:', e.target.value)
})

// 1.3 evento input en el input .value → log del valor en tiempo real
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', (e) => {
  console.log('Input value:', e.target.value)
})

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const ul = document.createElement('ul')
albums.forEach((title) => {
  const li = document.createElement('li')
  li.textContent = title
  ul.appendChild(li)
})
document.body.appendChild(ul)
