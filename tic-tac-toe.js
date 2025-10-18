document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const statusDiv = document.getElementById('status');
  const newGameButton = document.querySelector('.btn');
  let gameState = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameActive = true;

  // Initialize the board
  const squares = Array.from(board.children);
  squares.forEach((square, index) => {
    square.classList.add('square');
    square.addEventListener('click', () => {
      if (!gameState[index] && gameActive) { // Prevent changing a square with a value
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (checkWinner()) {
          statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          statusDiv.classList.add('you-won');
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          statusDiv.textContent = `It's ${currentPlayer}'s turn.`;
        }
      }
    });

    square.addEventListener('mouseover', () => {
      square.classList.add('hover');
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });
  });

  // Reset the game
  newGameButton.addEventListener('click', () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDiv.classList.remove('you-won');
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
  });

  // Check for a winner
  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
  }
});