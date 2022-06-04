class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, e) {
      this.contextReal.fillStyle = "#4DC788";
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, e) {
      this.contextDraft.fillStyle = "#4DC788";
      this.contextDraft.strokeStyle = "#4DC788";
      let radius = 0;
      let pointX = coord[0] - this.origX;
      let pointY = coord[1] - this.origY;
      radius = Math.sqrt(pointX * pointX + pointY * pointY);
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.clientWidth,
        canvasDraft.height
      );
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
      this.contextDraft.fill();
      this.contextDraft.stroke();
    }
    onMouseUp(coord) {
      let radius = 0;
      let pointX = coord[0] - this.origX;
      let pointY = coord[1] - this.origY;
      radius = Math.sqrt(pointX * pointX + pointY * pointY);
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.clientWidth,
        canvasDraft.height
      );
      this.contextReal.beginPath();
      this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
      this.contextReal.fill();
      this.contextReal.strokeStyle = "#4DC788";
      this.contextReal.stroke();
    }

    
    onMouseLeave() {}
    onMouseEnter() {}
  }




















// class DrawingCircle extends PaintFunction{
//     constructor(x,y){
//         super();
//         this.contextReal = x;
//         this.contextDraft = y;
//     }


//     onDragging(coord,e){
//         this.clearRect(0,0,canvas.width,canvas.height);
//         this.contextReal.beginPath();
//         this.moveTo(startX, startY + (y-startY)/2);
//         this.bezierCurveTo(startX, startY, x, startY, x, startY + (y-startY)/2);
//         this.bezierCurveTo(x, y, startX, y, startX, startY + (y-startY)/2);
//         context.fillStyle = 'green';
//         ctx.closePath();
//         ctx.stroke();
   
//         context.lineWidth = 5;
//         context.strokeStyle = '#003300';
//         context.stroke();
//     }


//  onMouseDown(e){
//     e.preventDefault();
//     e.stopPropagation();
//     startX=parseInt(e.clientX-offsetX);
//     startY=parseInt(e.clientY-offsetY);
//     isDown=true;
//   }
//   onMouseUp(e){
//     if(!isDown){ return; }
//     e.preventDefault();
//     e.stopPropagation();
//     isDown=false;
//   }
//   mouseleave(e){
//     if(!isDown){ return; }
//     e.preventDefault();
//     e.stopPropagation();
//     isDown=false;
//   }
//   mouseMove(e){
//     if(!isDown){ return; }
//     e.preventDefault();
//     e.stopPropagation();
//     mouseX=parseInt(e.clientX-offsetX);
//     mouseY=parseInt(e.clientY-offsetY);
//     drawOval(mouseX,mouseY);

//   }
//     // onDragging(coord,event){
//     //     this.draw(coord[0],coord[1]);
//     // }
//     onMouseDown(){}
//     onMouseMove(){}
//     onMouseUp(){}
//     onMouseLeave(){}


//     }




// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();



// onMouseDown(coord,event){
//     this.contextReal.strokeStyle = "black";
//     this.contextReal.lineJoin = "round";
//     this.contextReal.lineWidth= 3;
//     this.contextReal.beginPath();
//     this.contextReal.moveTo(coord[0],coord[1]);
//     this.draw(coord[0],coord[1]);

// }
// onDragging(coord,event){
//     this.draw(coord[0],coord[1]);
// }

// onMouseMove(){}
// onMouseUp(){}
// onMouseLeave(){}
// onMouseEnter(){}



// draw(x,y){
//     this.contextReal.lineTo(x,y);
//     this.contextReal.moveTo(x,y);
//     this.contextReal.closePath();
//     this.contextReal.stroke();

// }
// }