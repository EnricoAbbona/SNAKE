import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let punteggio=0;
let food = getRandomFoodPosition()
const EXPANSION_RATE = 6 // QUESTA COSTANTE GESTISCE L'ESPANSIONE DELLO SNAKE

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    punteggio++;
    console.log(punteggio);
    document.getElementById('punteggio').innerHTML = punteggio;
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
