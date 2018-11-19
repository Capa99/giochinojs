
//gestione dell'evento onkeydown:
function checkKeyDown(e) {
    e = e || window.event;
    switch(e.keyCode){
	case 39: destra(); break;
	case 40: giu();    break;
	case 37: sinistra();   break;
	case 38: su();    break;
    }    
    //alert ("The Unicode character code is: " + e.keyCode);   
}

// gestione dell'evento onkey press:
function checkKeyPress (event){
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    
	switch(chCode){
    	case 100: destra();   break;
    	case 115: giu();      break;
    	case 97:  sinistra(); break;
    	case 119: su();       break;
    }
    //alert ("The Unicode character code is: " + chCode);   
}


function controllaCella(x,y){
	switch (piano[x][y]){
		case ARMA:
			omino = ominoConSpada;
			piano[x][y] = SFONDO; 
			return true; 	
		case OSTACOLO: 
			return false;
		case PILLOLA:
			energia = energia + DELTA_ENERGIA;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = SFONDO;
			countPillole--;
			if (countPillole==0){
            document.getElementById("en").innerHTML="HAI VINTO!";
				document.getElementById("gioco").innerHTML="<img src=\"coppa.jpg\">";
            document.getElementById("energia").style.display="none";
			}
			return true;
			case FUNGO:
         var audio = new Audio("Roblox Death Sound Effect.mp3");
         audio.play();
			energia = energia - DELTA_ENERGIA;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = SFONDO;
         gameOver();
			return true;
		case BUCONERO:
			energia=-1;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = BUCONERO;
         gameOver();
			return true;
         case PORTALE:
         piano[x][y] = SFONDO;
			return true;
		case NEMICO:
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

function sposta (daX,daY, aX,aY){
	if (controllaCella(aX, aY)){
	    
		var daSrc = "c" +daX+"_"+daY; 
	    var aSrc  = "c" + aX+"_"+ aY;
		console.log(daSrc + " " +aSrc);
        document.getElementById(daSrc).src = pathImg +  piano[daX][daY] + ".jpg";
		ominoX= aX;
		ominoY= aY;
		disegnaOmino();
	}
}

function su(){
	var newX = (ominoX -1 + R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function sinistra(){
	var newY = (ominoY -1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}

function giu(){
	var newX = (ominoX + 1 + R)%R; 
	sposta (ominoX,ominoY, newX,ominoY);
}

function destra(){
	var newY = (ominoY + 1 + C)%C; 
	sposta (ominoX,ominoY, ominoX,newY);
}