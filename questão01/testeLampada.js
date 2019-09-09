const lampada = document.querySelector("#lampada");
const lamp02 = document.querySelector("#lamp");

var acesa = false;


lamp02.onclick=function(){
	if(acesa){
		lampada.src="lampadaapagada.png";
		acesa=false;
		lamp02.value="acender";

	}else{

		lampada.src="lampadaacesa.png";
		acesa=true;
		lamp02.value="apagar";

	}
	
}
