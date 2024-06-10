// Variáveis

const cookie = document.querySelector(".screen1 img")
const openedCookie = document.querySelector(".screen2 img")
const resBtn = document.querySelector(".resBtn")
let phrase = document.querySelector(".luckyMessage")
let luckyNumber = Math.round(Math.random()*10)
const luckyPhrase = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.'
]



// Eventos

document.addEventListener('keydown', pressEnter)
cookie.addEventListener('click', imgClick)
openedCookie.addEventListener('click', imgClick)
resBtn.addEventListener('click', resClick)


// Funções

function pressEnter(enter) {
  if(enter.key == 'Enter') {
    resetPhrase()
    toggleScreen()
  }

}

function imgClick() {
  resetPhrase()
  toggleScreen()
}

function resClick() {
  resetPhrase()
  toggleScreen()
}

function toggleScreen() {
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}

function resetPhrase() {
  luckyNumber = Math.round(Math.random()*10)
  phrase.innerHTML = luckyPhrase[luckyNumber]
}