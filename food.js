import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'


let punteggio=0;
let food = getRandomFoodPosition()
const EXPANSION_RATE = 6 // QUESTA COSTANTE GESTISCE L'ESPANSIONE DELLO SNAKE

let migliorPunteggio = localStorage.getItem('miglior_punteggio');

        if (!migliorPunteggio) {
            migliorPunteggio = 0;
        }
        document.getElementById('migliorPunteggio').textContent = migliorPunteggio;


export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()

    // metodo per sapere punteggio attuale;
    punteggio++;
    console.log(punteggio);
    document.getElementById('punteggio').innerHTML = punteggio;

    // aggiornamento miglior punteggio
    if (punteggio>migliorPunteggio){
      migliorPunteggio = punteggio;
      localStorage.setItem('miglior_punteggio', migliorPunteggio);
      document.getElementById('migliorPunteggio').textContent = migliorPunteggio;
      console.log("Il nuovo miglior punteggio è: " + migliorPunteggio);
    }
   
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
