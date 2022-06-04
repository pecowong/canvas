class DrawingSLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        // setStyleLine ()
        this.origX = coord[0];
        this.origY = coord[1];
        


    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }
    onMouseMove() { }
    onMouseUp(coord,event) { 
        this.contextReal.strokeStyle = "black";
        this.contextReal.lineWidth= 3;
        console.log("highlight")
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        // setColorSet ()
      
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
    //     restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
    //     index += 1;
    }

    onMouseLeave() {}
    onMouseEnter() {}
    draw(x, y) {
        this.contextReal.lineTo(x, y);
        this.contextReal.moveTo(x, y);
        this.contextReal.stroke();
    }
}