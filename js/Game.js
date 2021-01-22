class Game {

    constructor () {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
    */
    createPlayers () {
        const players = [new Player(1, "Player 1", "#e15258", true),
                         new Player(2, "Player 2", "#e59a13")];
        return players;
    }
    
}