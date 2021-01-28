class Space {

    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 76;
        this.radius = this.diameter / 2;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }

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
    
}