const mudarCor = document.querySelector("#color");
const alteraCor = document.querySelector("#altera");

alteraCor.onclick= function(){
	document.body.style.backgroundColor="#"+mudarCor.value;
	
}