var canvas=document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")
var roverX=80
var roverY=80
var array=[
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631250305222E03_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg",
    "mars.jpg"
]
var x=Math.floor(Math.random()*5)
var background=array[x]
var roverimg="rover.png"
function add(){
    bg=new Image()
    bg.onload= uploadbackground
    bg.src=background

    rover=new Image()
    rover.onload=uploadrover
    rover.src=roverimg
}
function uploadbackground(){
    ctx.drawImage(bg, 0,0, canvas.width ,canvas.height)

}
function uploadrover(){
    ctx.drawImage(rover, roverX, roverY, 100, 100)
}
window.addEventListener("keydown",kd)
function  kd(e){
    var keyno=e.keyCode
    console.log(keyno)
    if (keyno==37){
        left()
        console.log("You have pressed left")
    }
    if (keyno==38){
        up()
        console.log("You have pressed up")
    }
    if (keyno==39){
        right()
        console.log("You have pressed right")
    }
    if (keyno==40){
        down()
        console.log("You have pressed up")
    }
}
function right(){
     if (roverX<700){
        roverX=roverX+10
        uploadbackground()
        uploadrover()
      }
}
function left(){
    if (roverX>0){
        roverX=roverX-10
        uploadbackground()
        uploadrover()
    }
}
function up(){
    if (roverY>0){
        roverY=roverY-10
        uploadbackground()
        uploadrover()
    }

}
function down(){
    if (roverY<500)
    roverY=roverY+10
    uploadbackground()
    uploadrover()
}
