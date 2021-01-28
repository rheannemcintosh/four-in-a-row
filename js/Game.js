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

    }
    
}