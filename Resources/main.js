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


function play(square, place) {

    if (moves[square] == '') {

        if (player == true) {

            moves[square].push('x')

            document.getElementById(place).classList.add("Xplayed")
            document.querySelector("#player-turn h1").innerHTML = "Vez do jogador O"

        } else {
            moves[square].push('o')

            document.getElementById(place).classList.add("Oplayed")
            document.querySelector("#player-turn h1").innerHTML = "Vez do jogador X"

        }

        player = !player
        document.getElementById("error").style.display = "none"

    } else {
        document.getElementById("error").style.display = "block"
    }

    winCondition()

}

function winCondition() {

    if (a1[0] == a2[0] && a1[0] == a3[0] && a1[0] != '') {
        console.log('YOU WIN')
    }
}


// CONDIÇOES PARA WIN


/* OKKK
JOGADOR1 CLICA
BACKGROUND DE x NO QUADRADO
REGISTRA QUAL QUADRADO O x CLICOU NO ARRAY
MUDA PRO PLAYER 2
*/