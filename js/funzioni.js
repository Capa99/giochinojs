function generaFungo(){
    generaOggetto(FUNGO);	
}
function generaSpada(){
    generaOggetto(ARMA);
}
function generaBuconero(){
	generaOggetto(BUCONERO);
}

function generaPortale1(){
	piano[PORTALE1_X][PORTALE1_Y]=PORTALE1;
	disegnaCella(PORTALE1_X,PORTALE1_Y);
}

function generaPortale2(){
	piano[PORTALE2_X][PORTALE2_Y]=PORTALE2;
	disegnaCella(PORTALE2_X,PORTALE2_Y);
}

function Cacciatore (x,y,nome){
	this.x=x; 
	this.y=y;
	this.nome=nome;
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
		if (piano[newX][newY]!=OSTACOLO && piano[newX][newY]!=PORTACHIUSA && piano[newX][newY]!=LASERONESU && piano[newX][newY]!=LASERONEGIU && piano[newX][newY]!=LASER){
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
			if(newX>0)
			newX=(newX -1 + R)%R;
		if (random==2)
			if(newX<R-1)
			newX=(newX +1 + R)%R;
		if (random==3)
			if(newY>0)
			newY=(newY -1 + C)%C;
		if (random==4)
			if(newY<C-1)
			newY=(newY +1 + C)%C;		
		if (piano[newX][newY]!=OSTACOLO && piano[newX][newY]!=PORTACHIUSA && piano[newX][newY]!=LASERONESU && piano[newX][newY]!=LASERONEGIU && piano[newX][newY]!=LASER){
			this.x= newX;
			this.y= newY;		
			document.getElementById("c"+precX+"_"+precY).src=pathImg+piano[precX][precY] + ".jpg";
			document.getElementById("c"+this.x+"_"+this.y).src= pathImg+this.nome + ".jpg"; 
		}
	}
	if (this.x == ominoX && this.y == ominoY ){
				if (omino==ominoConSpada){
					var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
					document.getElementById("c"+this.x+"_"+this.y).src= pathImg+ominoConSpada + ".jpg"; 
					if(ominoX==n1.x && ominoY==n1.y)
						clearInterval(intervallo1);
					if(ominoX==n2.x && ominoY==n2.y)
						clearInterval(intervallo2);
					if(ominoX==n3.x && ominoY==n3.y)
						clearInterval(intervallo3);
					if(ominoX==n4.x && ominoY==n4.y)
						clearInterval(intervallo4);
					if(ominoX==n5.x && ominoY==n5.y)
						clearInterval(intervallo5);	
					if(ominoX==n6.x && ominoY==n6.y)
						clearInterval(intervallo6);							
				}	
				else{
					gameOver();
				}
	}
}
	
function gameOver(){
	clearInterval(id);
    clearInterval(intervallo1);
	clearInterval(intervallo2);
	clearInterval(intervallo3);
	clearInterval(intervallo4);
	clearInterval(intervallo5);
	clearInterval(intervallo6);
	var audio4 = new Audio("Evil Laugh.mp3");
	audio4.rewindAndPlay();
	document.getElementById("en").innerHTML="HAI PERSO!";
	document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
	document.getElementById("barraCompletamento").style.display="none";
	document.getElementById("centrosb").style.display="none";
	document.getElementById("myBar").style.display="none";
	document.getElementById("energia").style.display="none";
	document.getElementById("btntouch").style.display="none";
	document.getElementById("riprova").style.display="block";
    document.getElementById("body").removeEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").removeEventListener("keypress",checkKeyPress,false);
	document.getElementById("dettagli").style.display="none";
	document.getElementById("det").style.display="none";
	
}// il this.nome coincide con il nome dell’immagine nel file system 

function barraEnergia() {
    var elem = document.getElementById("barraCompletamento");   
	perc+=100/pilloletot
	elem.style.width = perc + '%'; // incremento dellӥnergia
   
}

function barraClessidra() {
	var elem = document.getElementById("myBar");   
	var width = 100;
	id = setInterval(fram, 1000); // per una barra che avanza con il tempo
		function fram() { // esempi di inner function 
		if (width == 0) {
			clearInterval(id); // TEMPO SCADUTO, gestire l'evento (per esempio game over o vita)
			gameOver();
		} 
		else {
	  width--;  // DECREMENTO IL TEMPO
	  elem.style.width = width + '%'; 
		}
	}
}


window.addEventListener("load",barraClessidra,true);
window.addEventListener("load",function(){
	
	document.getElementById("btnsu").addEventListener("click",su,false);
	document.getElementById("btngiu").addEventListener("click",giu,false);
	document.getElementById("btndx").addEventListener("click",destra,false);
	document.getElementById("btnsx").addEventListener("click",sinistra,false);
	/* document.getElementById("gpillola").addEventListener("click",generaPillola,false);
	document.getElementById("gfungo").addEventListener("click",generaFungo,false);
	document.getElementById("gbuco").addEventListener("click",generaBuconero,false);
	document.getElementById("gportale1").addEventListener("click",generaPortale1,false);
	document.getElementById("gportale2").addEventListener("click",generaPortale2,false);
	document.getElementById("gostacolo").addEventListener("click",generaOstacolo,false); */	
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("dettagli").addEventListener("mouseover",dettagliOggetti,false);
});

Audio.prototype.rewindAndPlay = function() { 
	this.pause();
	this.pause();
	this.currentTime = 0.0; 
	this.play();
}

function raggioLaser(x,y){
	if (ominoX==x && ominoY==y)
		gameOver();
	if (statolaser==10)
		statolaser=0;
	else
		statolaser=10;
	piano[x][y]=statolaser;
	disegnaCellaSpeciale(x,y,statolaser);
	// per creare un raggio ad intermittenza: i1=setInterval("raggioLaser(x,y)", 1500);
}
function dettagliOggetti(){	
	document.getElementById("OSTACOLO").onclick = function() {alert("l'ostacolo blocca il passaggio")};
	document.getElementById("PILLOLA").onclick = function() {alert("per completare il livello hai bisogno di raccogliere tutte le pillole, il punteggio aumenta sempre di 10 ogni volta che si raccoglie una pillola")};
	document.getElementById("SPADA").onclick = function() {alert("se l'omino raccoglie la spada puo' eliminare i nemici che si trovano nel livello")};
	document.getElementById("FUNGO").onclick = function() {alert("se si passa sopra un fungo il punteggio diminuisce di 20 e se il punteggio va sotto lo 0 muori")};
	document.getElementById("PORTALE").onclick = function() {alert("se si entra nel portale si esce dall'altro portale, i due portali sono collegati")};
	document.getElementById("BUCONERO").onclick = function() {alert("se si entra in un buconero si muore")};
	document.getElementById("NEMICO1").onclick = function() {alert("il nemico cammina a caso e quando ti avvicini ti rincorre")};
	document.getElementById("NEMICO2").onclick = function() {alert("il nemico runner fa le stesse cose del nemico ma piu' velocemente")};
	document.getElementById("OMINO").onclick = function() {alert("l'omino e' il protagonista del gioco")};
	document.getElementById("OMINOCONSPADA").onclick = function() {alert("l'omino con la spada potra' eliminare i nemici")};
	document.getElementById("PORTA").onclick = function() {alert("la porta rimane chiusa se non hai la chiave, si apre se raccogli la chiave e ti avvicini alla porta chiusa")};
	document.getElementById("CHIAVE").onclick = function() {alert("apre la porta")};
	document.getElementById("LASER").onclick = function() {alert("ogni 2 secondi il laser si aziona, se si passa sopra si muore")};

}