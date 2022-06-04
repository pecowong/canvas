
let undoDataStack = [];
let redoDataStack = [];


function beforeDraw() {
    var lastMove = canvas-real[0].toDataURL();
    undoDataStack.push(lastMove);
    redoDataStack = [];
}

$('#undo-button').click(function undo () {

    if (undoDataStack.length == 0) {
        return;
    
    }else if (undoDataStack.length == 1) {
        contextReal.fillStyle = "#ffffff";
        contextReal.fillRect(0,0,canvasDraft.width,canvas-draft.height);
    } else if (undoDataStack.length > 1) {
        var lastStep = new Image();
        lastStep.src = undoDataStack[undoDataStack.length - 2];
        lastStep.onload = function (){
        contextReal.drawImage(lastStep, 0, 0);
    };
    }
    redoDataStack.push(undoDataStack.pop());
})

$('#redo-button').click(function redo () {
    if (redoDataStack.length > 0) {
        var nextStep = new Image();
        nextStep.src = redoDataStack[redoDataStack.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undoDataStack.push(redoDataStack.pop());
    }

    
}
)
