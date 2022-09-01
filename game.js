// Creating variables
let myX = 0, myY = 0,updates=0;
convolutionKernel=[
[0.68,-0.9,0.68],
[-0.9,-0.66,-0.9],
0.68,-0.9,0.68]


let grid=[]
for(let i=0;i<128;i++){
grid[i]=[]
for(let j=0;j<128;j++){
grid[i][j]=Math.random()*2-1
}

}
function activation(x){
return -1/Math.pow(2,Math.pow(x,2))+1
}
function updateGrid(){
try{

for(let i=0;i<128;i++){

for(let j=0;j<128;j++){

for(let m=i-1;m<i+2;m++){
for(let b=j-1;b<j+2;b++){
if(b!=m && b!=0){

}
}

}

}

}catch(e){

}

}
function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda

}

function draw() {


}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

