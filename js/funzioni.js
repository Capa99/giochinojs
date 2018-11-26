

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
               audio3.volume = 0.5;
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
	riprova();
	document.getElementById("gameover").style.display = "block";
	clear();
	var audio4 = new Audio("Evil Laugh.mp3");
	audio4.rewindAndPlay();
	//document.getElementById("en").innerHTML="HAI PERSO!";
	//document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
	//document.getElementById("gioco").style.display="none";
	//document.getElementById("barraCompletamento").style.display="none";
	//document.getElementById("centrosb").style.display="none";
	//document.getElementById("myBar").style.display="none";
	//document.getElementById("energia").style.display="none";
	document.getElementById("btntouch").style.display="none";
	//document.getElementById("riprova").style.display="block";
	//document.getElementById("dettagli").style.display="none";
	//document.getElementById("det").style.display="none";
	document.getElementById("body").removeEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").removeEventListener("keypress",checkKeyPress,false);
	
}
function winn(){
	if (countPillole==0){
			passaLivello();
            var audio7 = new Audio("Victory.mp3");
            audio7.rewindAndPlay();
            audio7.volume = 0.5;
			clear();
			document.getElementById("win").style.display = "block";
			//document.getElementById("gioco").style.display="none";	
			//document.getElementById("energia").style.display="none";
			//document.getElementById("centrosb").style.display="none";
			//document.getElementById("myBar").style.display="none";
			document.getElementById("btntouch").style.display="none";
			document.getElementById("body").removeEventListener("keydown",checkKeyDown,false);
			document.getElementById("body").removeEventListener("keypress",checkKeyPress,false);
			//document.getElementById("dettagli").style.display="none";
			//document.getElementById("det").style.display="none";
			
			}
}	

// il this.nome coincide con il nome dell’immagine nel file system

function offGameOver(){
document.getElementById("gameover").style.display = "none"; 
}

function offWin(){
document.getElementById("win").style.display = "none"; 
}

function barraEnergia() {
    var elem = document.getElementById("barraCompletamento");   
	perc+=100/pilloletot
	elem.style.width = perc + '%'; // incremento dellӥnergia
   
}

function barraClessidra() {
	var elem = document.getElementById("myBar");   
	var width = 100;
	id = setInterval(fram, 735); // per una barra che avanza con il tempo
		function fram() { // esempi di inner function
			if (width==50)
				elem.style.backgroundColor="#e1b300"
			if (width==25)
				elem.style.backgroundColor="#f72100"
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
	$('#popoverostacolo').popover();
	$('#popoverspada').popover();
	$('#popoverpillola').popover();
	$('#popoverfungo').popover();
	$('#popovernemico1').popover();
	$('#popovernemico2').popover();
	$('#popoveromino').popover();
	$('#popoverominoConSpada').popover();
	$('#popoverportale').popover();
	$('#popoverbuconero').popover();
	$('#popoverchiave').popover();
	$('#popoverporta').popover();
	$('#popoverlaser').popover();
});

Audio.prototype.rewindAndPlay = function() { 
	this.pause();
	this.pause();
	this.currentTime = 0.0; 
	this.play();
}

function raggioLaser(x,y){
   var audio55 = new Audio("Laser.mp3");
	if (ominoX==x && ominoY==y)
		gameOver();
	if (statolaser==10)
		statolaser=0;
	else{
		statolaser=10;
		 audio55.rewindAndPlay();
       audio55.volume = 0.5;
   }
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
	

function disegnaLivello1(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	energia=0;
	omino="omino";
	key=0;
	document.getElementById("energia").innerHTML=energia;
	livello=1;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello1();
	disegnaPiano();
}

function disegnaLivello2(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=2;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello2();
	disegnaPiano();
}

function disegnaLivello3(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=3;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello3();
	disegnaPiano();
}

function disegnaLivello4(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=4;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello4();
	disegnaPiano();
}

function disegnaLivello5(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=5;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello5();
	disegnaPiano();
}

function disegnaLivello6(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=6;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello6();
	disegnaPiano();
}

function disegnaLivello7(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=7;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello7();
	disegnaPiano();
}

function disegnaLivello8(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=8;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello8();
	disegnaPiano();
}

function disegnaLivello9(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=9;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello9();
	disegnaPiano();
}

function disegnaLivello10(){
	document.getElementById("body").addEventListener("keydown",checkKeyDown,false);
	document.getElementById("body").addEventListener("keypress",checkKeyPress,false);
	document.getElementById("energia").style.display="block";
	document.getElementById("en").style.display="block";
	document.getElementById("btntouch").style.display="block";
	document.getElementById("myBar").style.display="block";
	document.getElementById("sfondoBarra").style.display="block";
	document.getElementById("barraCompletamento").style.display="block";
	document.getElementById("btntouch").style.display="block";
	omino="omino";
	key=0;
	energia=0;
	document.getElementById("energia").innerHTML=energia;
	livello=10;
	document.getElementById("gioco").style.display="block";
	clear();
	barraClessidra();
	svuotaPiano();
	livello10();
	disegnaPiano();
}

	
function svuotaPiano(){
	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			piano[i][j]=SFONDO;
		}
	}
}


function clear(){
	perc=0;
	document.getElementById("barraCompletamento").style.width=perc+ '%';
	clearInterval(id);
    clearInterval(intervallo1);
	clearInterval(intervallo2);
	clearInterval(intervallo3);
	clearInterval(intervallo4);
	clearInterval(intervallo5);
	clearInterval(intervallo6);
	if (i1){
	clearInterval(i1);
	}
}

function passaLivello(){
	if(livello==1){
		document.getElementById("livello1").style.display="none";
		document.getElementById("livello2").style.display="block";
	}
	if(livello==2){
		document.getElementById("livello2").style.display="none";
		document.getElementById("livello3").style.display="block";
	}
	if(livello==3){
		document.getElementById("livello3").style.display="none";
		document.getElementById("livello4").style.display="block";
	}
	if(livello==4){
		document.getElementById("livello4").style.display="none";
		document.getElementById("livello5").style.display="block";
	}
	if(livello==5){
		document.getElementById("livello5").style.display="none";
		document.getElementById("livello6").style.display="block";
	}
	if(livello==6){
		document.getElementById("livello6").style.display="none";
		document.getElementById("livello7").style.display="block";
	}
	if(livello==7){
		document.getElementById("livello7").style.display="none";
		document.getElementById("livello8").style.display="block";
	}
	if(livello==8){
		document.getElementById("livello8").style.display="none";
		document.getElementById("livello9").style.display="block";
	}
	if(livello==9){
		document.getElementById("livello9").style.display="none";
		document.getElementById("livello10").style.display="block";
	}
	if(livello==10){
		document.getElementById("livello10").style.display="none";
		
	}
}

function riprova(){
	
	if(livello==1){
		document.getElementById("livello1").value="RIPROVA";
	}
	if(livello==2){
		document.getElementById("livello2").value="RIPROVA";
	}
	if(livello==3){
		document.getElementById("livello3").value="RIPROVA";
	}
	if(livello==4){
		document.getElementById("livello4").value="RIPROVA";
	}
	if(livello==5){
		document.getElementById("livello5").value="RIPROVA";
	}
	if(livello==6){
		document.getElementById("livello6").value="RIPROVA";
	}
	if(livello==7){
		document.getElementById("livello7").value="RIPROVA";
	}
	if(livello==8){
		document.getElementById("livello8").value="RIPROVA";
	}
	if(livello==9){
		document.getElementById("livello9").value="RIPROVA";
	}
	if(livello==10){
		document.getElementById("livello10").value="RIPROVA";
		
	}
}