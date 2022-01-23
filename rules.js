var position = ['', '', '', '', '', '', '', '', '']
var playerTime = 0
var symbol = ['o', 'x']
var playerOneScore = 0
var playerTwoScore = 0
var options = 9

function handleMovement(pos) {
  let winner = false
  //SOMENTE PARA CAMPOS EM BRANCO
  if (position[pos] == '') {
    //INSERIR MOVIMENTO
    position[pos] = symbol[playerTime]

    //VERIFICAR SE HOUVE UM GANHADOR
    if (Winner(playerTime) != undefined) {
      winner = true
      insertScore(playerTime, setScore())
    }

    //ATUALIZAR TELA
    updateScreen(pos)

    //DIMINUI AS JOGADAS PARA REINICIO DE PARTIDA EM CASO DE "VELHA"
    options--
    if (options == 0) {
      freezeGame()
    }

    //TROCAR PLAYER
    if (playerTime == 0) {
      playerTime = 1
    } else {
      playerTime = 0
    }
  }
  return winner
}

function setImagePlayer() {
  if (playerTime == 0) {
    return 'setImageShield'
  } else {
    return 'setImageSword'
  }
}

function Winner(player) {
  if (
    position[0] == symbol[player] &&
    position[1] == symbol[player] &&
    position[2] == symbol[player]
  ) {
    return player
  } else if (
    position[3] == symbol[player] &&
    position[4] == symbol[player] &&
    position[5] == symbol[player]
  ) {
    return player
  } else if (
    position[6] == symbol[player] &&
    position[7] == symbol[player] &&
    position[8] == symbol[player]
  ) {
    return player
  } else if (
    position[0] == symbol[player] &&
    position[3] == symbol[player] &&
    position[6] == symbol[player]
  ) {
    return player
  } else if (
    position[1] == symbol[player] &&
    position[4] == symbol[player] &&
    position[7] == symbol[player]
  ) {
    return player
  } else if (
    position[2] == symbol[player] &&
    position[5] == symbol[player] &&
    position[8] == symbol[player]
  ) {
    return player
  } else if (
    position[0] == symbol[player] &&
    position[4] == symbol[player] &&
    position[8] == symbol[player]
  ) {
    return player
  } else if (
    position[2] == symbol[player] &&
    position[4] == symbol[player] &&
    position[6] == symbol[player]
  ) {
    return player
  }
}

function setScore() {
  let score = 0
  if (playerTime == 0) {
    score = playerOneScore += 1
  } else {
    score = playerTwoScore += 1
  }
  return score
}

function handleClear() {
  position = ['', '', '', '', '', '', '', '', '']
  playerTime = 0
  options = 9
}
