//VERIFICAR SE O ARQUIVO FOI CARREGADO
document.addEventListener('DOMContentLoaded', () => {
  //SELECIONAR TODOS OS SQUARES
  let squares = document.querySelectorAll('.square')
  //PERCORRER POR TODOS OS CAMPOS E ADICIONAR UM EVENTO
  squares.forEach(square => {
    //ADICIONA O EVENTO DE CLICK PARA CADA SQUARE
    square.addEventListener('click', handleClick)
  })

  //INSERINDO PLACAR INICIAL
  let scorePlayOne = document.getElementById('ply1')
  scorePlayOne.innerText = 0
  let scorePlayTwo = document.getElementById('ply2')
  scorePlayTwo.innerText = 0

  //SETAR BUTTON COMO INVISIBLE
  let button = document.getElementById('button')
  button.addEventListener('click', handleRestart)
  button.style.visibility = 'hidden'
})

//RECEBER QUAL SQUARE FOI SELECIONADO
function handleClick(sqr) {
  let position = sqr.target.id
  let ganhador = handleMovement(position)
  //VERIFICA SE HOUVE GANHADOR
  if (ganhador == true) {
    //CASO HAJA GANHADOR A FUNÇÃO CLICK É DESATIVADA
    freezeGame()
  }
}

function freezeGame() {
  let squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.removeEventListener('click', handleClick)
  })

  //SETAR BUTTON COMO VISÍVEL
  let button = document.getElementById('button')
  button.style.visibility = 'visible'
}

//ADICIONA A CLASSE RESPONSÁVEL POR DEFINIR UM BACKGROUND DO PLAYER DA VEZ
function updateScreen(pos) {
  let square = document.getElementById(pos)
  let className = setImagePlayer()
  square.classList.add(className)
}

function insertScore(winner, score) {
  if (winner == 0) {
    let square = document.getElementById('ply1')
    square.innerText = score
  } else {
    let square = document.getElementById('ply2')
    square.innerText = score
  }
}

function handleRestart() {
  //SETAR BUTTON COMO INVISIBLE
  let button = document.getElementById('button')
  button.style.visibility = 'hidden'

  let squares = document.querySelectorAll('.square')
  //PERCORRER POR TODOS OS CAMPOS E ADICIONAR UM EVENTO
  squares.forEach(square => {
    //ADICIONA O EVENTO DE CLICK PARA CADA SQUARE
    square.addEventListener('click', handleClick)
    square.classList.remove('setImageShield')
    square.classList.remove('setImageSword')
  })

  handleClear()
}
