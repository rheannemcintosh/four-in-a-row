class Board {
    
    constructor () {
        this.numRows    = 6;
        this.numColumns = 7;
        this.spaces     = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
    */
    createSpaces () {
        const spaces = [];
        for (let x = 0; x <= this.numRows; x++) {
            const column = [];
            for (let y = 0; y <= this.numColumns; y++) {
                const space = new Space(x,y);
                column.push(space);
            }

            spaces.push(space);
        }
        return spaces;
    }
}