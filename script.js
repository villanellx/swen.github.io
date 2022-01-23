var palavras = ["A Viagem", "The Nanny", "Vamp", "Pica Pau", "Era Uma Vez", "Corpse Bride", "Up Close & Personal", "Os Simpsons", "A Favortia"]
let button = document.getElementById('sortear').addEventListener('click', sorteio)

function sorteio() {
    let sort = Math.floor(Math.random() * palavras.length)
    document.getElementById('resultado').innerHTML = palavras[sort]
}
