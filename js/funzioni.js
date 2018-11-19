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
	n1 = new Nemico(3,3,NEMICO);
	setInterval(n1.insegui,500);
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

		document.getElementById(daSrc).src = pathImg +  piano[nemicox][nemicoy] + ".jpg";
		nemicox= ANX;
		nemicoy= ANY;
		
		disegnaCellaSpeciale(nemicox,nemicoy,NEMICO);
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
function controllaCellaNemico(x,y){
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
document.getElementById(“c”+precX+”_“+precY).src   = piano[precX][precY ] + “.jpg”;
document.getElementById(“c”+this.x+”_“+this.y).src    = this.nome + “.jpg”; 
}

// il this.nome coincide con il nome dell’immagine nel file system 

if (this.x == ominoX && this.y == ominoY ){
    gameOver();
}

}



function barraEnergia() {
   var elem = document.getElementById("energia");   
    if (energia == 100) {
    	// energia al massimo, non si pu򠰩񠩮crementare, gestire eventuale vittoria o altro.   
     }  else {
      	elem.style.width = energia + '%'; // incremento dellӥnergia
    }
}