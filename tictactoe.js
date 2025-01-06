const Gameboard = (() => {
    const gameboard = new Array(9).fill(null);

    const getBoard = () => gameboard;
    
    const setCell = (index, player) => {
        if (gameboard[index] === null) {
            gameboard[index] = player;
            return true;
        }
        return false;
    }

    const resetBoard = () => {
        gameboard.fill(null);
    }

    return {getBoard, resetBoard, setCell};
})

const Player = (name, marker) => {
    this.name = name;
    this.marker = marker;
}

const GameController = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    let currentPlayer = player1;
    let isGameOver = false;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows 
            [0, 3, 6], [1, 4, 5], [2, 5, 8], //Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        for (const combo of winningConditions) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                isGameOver = true;
                return currentPlayer.name;
            }
        }

        if(board.every(cell => cell != null)) {
            isGameOver = true;
            return "Draw";
        }
        
        return null;
    }
});
