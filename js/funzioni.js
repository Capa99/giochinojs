function generaFungo(){
    generaOggetto(FUNGO);
	
}
function generaSpada(){
    generaOggetto(ARMA);
	
}
function generaBuconero(){
	generaOggetto(BUCONERO);
}

function generaNemico(){
	//generaOggetto(NEMICO);
	setInterval(spostaNemico,1000);
	
}

function gameOver(){
			if (energia<0){
            document.getElementById("en").innerHTML="HAI PERSO!";
				document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
				document.getElementById("energia").style.display="none";
			}
}
function spostaNemico (){

	if (controllaCella(ANX, ANY)){

		var daSrc = "c" +nemicox+"_"+nemicoy; 
	    var aSrc  = "c" + ANX+"_"+ ANY;
		console.log(daSrc + " " +aSrc);
        piano[nemicox][nemicoy]=SFONDO;
		document.getElementById(daSrc).src = pathImg +  piano[nemicox][nemicoy] + ".jpg";
		piano[ANX][ANY]=NEMICO;
		nemicox= ANX;
		nemicoy= ANY;
		var min=1; 
        var max=4;  
        var random =Math.floor(Math.random() * (+max - +min)) + +min;
		if (random==1)
			ANX=(ANX -1 + R)%R;
		if (random==2)
			ANX=(ANX +1 + R)%R;
		if (random==3)
			ANY=(ANY -1 + C)%C;
		if (random==4)
			ANY=(ANY +1 + C)%C;
		disegnaNemico();
	}
	
}
function disegnaNemico(){
	disegnaCellaSpeciale(nemicox,nemicoy,NEMICO);
}
function controllaCellaNemico(){
	switch (piano[x][y]){
		case ARMA:
			return true; 	
		case OSTACOLO: 
			return false;
		case PILLOLA:
			return true;
		case FUNGO:
			return true;
		case BUCONERO:
			return true;
		case omino:
			if(omino == ominoConSpada){
				piano[x][y] = SFONDO;
				}
				else{
			energia=-1;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = NEMICO;
         gameOver();
		 }
			return true;
		default: 
	      return true; 
	}

	return true;
}
