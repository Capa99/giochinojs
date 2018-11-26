
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
if (omino=="omino"){
	if(n1)
		if(n1.x==x && n1.y==y)
			gameOver();
	if(n2)
		if(n2.x==x && n2.y==y)
			gameOver();
	if(n3)
		if(n3.x==x && n3.y==y)
			gameOver();
	if(n4)
		if(n4.x==x && n4.y==y)
			gameOver();
	if(n5)
		if(n5.x==x && n5.y==y)
			gameOver();
	if(n6)
		if(n6.x==x && n6.y==y)
			gameOver();

}
if (omino=="ominoConSpada"){
	if(n1)
		if(n1.x==x && n1.y==y){
			clearInterval(intervallo1);
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			   n1.x=null;
			   n1.y=null;
		}
	if(n2)
		if(n2.x==x && n2.y==y){
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			clearInterval(intervallo2);
			n2.x=null;
			n2.y=null;
		}
	if(n3)
		if(n3.x==x && n3.y==y){
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			clearInterval(intervallo3);
			n3.x=null;
			n3.y=null;
		}
	if(n4)
		if(n4.x==x && n4.y==y){
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			clearInterval(intervallo4);
			n4.x=null;
			n4.y=null;
		}
	if(n5)
		if(n5.x==x && n5.y==y){
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			clearInterval(intervallo5);
			n5.x=null;
			n5.y=null;
		}
	if(n6)
		if(n6.x==x && n6.y==y){
				var audio3 = new Audio("Demon Scream.mp3");
					audio3.rewindAndPlay();
               audio3.volume = 0.5;
			clearInterval(intervallo6);
			n6.x=null;
			n6.y=null;
		}
}
	switch (piano[x][y]){
		case ARMA:
			var audio4 = new Audio("Sword Draw Sound Effect.mp3");
			audio4.rewindAndPlay();
         audio4.volume = 0.5;
			omino = ominoConSpada;
			piano[x][y] = SFONDO; 
			return true; 	
		case OSTACOLO: 
			var audio = new Audio("Roblox Death Sound Effect.mp3");
			audio.rewindAndPlay();
         audio.volume = 0.5;
			return false;         
         case CHIAVE:
         var audio45 = new Audio("Gun pick up sound effect 1.mp3");
			audio45.rewindAndPlay();
         audio45.volume = 0.5;
			key = 1;
			piano[x][y] = SFONDO;
			return true;        
        case PORTACHIUSA: 
			if(key==0){
        var audio40 = new Audio("Roblox Death Sound Effect.mp3");
			audio40.rewindAndPlay();
         audio40.volume = 0.5;
			}
			if (key == 1) {  
         var audio9 = new Audio("door_lock.mp3");
			audio9.rewindAndPlay();  
         audio9.volume = 0.5;
				piano[x][y] = PORTAAPERTA;
				return true;
			}
			else 
				return false;        
         case PORTAAPERTA:
         piano[x][y] = PORTAAPERTA;
         return true;        
		case PILLOLA:
			var audio1 = new Audio("Magic Wand Sound Effect.mp3");
			audio1.rewindAndPlay();
         audio1.volume = 0.5;
			energia = energia + DELTA_ENERGIA;
			document.getElementById("energia").innerHTML=energia;
			barraEnergia();
			piano[x][y] = SFONDO;
			countPillole--
			winn();
			return true;
		case FUNGO:
			var audio2 = new Audio("reverse mario power up sound effect.mp3");
			audio2.rewindAndPlay();
         audio2.volume = 0.5;
			energia = energia - DELTA_ENERGIA-10;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = SFONDO;
				if(energia<0)
				gameOver();
			return true;
		case BUCONERO:
			var audio5 = new Audio("Black Hole.mp3");
			audio5.rewindAndPlay();
         audio5.volume = 0.5;
			document.getElementById("energia").innerHTML=energia;
			piano[x][y] = BUCONERO;
			gameOver();
			return true;
		case PORTALE1: 
			var audio6 = new Audio("Time Warp Sound Effect.mp3");
			audio6.rewindAndPlay();
         audio6.volume = 0.5;
			disegnaCella(ominoX,ominoY);  // disegna lo sfondo nella posizione di Omino
			ominoX = PORTALE2_X; 
			ominoY = PORTALE2_Y;
			disegnaOmino();
			return false;  
		case PORTALE2:
			var audio6 = new Audio("Time Warp Sound Effect.mp3");
			audio6.rewindAndPlay();
         audio6.volume = 0.5;
			disegnaCella(ominoX,ominoY);		
			ominoX = PORTALE1_X; 
			ominoY = PORTALE1_Y; 
			disegnaOmino();
			return false; 
		case LASER:
      var audio60 = new Audio("Laser Sound FX 1.mp3");
			audio60.rewindAndPlay();
         audio60.volume = 0.5;
			gameOver();
		case LASERONEGIU:
      var audio454 = new Audio("Roblox Death Sound Effect.mp3");
			audio454.rewindAndPlay();
         audio454.volume = 0.5;
			return false;
		case LASERONESU:
      var audio666 = new Audio("Roblox Death Sound Effect.mp3");
			audio666.rewindAndPlay();
         audio666.volume = 0.5;
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
	if(ominoX>0){
		var newX = (ominoX -1 + R)%R; 
		sposta (ominoX,ominoY, newX,ominoY);
	}
}

function sinistra(){
	if(ominoY>0){
		var newY = (ominoY -1 + C)%C; 
		sposta (ominoX,ominoY, ominoX,newY);
		}
}

function giu(){
	if(ominoX<R-1){
		var newX = (ominoX + 1 + R)%R; 
		sposta (ominoX,ominoY, newX,ominoY);
		}
}

function destra(){
	if(ominoY<C-1){
		var newY = (ominoY + 1 + C)%C; 
		sposta (ominoX,ominoY, ominoX,newY);
		}
}