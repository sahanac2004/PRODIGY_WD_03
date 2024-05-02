const board = document.getElementById("board");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("click", handleClick);
        board.appendChild(square);
    }
}

function handleClick(e) {
    if (!e.target.textContent) {
        e.target.textContent = currentPlayer;
        if (checkWin()) {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const squares = document.querySelectorAll(".square");
    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    const squares = document.querySelectorAll(".square");
    return [...squares].every(square => square.textContent);
}

function resetBoard() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => (square.textContent = ""));
    currentPlayer = "X";
}

resetButton.addEventListener("click", resetBoard);
createBoard();
