/**
 * Class for the Board of Four in a Row
 */
class Board {
    
    /**
     * Constructor for the Board Class
     */
    constructor () {
        this.numRows    = 6;
        this.numColumns = 7;
        this.spaces     = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {array}     An array of space objects
    */
    createSpaces () {
        const spaces = [];

        for (let x = 0; x < this.numColumns; x++) {
            const column = [];

            for (let y = 0; y < this.numRows; y++) {
                const space = new Space(x,y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
        
    }

    /** 
     * Draws associated SVG spaces for all game spaces.
     */
    drawHTMLBoard () {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}