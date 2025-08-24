// 1.1 ul>li con countries[]
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulCountries = document.createElement('ul')
countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ulCountries.appendChild(li)
})
document.body.appendChild(ulCountries)

// 1.2 elimina .fn-remove-me
const toRemove = document.querySelector('.fn-remove-me')
if (toRemove) toRemove.remove()

// 1.3 ul>li de cars[] dentro del div [data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const targetDiv = document.querySelector('[data-function="printHere"]')
if (targetDiv) {
  const ulCars = document.createElement('ul')
  cars.forEach((car) => {
    const li = document.createElement('li')
    li.textContent = car
    ulCars.appendChild(li)
  })
  targetDiv.appendChild(ulCars)
}

// 1.4 serie de divs con h4 + img
const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const cardsContainer = document.createElement('section')
cardsContainer.id = 'cards'
countriesData.forEach((item, idx) => {
  const card = document.createElement('div')
  card.className = 'card'

  const h4 = document.createElement('h4')
  h4.textContent = item.title + ' #' + (idx + 1)

  const img = document.createElement('img')
  img.src = item.imgUrl
  img.alt = item.title

  // 1.6 botón para eliminar esta card
  const btnDel = document.createElement('button')
  btnDel.textContent = 'Eliminar este'
  btnDel.addEventListener('click', () => card.remove())

  card.append(h4, img, btnDel)
  cardsContainer.appendChild(card)
})
document.body.appendChild(cardsContainer)

// 1.5 botón para eliminar el último de la serie
const btnEliminarUltimo = document.createElement('button')
btnEliminarUltimo.textContent = 'Eliminar último'
btnEliminarUltimo.addEventListener('click', () => {
  const cards = cardsContainer.querySelectorAll('.card')
  const last = cards[cards.length - 1]
  if (last) last.remove()
})
document.body.appendChild(btnEliminarUltimo)
