canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image = "";

img_x = 100;
img_y = 100;

function add(){
    img_M = new Image(); 
    img_M.onload = uploadimg; 
	img_M.src = img_image;   
}
function uploadimg(){
	ctx.clearRect(img_x, img_y, img_width, img_height);
	ctx.drawImage(img_M, img_x, img_y, img_width, img_height);
	
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey()
			document.getElementById("d1").innerHTML="Presionaste una letra Alfabetica";
		}
		if (keyPressed >= 48 && keyPressed <= 57){
			numberkey()
			document.getElementById("d1").innerHTML="Presionaste un Numero";
		}
		if (keyPressed >= 37 && keyPressed <= 40){
			arrowkey()
			document.getElementById("d1").innerHTML="Presionaste una Flecha";
		}
		if ( (keyPressed == 17)||(keyPressed == 18)||(keyPressed == 27) ){
			specialkey()
			document.getElementById("d1").innerHTML="Presionaste una Tecla especial";
		}
		if ((keyPressed == 9)||(keyPressed == 20)||(keyPressed == 16)||(keyPressed == 13)||(keyPressed == 8)){
			otherkey()
			document.getElementById("d1").innerHTML="Presionaste otra Tecla";
		}
}

function aplhabetkey(){
	img_image = "Alpkey.png";
	add();
}
function numberkey(){	
	img_image = "numkey.png";
	add();
}
function arrowkey(){
	img_image = "Arrkey.png";
	add();
}
function specialkey(){
	img_image = "spkey.png";
	add();
}
function otherkey(){
	img_image="otherkey.png";
	add();
}
