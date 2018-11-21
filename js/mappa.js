// posizione iniziale dell'omino
var ominoX = 0; 
var ominoY = 0;
var nemicox=3;
var nemicoy=3;
var width = 0;
// posizione dell'arma
var armaX = 9; 
var armaY = 9;

// valore iniziale dell'energia
var energia =0;

// costanti e parametri per la configurazioen del gioco
var PILLOLA = 1;
var DELTA_ENERGIA = 10;
var OSTACOLO=3; 
var FUNGO=4;
var SFONDO = 0;
var ARMA=2;
var BUCONERO=6;
var NEMICO=7;
var PORTALE1=5;
var PORTALE2=9;
var PORTALE2_X=6;
var PORTALE2_Y=6;
var PORTALE1_X=2;
var PORTALE1_Y=3;


var omino = "omino";
var ominoConSpada = "ominoConSpada";
var intervallo=null;
var intervallo2=null;
var id=null;
var down=null;
var press=null;

var pathImg = "img1/";

// dichiarazione variabili di lavoro
var i=0;
var j=0;
var countPillole = 0;
var pilloletot=0;
var perc=0;

// numero di righe e numero di colonne
var R = 10; 
var C = 20; 

// definizione id matrice, come array di array
var piano = new Array();

for (var i=0; i<R; i++) {
	piano[i]=new Array(); // ogni riga contiene un array: si ha così una matrice
	for (var j=0; j<C;j++){
		piano[i][j]=SFONDO; // si assegna un valore di default a tutte le celle
	}
}

/*function mostraMatriceHTML(){
	var s = "";

	for (var i=0; i<R; i++) {
		for (var j=0; j<C;j++){
			s = s + piano[i][j] + " " ;
		}
		s = s + "<br>";
	}
	document.getElementById("messaggioDebug").innerHTML=s; 
}*/

function disegnaPiano(){
	for (var i=0; i<R; i++){
		for (var j=0; j<C;j++){
			disegnaCella(i,j);
		}
	}
	// disegna l'omino in una data posizione
	disegnaCellaSpeciale(ominoX,ominoY,omino); 
	document.getElementById("lvl").style.display="none";
	document.getElementById("riprova").style.display="none";
} 

function generaPillola(){
    generaOggetto(PILLOLA);
	countPillole ++; 
	pilloletot++;//vanno raccolti tutti, meglio contarli
	
}

function generaOstacolo(){
	generaOggetto(OSTACOLO);
}

function generaOggetto(valOggetto){
do{
	 var min=0; 
    var maxr=R;  
	var maxc=C;
      
	// si genera un indice di riga casuale tra 0 e R
	rx = Math.floor(Math.random() * (+maxr - +min)) + +min;  
	// si genera un indice di colonna casuale tra 0 e C
	
	ry = Math.floor(Math.random() * (+maxc - +min)) + +min;  
	
}while(	piano[rx][ry] != 0){
	// utilizzando rx e rc si ha una posizione casuale nel piano di gioco
	piano[rx][ry] = valOggetto; //posiziona oggetto nella matrice
	// in rx, ry c'è un nuovo valore quindi meglio ridisegnare la cella
	disegnaCella(rx,ry);
	
	}
}

function disegnaCella(i,j){
	var id = "c"+i+"_"+j;
	var src = pathImg + piano[i][j] + ".jpg";
	document.getElementById(id).src= src;
} 

function disegnaCellaSpeciale(i,j,valore) {
	var id = "c"+i+"_"+j;
	var src = pathImg + valore + ".jpg";
	console.log(id + " " + src);
	document.getElementById(id).src=src;
	
} 

function disegnaOmino() {
	disegnaCellaSpeciale(ominoX,ominoY,omino);
} 


