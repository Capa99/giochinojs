function generaFungo(){
    generaOggetto(FUNGO);
	
}
function generaSpada(){
    generaOggetto(ARMA);
	
}
function generaBuconero(){
	generaOggetto(BUCONERO);
}

function generaPortale(){
	generaOggetto(PORTALE);
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
	if (controllaCellaNemico(ANX, ANY)){
		var daSrc = "c" +nemicox+"_"+nemicoy; 
	    var aSrc  = "c" + ANX+"_"+ ANY;
		console.log(daSrc + " " +aSrc);
		piano[nemicox][nemicoy]=pastnemico;
		document.getElementById(daSrc).src = pathImg +  piano[ANX][ANY] + ".jpg";
		piano[ANX][ANY]=NEMICO;
		
		nemicox= ANX;
		nemicoy= ANY;
		
		disegnaNemico();
	}
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
}
function disegnaNemico(){
	disegnaCellaSpeciale(nemicox,nemicoy,NEMICO);
}
function controllaCellaNemico(x,y){
	switch (piano[x][y]){
		case ARMA:
			pastnemico=ARMA;
			return false; 	
		case OSTACOLO:
			spostaNemico();
			return false;
		case PILLOLA:
			pastnemico=PILLOLA;
			return false;
		case FUNGO:
			pastnemico=FUNGO;
			return false;
		case BUCONERO:
			pastnemico=BUCONERO;
			return false;
      case PORTALE:
			pastnemico=PORTALE;
			return false;
		case ominoConSpada:		
				pastnemico=SFONDO;		
				NEMICO = SFONDO;
				
				
				return true;
		case omino:
			pastnemico = NEMICO;
			energia=-1;
			document.getElementById("energia").innerHTML=energia;			
			gameOver();
		 
			return true;
		default: 
			valore=SFONDO;
	      return true; 
	}

	return true;
}
