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
		}
	}
	if (this.x == ominoX && this.y == ominoY ){
				if (omino==ominoConSpada){
               var audio3 = new Audio("Demon Scream.mp3");
            audio3.rewindAndPlay();
            clearInterval(intervallo);
            }
				else{
               
				gameOver();
				}
}

	}
	
function gameOver(){
   var audio4 = new Audio("Evil Laugh.mp3");
			audio4.rewindAndPlay();
		document.getElementById("en").innerHTML="HAI PERSO!";
		document.getElementById("gioco").innerHTML="<img src=\"gameover.jpg\" >";
		document.getElementById("barraCompletamento").style.display="none";
	  document.getElementById("centrosb").style.display="none";
	  document.getElementById("myBar").style.display="none";
	  document.getElementById("energia").style.display="none";
	  document.getElementById("btntouch").style.display="none";
}// il this.nome coincide con il nome dell’immagine nel file system 

function barraEnergia() {
   var elem = document.getElementById("barraCompletamento");   
		perc+=100/pilloletot
		elem.style.width = perc + '%'; // incremento dellӥnergia
   
}

function barraClessidra() {
  var elem = document.getElementById("myBar");   
  var width = 100;
  var id = setInterval(fram, 1000); // per una barra che avanza con il tempo
  function fram() { // esempi di inner function 
	if (width == 0) {
	  clearInterval(id); // TEMPO SCADUTO, gestire l'evento (per esempio game over o vita)
	  gameOver();
	} else {
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
	
	}
);

Audio.prototype.rewindAndPlay = function() { 
this.pause();
this.currentTime = 0.0; 
this.play();
}
function livello1(){
	piano[1][0]=OSTACOLO;
	piano[1][1]=OSTACOLO;
	piano[1][6]=OSTACOLO;
	piano[1][7]=OSTACOLO;
	piano[1][10]=OSTACOLO;
	piano[1][17]=OSTACOLO;
	piano[1][18]=OSTACOLO;
	piano[1][19]=OSTACOLO;
	piano[2][6]=OSTACOLO;
	piano[3][6]=OSTACOLO;
	piano[3][15]=OSTACOLO;
	piano[4][6]=OSTACOLO;
	piano[4][15]=OSTACOLO;
	piano[5][3]=OSTACOLO;
	piano[5][4]=OSTACOLO;
	piano[5][5]=OSTACOLO;
	piano[5][6]=OSTACOLO;
	piano[5][15]=OSTACOLO;
	piano[6][3]=OSTACOLO;
	piano[6][15]=OSTACOLO;
	piano[6][16]=OSTACOLO;
	piano[6][17]=OSTACOLO;
	piano[6][18]=OSTACOLO;
	piano[7][3]=OSTACOLO;
	piano[7][18]=OSTACOLO;
	piano[8][3]=OSTACOLO;
	piano[8][7]=OSTACOLO;
	piano[8][8]=OSTACOLO;
	piano[8][9]=OSTACOLO;
	piano[8][10]=OSTACOLO;
	piano[8][13]=OSTACOLO;
	piano[8][18]=OSTACOLO;
	piano[9][3]=OSTACOLO;
	piano[9][13]=OSTACOLO;
	piano[9][18]=OSTACOLO;
	piano[2][4]=FUNGO;
	piano[2][13]=FUNGO;
	piano[3][1]=FUNGO;
	piano[3][17]=FUNGO;
	piano[3][19]=FUNGO;
	piano[4][10]=FUNGO;
	piano[5][8]=FUNGO;
	piano[6][0]=FUNGO;
	piano[6][6]=FUNGO;
	piano[7][9]=FUNGO;
	piano[7][12]=FUNGO;
	piano[1][15]=PILLOLA;
	piano[3][7]=PILLOLA;
	piano[7][17]=PILLOLA;
	piano[7][2]=PILLOLA;
	piano[9][9]=PILLOLA;
	countPillole=5;
	pilloletot=5;
	piano[4][14]=BUCONERO;
	piano[8][2]=BUCONERO;
	piano[9][8]=BUCONERO;
	piano[0][1]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=1;
	piano[9][19]=PORTALE2;
	PORTALE2_X=9;
	PORTALE2_Y=19;
	
}

function livello2(){

	piano[0][16]=OSTACOLO;
	piano[1][16]=OSTACOLO;
	piano[2][16]=OSTACOLO;
	piano[2][17]=OSTACOLO;
	piano[2][18]=OSTACOLO;
	piano[3][6]=OSTACOLO;
	piano[3][12]=OSTACOLO;
	piano[4][5]=OSTACOLO;
	piano[4][6]=OSTACOLO;
	piano[4][12]=OSTACOLO;
	piano[4][13]=OSTACOLO;
	piano[6][0]=OSTACOLO;
	piano[6][1]=OSTACOLO;
	piano[6][2]=OSTACOLO;
	piano[6][3]=OSTACOLO;
	piano[6][5]=OSTACOLO;
	piano[6][6]=OSTACOLO;
	piano[6][12]=OSTACOLO;
	piano[6][13]=OSTACOLO;
	piano[6][16]=OSTACOLO;
	piano[6][17]=OSTACOLO;
	piano[6][18]=OSTACOLO;
	piano[6][19]=OSTACOLO;
	piano[7][4]=OSTACOLO;
	piano[7][6]=OSTACOLO;
	piano[7][12]=OSTACOLO;
	piano[7][16]=OSTACOLO;
	piano[8][3]=OSTACOLO;
	piano[8][16]=OSTACOLO;
	piano[3][9]=FUNGO;
	piano[3][16]=FUNGO;
	piano[5][6]=FUNGO;
	piano[5][12]=FUNGO;
	piano[5][16]=FUNGO;
	piano[7][9]=FUNGO;
	piano[1][18]=PILLOLA;
   piano[5][5]=PILLOLA;
	piano[5][9]=PILLOLA;
   piano[5][13]=PILLOLA;
	piano[8][1]=PILLOLA;
	piano[8][18]=PILLOLA;
	countPillole=6;
	pilloletot=6;
	piano[0][3]=BUCONERO;
	piano[1][13]=BUCONERO;
	piano[1][9]=PORTALE1;
	PORTALE1_X=1;
	PORTALE1_Y=9;
	piano[7][17]=PORTALE2;
	PORTALE2_X=7;
	PORTALE2_Y=17;
	n1=new Cacciatore(4,18,NEMICO);
	intervallo=setInterval("n1.insegui()",800);
	piano[9][9]=ARMA;

}
function livello3(){
	piano[0][4]=OSTACOLO;
	piano[1][4]=OSTACOLO;
	piano[2][4]=OSTACOLO;
	piano[3][4]=OSTACOLO;
	piano[6][4]=OSTACOLO;
	piano[7][4]=OSTACOLO;
	piano[8][4]=OSTACOLO;
	piano[9][4]=OSTACOLO;
	piano[0][8]=OSTACOLO;
	piano[1][8]=OSTACOLO;
	piano[2][8]=OSTACOLO;
	piano[3][8]=OSTACOLO;
	piano[6][8]=OSTACOLO;
	piano[7][8]=OSTACOLO;
	piano[8][8]=OSTACOLO;
	piano[9][8]=OSTACOLO;
	piano[0][12]=OSTACOLO;
	piano[1][12]=OSTACOLO;
	piano[2][12]=OSTACOLO;
	piano[3][12]=OSTACOLO;
	piano[6][12]=OSTACOLO;
	piano[7][12]=OSTACOLO;
	piano[8][12]=OSTACOLO;
	piano[9][12]=OSTACOLO;
	piano[0][16]=OSTACOLO;
	piano[1][16]=OSTACOLO;
	piano[2][16]=OSTACOLO;
	piano[3][16]=OSTACOLO;
	piano[6][16]=OSTACOLO;
	piano[7][16]=OSTACOLO;
	piano[8][16]=OSTACOLO;
	piano[9][16]=OSTACOLO;
	piano[4][4]=FUNGO;
	piano[4][12]=FUNGO;
	piano[5][8]=FUNGO;
	piano[5][16]=FUNGO;
	piano[0][6]=PILLOLA;
	piano[0][10]=PILLOLA;
	piano[0][14]=PILLOLA;
	piano[0][18]=PILLOLA;
	piano[9][6]=PILLOLA;
	piano[9][10]=PILLOLA;
	piano[9][14]=PILLOLA;
	piano[9][18]=PILLOLA;
	countPillole=8;
	pilloletot=8;
	piano[3][6]=BUCONERO;
	piano[3][10]=BUCONERO;
	piano[3][14]=BUCONERO;
	piano[3][18]=BUCONERO;
	piano[6][6]=BUCONERO;
	piano[6][10]=BUCONERO;
	piano[6][14]=BUCONERO;
	piano[6][18]=BUCONERO;
	piano[9][2]=PORTALE1;
	PORTALE1_X=9;
	PORTALE1_Y=2;
	piano[5][19]=PORTALE2;
	PORTALE2_X=5;
	PORTALE2_Y=19;
	n1 = new Cacciatore(5,14,8);
	var intervallo=setInterval("n1.insegui()", 500);
	piano[5][10]=ARMA;
}

function livello4(){
	piano[0][8]=OSTACOLO;
	piano[0][11]=OSTACOLO;
	piano[1][0]=OSTACOLO;
	piano[1][1]=OSTACOLO;
	piano[1][7]=OSTACOLO;
	piano[1][12]=OSTACOLO;
	piano[2][15]=OSTACOLO;
	piano[3][6]=OSTACOLO;
	piano[4][9]=OSTACOLO;
	piano[4][13]=OSTACOLO;
	piano[6][15]=OSTACOLO;
	piano[8][6]=OSTACOLO;
	piano[9][11]=OSTACOLO;
	piano[9][16]=OSTACOLO;
	piano[0][5]=FUNGO;
	piano[0][7]=FUNGO;
	piano[0][12]=FUNGO;
	piano[0][14]=FUNGO;
	piano[2][1]=FUNGO;
	piano[3][4]=FUNGO;
	piano[4][3]=FUNGO;
   piano[5][4]=FUNGO;
   piano[5][7]=FUNGO;
   piano[6][10]=FUNGO;
   piano[6][11]=FUNGO;
	piano[6][12]=FUNGO;
   piano[6][18]=FUNGO;
   piano[7][2]=FUNGO;
   piano[7][3]=FUNGO;
   piano[9][3]=FUNGO;
	piano[0][2]=PILLOLA;
	piano[0][6]=PILLOLA;
   piano[0][9]=PILLOLA;
	piano[0][10]=PILLOLA;
   piano[0][13]=PILLOLA;
	piano[0][18]=PILLOLA;
    piano[1][2]=PILLOLA;
	piano[2][0]=PILLOLA;
    piano[2][2]=PILLOLA;
	piano[2][18]=PILLOLA;
    piano[3][15]=PILLOLA;
	piano[4][4]=PILLOLA;
    piano[6][19]=PILLOLA;
	piano[7][6]=PILLOLA;
    piano[7][10]=PILLOLA;
	piano[8][3]=PILLOLA;
    piano[8][16]=PILLOLA;
	piano[9][9]=PILLOLA;
	countPillole=18;
	pilloletot=18;
	piano[5][0]=BUCONERO;
	piano[8][10]=BUCONERO;
    piano[8][11]=BUCONERO;
    piano[8][12]=BUCONERO;
    piano[8][19]=BUCONERO;
	piano[0][1]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=1;
	piano[7][19]=PORTALE2;
	PORTALE2_X=7;
	PORTALE2_Y=19;
   n1 = new Cacciatore(9,0,NEMICO);
   var intervallo2 = setInterval("n1.insegui()",800);
   n2 = new Cacciatore(2,10,8);
   var intervallo3 = setInterval("n2.insegui()",500);
   piano[7][11]=ARMA;
}
