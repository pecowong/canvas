ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();

function download_image(){
  
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}