class Token {
    constructor(player, index) {
        this.player  = player;
        this.tokenID = `token-${index}-${player.id}`;
        this.played = false;
    }
}