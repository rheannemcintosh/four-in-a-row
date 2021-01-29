/**
 * Class for the Token of Four in a Row
 */
class Token {

    /**
     * Constructor for the Token Class
     */
    constructor(index, player) {
        this.player         = player;
        this.tokenID        = `token-${index}-${player.id}`;
        this.dropped        = false;
        this.columnLocation = 0;
    }

    /**
     * Gets the HTML Token
     */
    get htmlToken () {
        return document.getElementById(this.id);
    }

    /**
     * Draw the HTML Token
     */
    drawHTMLToken () {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.player.colour;
    }
}