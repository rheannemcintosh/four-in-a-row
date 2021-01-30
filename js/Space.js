/**
 * Class for the Space of Four in a Row
 */
class Space {

    /**
     * Constructor for the Space Class
     */
    constructor (x, y) {
        this.x        = x;
        this.y        = y;
        this.diameter = 76;
        this.radius   = this.diameter / 2;
        this.id       = `space-${x}-${y}`;
        this.token    = null;
    }

    /** 
     * Draws associated SVG spaces for all game spaces.
     */
    drawSVGSpace () {
        // Create the SVG Element
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        
        // Set the Attrtibutes
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");
        
        //Attach the Element to the DOM
        document.getElementById("mask").appendChild(svgSpace);   
    }

    /**
     * Updates space to reflect a token has been dropped into it.
     * @param {Object} token - The dropped token
     */
    mark (token) {
        this.token = token;
    }
}