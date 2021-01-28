class Token {
    constructor(player, index) {
        this.player  = player;
        this.tokenID = `token-${index}-${player.id}`;
        this.played = false;
    }

    htmlToken () {

    }

    drawHTMLToken () {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}