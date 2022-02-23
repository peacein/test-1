let drawing = false;
let context;

window.onload = function (){
  // Clear button 
  document.querySelector("#btnClear").addEventListener("click", function () {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }, false);

  // Back button
  document.querySelector("#btnBack").addEventListener("click", function () {
    document.querySelector("#myCanvas").style.display = "block";
    document.querySelector("#saveArea").style.display = "none";
    document.querySelector("#tools").style.display = "block";
  }, false);

  // Width Scale 
  document.querySelector("#lineWidth").addEventListener("change", function() {
    context.lineWidth = document.querySelector("#lineWidth").value;
  }, false);

  // Color Picker
  document.querySelector("#colorChange").addEventListener("change", function() {
    context.strokeStyle = document.querySelector("#colorChange").value;
  }, false);

  // Save
  document.querySelector("#btnSave").addEventListener("click", function () {
    document.querySelector("#myCanvas").style.display = "none";
    document.querySelector("#saveArea").style.display = "block";
    document.querySelector("#tools").style.display = "none";

    let dataURL = document.querySelector("#myCanvas").toDataURL();
    document.querySelector("#canvasImage").src = dataURL;
  }, false);

  // Size Canvas
  context = document.querySelector("#myCanvas").getContext("2d");
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight - 60;

  // Style line
  context.strokeStyle = "#000";
  context.lineJoin = "round";
  context.lineWidth = 5;

  // Mouse Movement
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleDown;
  document.onmouseup = handleUp;

  // Hide Save area
  document.querySelector("#saveArea").style.display = "none";
}

function handleMouseMove(e) {
  // console.log(e.clientX, e.clientY);

  if (drawing) {
    context.lineTo(e.clientX, e.clientY);
    context.closePath();
    context.stroke();
    context.moveTo(e.clientX, e.clientY);
  } else {
    context.moveTo(e.clientX, e.clientY);
  }
}
function handleDown(e)
{
    drawing = !drawing; 
    // console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();
     
}

function handleUp()
{
    drawing = !drawing;
    // console.log(drawing);
}
