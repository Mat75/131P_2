ObjectDetector=""
ImG=""
objects=[]

status=""



function preload(){
ImG=loadImage("https://i.pinimg.com/originals/7e/e4/8c/7ee48c5e5657ccb242a9e001e2c8d9f1.jpg")
}

function setup(){
Canvas=createCanvas(640,420)
Canvas.center()
ObjectDetector=ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML= "Estatus: Detectando objetos"
}
function draw(){
image(ImG,0,0,640,420)
if(status != ""){


for (let index = 0; index < objects.length; index++) {
   
   document.getElementById("status").innerHTML="estado:: detectando"
porcentaje=results[index].confidence

porcentajeRedondeado=floor(porcentaje*100)
nombre=results[index].label
X=results[index].x
Y=results[index].y
ancho=results[index].width
altura=results[index].height
text(nombre+porcentaje+"%",x+15,y+15)
noFill()
stroke("red")
rect(X,Y,ancho,alto)
}
}
}
function modelLoaded(){
   console.log("modelo cargado correctamente")
   status=true
   ObjectDetector.detect(ImG,gotResults)
}
function gotResults(results, error){
   if(error){
console.error(error)
   }else{
       console.log(results)
       objects=results
   }
}
