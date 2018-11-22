window.addEventListener("load",livello10,true);
window.addEventListener("load",disegnaPiano,true);

function livello10(){
	piano[0][7]=OSTACOLO;
	piano[0][9]=OSTACOLO;
	piano[1][7]=OSTACOLO;
	piano[1][9]=OSTACOLO;
	piano[2][7]=OSTACOLO;
	piano[2][9]=OSTACOLO;
   piano[3][7]=OSTACOLO;
   piano[3][17]=OSTACOLO;
   piano[3][18]=OSTACOLO;
	piano[3][19]=OSTACOLO;
   piano[4][7]=OSTACOLO;
	piano[5][7]=OSTACOLO;
   piano[5][17]=OSTACOLO;
   piano[5][18]=OSTACOLO;
	piano[5][19]=OSTACOLO;
   piano[6][7]=OSTACOLO;
   piano[7][7]=OSTACOLO;
   piano[7][9]=OSTACOLO;
   piano[8][7]=OSTACOLO;
   piano[8][9]=OSTACOLO;
   piano[9][7]=OSTACOLO;
   piano[9][9]=OSTACOLO;
	
	piano[1][0]=FUNGO;
	piano[1][1]=FUNGO;
	piano[1][2]=FUNGO;
	piano[1][3]=FUNGO;
	piano[1][5]=FUNGO;
	piano[1][6]=FUNGO;
	piano[3][0]=FUNGO;
   piano[3][1]=FUNGO;
   piano[3][2]=FUNGO;
   piano[3][4]=FUNGO;
	piano[3][5]=FUNGO;
   piano[3][6]=FUNGO;
   piano[5][0]=FUNGO;
   piano[5][2]=FUNGO;
   piano[5][3]=FUNGO;
   piano[5][4]=FUNGO;
	piano[5][6]=FUNGO;
   piano[7][0]=FUNGO;
   piano[7][1]=FUNGO;
   piano[7][2]=FUNGO;
   piano[7][4]=FUNGO;
   piano[7][5]=FUNGO;
   piano[7][6]=FUNGO;
   
	
   piano[9][19]=PILLOLA;
	
	countPillole=1;
	pilloletot=1;
	
   piano[0][11]=BUCONERO;
	piano[2][12]=BUCONERO;
   piano[2][15]=BUCONERO;
	piano[4][9]=BUCONERO;
   piano[4][15]=BUCONERO;
	piano[7][11]=BUCONERO;
   piano[7][14]=BUCONERO;
	piano[7][17]=BUCONERO;
   piano[8][18]=BUCONERO;
	piano[9][18]=BUCONERO;
   
	piano[9][6]=PORTALE1;
	PORTALE1_X=9;
	PORTALE1_Y=6;
	piano[4][12]=PORTALE2;
	PORTALE2_X=4;
	PORTALE2_Y=12;
   
   n1 = new Cacciatore(0,8,RUNNER);
   intervallo = setInterval("n1.insegui()",500);
   n2 = new Cacciatore(4,19,RUNNER);
   intervallo2 = setInterval("n2.insegui()",500);
   n3 = new Cacciatore(9,8,RUNNER);
   intervallo3 = setInterval("n3.insegui()",500);
   
   piano[8][19]=PORTACHIUSA;
   piano[1][19]=CHIAVE;
   i1=setInterval("raggioLaser(1,17)", 1500);
   piano[0][17]=LASERONEGIU;
   piano[1][17]=LASER;
   piano[2][17]=LASERONESU;
}
