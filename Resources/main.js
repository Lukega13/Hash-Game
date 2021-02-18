let player = true

// Registra as jogadas
let moves = [[], [], [], [], [], [], [], [], []]

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

}


// CONDIÇOES PARA WIN

// 

/* OKKK
JOGADOR1 CLICA
BACKGROUND DE x NO QUADRADO
REGISTRA QUAL QUADRADO O x CLICOU NO ARRAY
MUDA PRO PLAYER 2
*/