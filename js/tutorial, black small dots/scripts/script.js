//tutorial from - https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA
console.log("script.js file loaded");
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c =  canvas.getContext("2d");
var mouse = {
   x:undefined,
   y:undefined
}
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
});
function Circle(x,y, dx, dy, radius){
  this.x = x;
  this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function(){
        c.beginPath(); 
        c.arc(this.x, this.y ,this.radius, 0, Math.PI*2, false);
        c.strokeStyle = "white";
        c.stroke();
        c.fill();
        
        
    }
    this.update = function(){
        if (this.x + this.radius >innerWidth || this.x - radius < 0){
        this.dx = -this.dx;
    }
     if (this.y + this.radius >innerHeight || this.y-radius < 0){
        this.dy = -this.dy;
    }
  
    this.x += this.dx;  
    this.y += this.dy; 
       if (mouse.x - this.x<50 && mouse.x- this.x>-50&&mouse.y-this.y<50 && mouse.y-this.y>-50){
           if (this.radius<40)
           {this.radius +=1;}
       }else if (this.radius>2){
         this.radius -=1;  
           
       }
        this.draw();
    }
}

var circleArray = [];
for (var i=0; i<150; i++){
var radius = 30;
var x = Math.random() * (innerWidth - radius *2) + radius;
var y = Math.random() * (innerHeight - radius*2) + radius;
var dx = (Math.random() - 0.5)* 3;
var dy = (Math.random() - 0.5)* 3;

circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
requestAnimationFrame(animate);//creating a loop
c.clearRect(0, 0, innerWidth, innerHeight);
    
for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
    
}
    

    
}
animate();





