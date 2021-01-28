/**
 * Class for the Token of Four in a Row
 */
class Token {
    constructor(player, index) {

    /**
     * Constructor for the Token Class
     */
        this.player  = player;
        this.tokenID = `token-${index}-${player.id}`;
        this.played = false;
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
        token.style.backgroundColor = this.owner.color;
    }
}