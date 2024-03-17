let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    case "w":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "s":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "a":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "d":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

let startX, startY;

window.addEventListener(
  "touchstart",
  function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  },
  false
);

window.addEventListener(
  "touchmove",
  function (event) {
    let endX = event.touches[0].clientX;
    let endY = event.touches[0].clientY;

    let deltaX = startX - endX;
    let deltaY = startY - endY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Scorrimento orizzontale
      if (deltaX > 0) {
        if (lastInputDirection.x !== 0);
        inputDirection = { x: -1, y: 0 };
        console.log("Scorrimento verso sinistra");
      } else {
        if (lastInputDirection.x !== 0) ;
        inputDirection = { x: 1, y: 0 };
        console.log("Scorrimento verso destra");
      }
    } else {
      // Scorrimento verticale
      if (deltaY > 0) {
        if (lastInputDirection.y !== 0) ;
        inputDirection = { x: 0, y: -1 };
        console.log("Scorrimento verso l'alto");
      } else {
        if (lastInputDirection.y !== 0) ;
        inputDirection = { x: 0, y: 1 };
        console.log("Scorrimento verso il basso");
      }
    }
  },
  false
);
