import "./styles.css";
import characterImage from "./goblin.png";

const gameContainer = document.getElementById("game-container");

// Создаем ячейки
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameContainer.appendChild(cell);
}

// Создаем персонаж
const character = document.createElement("img");
character.src = characterImage;
gameContainer.appendChild(character);

// Функция для получения случайной позиции
function getRandomPosition() {
  const rows = 4;
  const cols = 4;
  const randomRow = Math.floor(Math.random() * rows);
  const randomCol = Math.floor(Math.random() * cols);
  return { row: randomRow, col: randomCol };
}

// Функция для перемещения персонажа
function moveCharacter() {
  const newPosition = getRandomPosition();
  character.style.gridRow = newPosition.row + 1;
  character.style.gridColumn = newPosition.col + 1;
}

// Устанавливаем интервал для перемещения персонажа
setInterval(moveCharacter, 1000);
