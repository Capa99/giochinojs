
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
      var audio4 = new Audio("Sword Draw Sound Effect.mp3");
			audio4.play();
			omino = ominoConSpada;
			piano[x][y] = SFONDO; 
			return true; 	
		case OSTACOLO: 
      var audio = new Audio("Roblox Death Sound Effect.mp3");
			audio.play();
			return false;
		case PILLOLA:
      var audio1 = new Audio("Magic Wand Sound Effect.mp3");
			audio1.play();
			energia = energia + DELTA_ENERGIA;
			barraEnergia();
			piano[x][y] = SFONDO;
			countPillole--;
			if (countPillole==0){
            document.getElementById("en").innerHTML="HAI VINTO!";
				document.getElementById("gioco").innerHTML="<img src=\"coppa.jpg\">";
            document.getElementById("energia").style.display="none";
            document.getElementById("centrosb").style.display="none";
			}
			return true;
			case FUNGO:
				var audio2 = new Audio("Male Cough Sound Effect.mp3");
            audio2.play();
				energia = energia - DELTA_ENERGIA;
				barraEnergia();
				piano[x][y] = SFONDO;
				if(energia<0)	
					gameOver();
			return true;
		case BUCONERO:
      var audio5 = new Audio("Black Hole.mp3");
          audio5.play();
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = BUCONERO;
			gameOver();
			return true;
		case PORTALE1: 
			disegnaCella(ominoX,ominoY);  // disegna lo sfondo nella posizione di Omino
			ominoX = PORTALE2_X; 
			ominoY = PORTALE2_Y;
			disegnaOmino();
			return false;  
		case PORTALE2:
			disegnaCella(ominoX,ominoY);		
			ominoX = PORTALE1_X; 
			ominoY = PORTALE1_Y; 
			disegnaOmino();
			return false; 
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