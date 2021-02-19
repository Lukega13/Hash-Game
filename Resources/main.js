let player = true

// Registra as jogadas
let moves = [[], [], [], [], [], [], [], [], []]

let a1 = moves[0]
let a2 = moves[1]
let a3 = moves[2]
let b1 = moves[3]
let b2 = moves[4]
let b3 = moves[5]
let c1 = moves[6]
let c2 = moves[7]
let c3 = moves[8]

let vencedor = null


function play(square, place) {

    if (moves[square] == '') {

        if (player == true) {

            moves[square].push('x')

            document.getElementById(place).classList.add("Xplayed")
            document.querySelector("#player-turn h1").innerHTML = "Turn of Player 2"

        } else {
            moves[square].push('o')

            document.getElementById(place).classList.add("Oplayed")
            document.querySelector("#player-turn h1").innerHTML = "Turn of Player 1"

        }

        player = !player
        document.getElementById("error").style.display = "none"

    } else {
        document.getElementById("error").style.display = "block"
    }

    // Win Conditions
    console.log(a1[0])
    if ((a1[0] == a2[0] && a1[0] == a3[0] && a1[0] != '') || (a1[0] == b1[0] && a1[0] == c1[0] && a1[0] != '')
        || a1[0] == b2[0] && a1[0] == c3[0] && a1[0] != '') {

        vencedor = a1[0]

    } else if ((b2[0] == b1[0] && b2[0] == b3[0] && b2[0] != '') || (b2[0] == a2[0] && b2[0] == c2[0] && b2[0] != '')
        || b2[0] == a3[0] && b2[0] == c1[0] && b2[0] != '') {

        vencedor = b2[0]

    } else if ((c3[0] == c2[0] && c3[0] == c1[0] && c3[0] != '') || (c3[0] == b3[0] && c3[0] == a3[0] && c3[0] != '')) {

        vencedor = c3[0]

    } else if (a1[0] != undefined && a2[0] != undefined && a3[0] != undefined && b1[0] != undefined && b2[0] != undefined && b3[0] != undefined && c1[0] != undefined && c2[0] != undefined && c3[0] != undefined && vencedor != 'x' && vencedor != 'o') {

        vencedor = 'velha'
    }

    if (vencedor == 'x') {

        document.querySelector("#win-container").style.display = "flex"
        document.querySelector("#win-container h1").innerHTML = "Player 1 Wins!"
        document.querySelector("#player-turn h1").style.display = "none"

    } if (vencedor == 'o') {

        document.querySelector("#win-container").style.display = "flex"
        document.querySelector("#win-container h1").innerHTML = "Player 2 Wins!"
        document.querySelector("#player-turn h1").style.display = "none"

    } if (vencedor == 'velha') {

        document.querySelector("#win-container").style.display = "flex"
        document.querySelector("#win-container h1").innerHTML = "The game is a draw!"
        document.querySelector("#player-turn h1").style.display = "none"
    }

}

function start() {

    document.getElementById('menu-container').style.display = 'none'
    document.getElementById('win-container').style.display = 'none'
    document.getElementById('container').style.display = 'flex'

}

function restart() {

    document.getElementById('win-container').style.display = 'none'

    for (i = 0; i < 9; i++) {
        moves.shift()
        moves.push([])
    }

    a1 = moves[0]
    a2 = moves[1]
    a3 = moves[2]
    b1 = moves[3]
    b2 = moves[4]
    b3 = moves[5]
    c1 = moves[6]
    c2 = moves[7]
    c3 = moves[8]

    player = true
    vencedor = null

    for (i = 1; i < 4; i++) {

        document.getElementById('a' + i).classList.remove("Oplayed", "Xplayed")
        document.getElementById('b' + i).classList.remove("Oplayed", "Xplayed")
        document.getElementById('c' + i).classList.remove("Oplayed", "Xplayed")

    }

    document.querySelector("#player-turn h1").style.display = "block"
    document.querySelector("#player-turn h1").innerHTML = "Turn of Player 1"

}

function backMenu() {

    window.location.reload()

}


function showInstructions() {
    document.getElementById('instructions-board').style.display = 'flex'
}
function exitInstructions() {
    document.getElementById('instructions-board').style.display = 'none'
}

//jogador 1 = true