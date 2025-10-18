document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div'); // Select all divs inside the board
  squares.forEach(square => {
    square.classList.add('square'); // Add the 'square' class to each div
  });
});