const buttonSorteio = document.querySelector(".btn-sorteio")

function draw() {
    const firstInputValue = document.querySelector("#first-input").value
    const secondInputValue = document.querySelector("#second-input").value

    console.log(firstInputValue, secondInputValue)
}

buttonSorteio.addEventListener('click', draw)