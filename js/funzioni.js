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
	generaOggetto(NEMICO);
}

function gameOver(){
			if (energia<0){
            document.getElementById("en").innerHTML="HAI PERSO!";
				document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
				document.getElementById("energia").style.display="none";
			}
}

