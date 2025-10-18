document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div'); // Select all divs inside the board
  let currentPlayer = 'X'; // Start with player X
  const gameState = Array(9).fill(null); // Initialize an empty array to track the game state

  squares.forEach((square, index) => {
    square.classList.add('square'); // Add the 'square' class to each div

    square.addEventListener('click', () => {
      if (!gameState[index]) { // Check if the square is empty
        gameState[index] = currentPlayer; // Update the game state
        square.textContent = currentPlayer; // Display X or O
        square.classList.add(currentPlayer); // Add the class 'X' or 'O' for styling

        // Alternate the player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });
});