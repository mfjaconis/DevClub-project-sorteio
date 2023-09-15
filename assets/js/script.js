const buttonSorteio = document.querySelector(".btn-sorteio");
const buttonReset = document.querySelector(".btn-reset");
const minInput = document.querySelector("#min-input");
const maxInput = document.querySelector("#max-input");
const informationValueSorteio = document.querySelector(".number-draw");

minInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      draw();
    }
  });
  
  maxInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      draw();
    }
  });

function draw() {
  let min = minInput.value;
  let max = maxInput.value;

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) {
    alert("O valor mínimo não pode ser superior ao valor máximo");
  } else if (min === "" || max === "") {
    alert("Os campos não podem estar vazio");
  } else if (min === max) {
    alert("Os campos não podem ser iguais");
  } else if (min < 0 || max < 0) {
    alert("Não é aceito número negativo");
  } else {
    const result = Math.floor(Math.random() * (max - min) + min);

    informationValueSorteio.innerHTML = result;

    minInput.value = "";
    maxInput.value = "";

    if (result % 2 === 0) {
      informationValueSorteio.classList.add("text-preto");
    } else {
      informationValueSorteio.classList.remove("text-preto");
      informationValueSorteio.classList.add("text-vermelho");
    }
  }
}


buttonSorteio.addEventListener("click", draw);

