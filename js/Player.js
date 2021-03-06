/**
 * Class for the Player of Four in a Row
 */
class Player {
    
    /**
     * Constructor for the Player Class
     */
    constructor(playerID, username, colour, active = false) {
        this.playerID = playerID;
        this.username = username;
        this.colour   = colour;
        this.active   = active;
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

    /**
     * Gets all tokens that haven't been dropped.
     * @return {array} Array of unused tokens.
     */
    get unusedTokens () {
        return this.tokens.filter(token => !token.dropped);
    }

    /**
     * Gets the active token by returning the first token in the array of unused tokens.
     * @return {Object} First token object in the array of unused tokens.
     */
    get activeToken () {
        return this.unusedTokens[0];
    }

    /**
     * Check if a player has any undropped tokens left
     * @return {Boolean} 
     */
    checkTokens () {
        return this.tokens.length == 0 ? false : true;
    }
}