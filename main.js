var mouseEvent="empty";
var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext("2d");
 color = "black";
 width = 5;
 radius =10;
canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);
function my_mouseup(e){
  mouseEvent="mouseup";
}
function my_mouseleave(e){
   mouseEvent="mouseleave";
 }
function my_mousedown(e)
{
 color = document.getElementById("color").value;
 width = document.getElementById("width_of_line").value;
 mouseEvent = "mousedown";radius = document.getElementById("radius").value;
  
}
function my_mousemove(e)
       {
            console.log("mousemove");
            current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
            current_position_of_mouse_y = e.clientY - canvas.offsetTop; 
            if (mouseEvent == "mousedown")
             {
                console.log("Current position of x and y coordinates = "); 
                     console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
                  ctx.beginPath(); 
               ctx.strokeStyle = color;
                  ctx.lineWidth=width;
                last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y; ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
                     ctx.stroke();
               
               
             }}
         function clearArea() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     } 
     