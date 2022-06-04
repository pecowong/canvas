class DrawTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.globalCompositeOperation = "source-over";
    this.contextReal.fillStyle = "red";
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.fillStyle = "red";
    // this.contextDraft.strokeStyle = "black";
    // this.contextDraft.lineWidth = 10;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextDraft.fill();
    this.contextDraft.closePath();
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.fillStyle = "red";
    // this.contextReal.shadowBlur = 15;
    // this.contextReal.shadowColor = "red";
    // this.contextReal.strokeStyle = "black";
    // this.contextReal.lineWidth = 10;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextReal.fill();
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}