img ="";
status = "";
objects =[];


function preload(){

 img = loadImage('dog_cat.jpg');

}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function Start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){
    console.log("ModelLoaded");
    status = true;
    objectDetector.detect(video,gotResult);
}



function gotResult(error,results){
 if(error){
console.log(error);
 }
  console.log(results);
  objects = results;
}


function draw(){
image( video,0,0,380,380);
if(status != ""){
    r=random(255);
    g=random(255);
    b=random(255);
        objectDetector.detect(video,gotResult);

for(a=0;  a< objects.length; a++)
{
    document.getElementById("status").innerHTML="Status: Object Detected";
    document.getElementById("number_of_objects").innerHTML ="Number of objects detected are :"+objects.length;
    fill (r,g,b);
    percent = floor(objects[a].confidence *100);
    text(objects[a].label+" " +percent+"%" ,objects[a].x+15 , objects[a].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[a].x,objects[a].y, objects[a].width, objects[a].height);
}
}
}