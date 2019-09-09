var contagem=0;
var time;
var temp_cont=0;
			
function contando(){
	document.getElementById("txt").value=contagem;
	contagem = contagem + 1;
	time=setTimeout("contando()",1000);
}
function iniciar(){
	if (!temp_cont){
		temp_cont=1;
		contando();
		}
	}
function parar(){
	clearTimeout(time);
	temp_cont=0;
}
			
function zerar(){
	document.getElementById("txt").value = 0;	
}