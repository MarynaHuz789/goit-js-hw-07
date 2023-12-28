
const boxes = document.querySelector("#boxes")
const input = document.querySelector("input")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")

createBtn.addEventListener("click", createBox)
destroyBtn.addEventListener("click", destroyAllBoxes)

function createBox() {
  let numberBoxes = Number(input.value)
  const totalBoxes = []

  if (numberBoxes >= input.attributes.min.value && numberBoxes <= input.attributes.max.value) {
  for (let i = 1; i <= numberBoxes; i+=1) {
    const box = document.createElement("div")
    box.style.width = `${30+(i-1)*10}px`
    box.style.height = `${30 + (i - 1) * 10}px`
    box.style.borderRadius = "50%"
    box.style.backgroundColor = getRandomHexColor()
    totalBoxes.push(box)
  }
    boxes.append(...totalBoxes)

    input.value = "";
}
  else {
    alert("Input number from 1 to 100")
  }
}

function destroyAllBoxes() {
  
  boxes.innerHTML = ""
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}