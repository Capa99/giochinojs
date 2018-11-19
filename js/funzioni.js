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
function Cacciatore (x,y,nome){
this.x=x; 
this.y=y;
this.nome=nome;
}
	n1 = new Cacciatore(4,2,NEMICO);
	var intervallo=setInterval("n1.insegui()", 800);
	


function calcolaNuovaPosizioneCacciatore(){
	if(this.x > ominoX) {
		this.x ++;
	} else {
		this.x--;
	}
	if(this.y > ominoY) {
		this.y ++;
	} else {
		this.y--;
	}
}




	Cacciatore.prototype.insegui = function () {
	
	if(Math.sqrt(Math.pow((ominoX-this.x),2)+Math.pow((ominoY-this.y),2))<5){	
		var precX = this.x;
		var precY = this.y;
		var newX = this.x; 
		var newY = this.y; 
		if (this.x < ominoX) { newX = this.x +1; }
		if (this.x > ominoX) { newX = this.x - 1; }
		if (this.y < ominoY) {newY = this.y +1;}
		if (this.y > ominoY) {newY = this.y - 1;}
		
		// adesso prima di spostare controlliamo che non ci sia un ostacolo nella cella: 
		if (piano[newX][newY]!=OSTACOLO){
		// assume la nuova posizione
		this.x = newX; 
		this.y = newY;
		// si disegna il cacciatore nella nuova cella
		document.getElementById("c"+precX+"_"+precY).src=pathImg+piano[precX][precY] + ".jpg";
		document.getElementById("c"+this.x+"_"+this.y).src= pathImg+this.nome + ".jpg"; 
	}
	
}	
	else{
		
		var precX = this.x;
		var precY = this.y;
		var newX = this.x; 
		var newY = this.y; 
		var min=1; 
        var max=4;  
        var random =Math.floor(Math.random() * (+max - +min)) + +min;
		if (random==1)
			newX=(newX -1 + R)%R;
		if (random==2)
			newX=(newX +1 + R)%R;
		if (random==3)
			newY=(newY -1 + C)%C;
		if (random==4)
			newX=(newY +1 + C)%C;
		
		if (piano[newX][newY]!=OSTACOLO){
		this.x= newX;
		this.y= newY;
		
		document.getElementById("c"+precX+"_"+precY).src=pathImg+piano[precX][precY] + ".jpg";
		document.getElementById("c"+this.x+"_"+this.y).src= pathImg+this.nome + ".jpg"; 
			}}
			if (this.x == ominoX && this.y == ominoY ){
				if (omino==ominoConSpada)
					clearInterval(intervallo);
				else{
				energia=-1;
				gameOver();
				}
}

	}

	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
function gameOver(){
			if (energia<0){
            document.getElementById("en").innerHTML="HAI PERSO!";
				document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
				document.getElementById("energia").style.display="none";
			}
}// il this.nome coincide con il nome dell’immagine nel file system 







function barraEnergia() {
   var elem = document.getElementById("energia");   
    if (energia == 100) {
    	// energia al massimo, non si pu򠰩񠩮crementare, gestire eventuale vittoria o altro.   
     }  else {
      	elem.style.width = energia + '%'; // incremento dellӥnergia
    }
}