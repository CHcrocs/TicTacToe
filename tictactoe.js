function Gameboard() {
    const gameboard = new Array(9).fill(null)     

    this.getBoard = () => gameboard
    
    this.setCell = (index, player) => {
        if (gameboard[index] === null) {
            gameboard[index] = player
            return true
        }
        return false
    }

    this.resetBoard = () => {
        gameboard.fill(null)
    }
}   

function Player( name, marker) {
    this.name = name
    this.marker = marker
}

function GameController() {

}
