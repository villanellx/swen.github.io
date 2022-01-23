var palavras = ["Valorant", "League Of Legends"]
let button = document.getElementById('sortear').addEventListener('click', sorteio)

function sorteio() {
    let sort = Math.floor(Math.random() * palavras.length)
    document.getElementById('resultado').innerHTML = palavras[sort]
}