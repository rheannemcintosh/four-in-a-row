class Player {
    
    constructor(playerID, username, color, myTurn = false) {
        this.playerID = playerID;
        this.username = username;
        this.colour   = colour;
        this.myTurn   = myTurn;
        this.tokens   = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param     {integer}    num - Number of token objects to be created
     * @returns   {Array}     An array of the newly created token objects
    */
    createTokens(num){
        const tokens = [];
        if (num >= 1) {
            for (let i = 1; i <= num; i++) {
                let token = new Token(i, this);
                tokens.push(token);
            }
        }
        return tokens;
    }
}