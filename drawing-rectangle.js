class DrawingRectangle extends PaintFunction{
    constructor(x,y){
        super();
        this.contextReal = x;
        this.contextDraft = y;
    }
    onMouseDown(coord,event){
        this.contextReal.fillStyle = "cornflowerblue";
        this.a = coord[0];
        this.b = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "cornflowerblue";
        this.contextDraft.clearRect(0,0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
            this.a, 
            this.b,
            coord[0] - this.a,
            coord[1] - this.b
            );
    
    }
    onMouseMove(){}
    onMouseUp(coord){
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
        this.a,
        this.b,
        coord[0] - this.a,
        coord[1] -  this.b   
        );
    }

    onMouseLeave(){}
    onMouseEnter(){}

}