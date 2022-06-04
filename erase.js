
// document.getElementById('erase').addEventListener('click', function() {
//     context.clearRect(x,y);
//   }, false);
  
  class erase extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
      var lastX = coord[0];
      var lastY = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(lastX, lastY);
      this.contextReal.lineTo(coord[0], coord[1]);
    }
    onDragging(coord, event) {
      var lastX = coord[0];
      var lastY = coord[1];
      this.contextReal.globalCompositeOperation = "destination-out";
      this.contextReal.arc(lastX, lastY, 8, 0, Math.PI * 2, false);
      this.contextReal.fill();
    }
    onMouseUp(coord, event) {
      this.contextReal.globalCompositeOperation = "source-over";
    }
    onMouseMove() {}
    onMouseLeave() {}
    onMouseEnter() {}
  }


