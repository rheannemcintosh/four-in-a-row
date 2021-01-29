/**
 * Class for the Game of Four in a Row
 */
class Game {

    /**
     * Constructor for the Board Class
     */
    constructor () {
        this.board   = new Board();
        this.players = this.createPlayers();
        this.ready   = false;
    }

    /** 
     * Returns active player.
     * @return  {Object}    player - The active player.
     */
    get activePlayer () {
        return this.players.find(player => player.active);
    }

    /**
     * Creates two player objects
     * @return  {array}    An array of two Player objects.
     */
    createPlayers () {
        const players = [
            new Player(1, "Player 1", "#e15258", true),
            new Player(2, "Player 2", "#e59a13")
        ];
        return players;
    }

    /*
     * Gets game ready for play
     */
    startGame () {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    playToken () {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
                console.log(targetSpace);
            }
        }
        
        if (targetSpace !== null) {
            console.log(targetSpace);
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
    */
    handleKeydown (e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.numColumns);
            } else if (e.key === "ArrowDown") {
                this.playToken();
            }
        }
    }

    
}