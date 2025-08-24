// 1.1 botón .showme
const btn = document.querySelector('.showme')
console.log('1.1 botón:', btn)

// 1.2 h1 #pillado
const h1 = document.querySelector('#pillado')
console.log('1.2 h1:', h1)

// 1.3 todos los <p>
const ps = document.querySelectorAll('p')
console.log('1.3 párrafos:', ps)

// 1.4 todos .pokemon
const pokes = document.querySelectorAll('.pokemon')
console.log('1.4 pokemon:', pokes)

// 1.5 todos con data-function="testMe"
const tests = document.querySelectorAll('[data-function="testMe"]')
console.log('1.5 testMe:', tests)

// 1.6 el 3º con data-function="testMe"
console.log('1.6 tercero testMe:', tests[2])
