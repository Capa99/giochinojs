function generaFunghi(){
    generaOggetto(FUNGO);
	
}
function generaSpada(){
    generaOggetto(ARMA);
	
}
function generaBuchineri(){
	generaOggetto(BUCONERO);
}

function gameOver(){
			if (energia<0){
				document.getElementById("energia").innerHTML="Game Over";
			}
}

