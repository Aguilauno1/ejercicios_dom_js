// 2.1 Inserta un <div> vacío
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 2.2 Inserta un <div> que contenga una <p>
const divConP = document.createElement('div')
const pInside = document.createElement('p')
pInside.textContent = 'Hola desde una p dentro de un div'
divConP.appendChild(pInside)
document.body.appendChild(divConP)

// 2.3 Inserta un <div> que contenga 6 <p> (loop)
const div6p = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  div6p.appendChild(p)
}
document.body.appendChild(div6p)

// 2.4 Inserta una <p> con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamico)

// 2.5 En el h2.fn-insert-here -> 'Wubba Lubba dub dub'
const h2 = document.querySelector('h2.fn-insert-here')
if (h2) h2.textContent = 'Wubba Lubba dub dub'

// 2.6 Lista ul>li desde apps[]
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulApps = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ulApps.appendChild(li)
})
document.body.appendChild(ulApps)

// 2.7 Elimina todos los nodos .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach((el) => el.remove())

// 2.8 Inserta 'Voy en medio!' entre los dos primeros <div>
const divsSimples = document.querySelectorAll('body > div') // esos dos consecutivos
if (divsSimples.length >= 2) {
  const pMedio = document.createElement('p')
  pMedio.textContent = 'Voy en medio!'
  divsSimples[0].after(pMedio) // lo coloca entre ambos
}

// 2.9 Inserta 'Voy dentro!' dentro de cada .fn-insert-here
document.querySelectorAll('.fn-insert-here').forEach((container) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  container.appendChild(p)
})
