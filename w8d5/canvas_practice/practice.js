document.addEventListener("DOMContentLoaded", function(){
    let canvasEle = document.getElementById("mycanvas");
    canvasEle.width = 500;
    canvasEle.height = 500;

    let ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
});
