//window.addEventListener("load",livello8,true);
//window.addEventListener("load",disegnaPiano,true);

function livello8(){
	piano[4][0]=OSTACOLO;
	piano[4][1]=OSTACOLO;
	piano[4][2]=OSTACOLO;
	piano[4][3]=OSTACOLO;
	piano[4][4]=OSTACOLO;
	piano[4][5]=OSTACOLO;
	piano[4][6]=OSTACOLO;
	piano[4][7]=OSTACOLO;
	piano[4][8]=OSTACOLO;
	piano[4][19]=OSTACOLO;
	piano[4][11]=OSTACOLO;
	piano[4][12]=OSTACOLO;
	piano[4][13]=OSTACOLO;
	piano[4][14]=OSTACOLO;
	piano[4][15]=OSTACOLO;
	piano[4][16]=OSTACOLO;
	piano[4][17]=OSTACOLO;
	piano[4][18]=OSTACOLO;
	piano[5][8]=OSTACOLO;
	piano[5][11]=OSTACOLO;
	piano[5][16]=OSTACOLO;
	piano[5][18]=OSTACOLO;
	piano[6][8]=OSTACOLO;
	piano[6][9]=OSTACOLO;
	piano[6][11]=OSTACOLO;
	piano[6][12]=OSTACOLO;
	piano[6][13]=OSTACOLO;
	piano[6][14]=OSTACOLO;
	piano[6][16]=OSTACOLO;
	piano[6][18]=OSTACOLO;
	piano[7][8]=OSTACOLO;
	piano[7][16]=OSTACOLO;
	piano[8][8]=OSTACOLO;
	piano[8][10]=OSTACOLO;
	piano[8][11]=OSTACOLO;
	piano[8][12]=OSTACOLO;
	piano[8][14]=OSTACOLO;
	piano[8][18]=OSTACOLO;
	piano[9][8]=OSTACOLO;
	piano[9][11]=OSTACOLO;
	piano[9][15]=OSTACOLO;
	piano[9][16]=OSTACOLO;
	piano[9][18]=OSTACOLO;
	piano[0][15]=FUNGO;
	piano[1][13]=FUNGO;
	piano[2][2]=FUNGO;
	piano[3][5]=FUNGO;
	piano[3][14]=FUNGO;
	piano[4][9]=FUNGO;
	piano[4][10]=FUNGO;
	piano[5][9]=FUNGO;
	piano[1][5]=PILLOLA;
	piano[2][15]=PILLOLA;
   piano[3][8]=PILLOLA;
	piano[5][12]=PILLOLA;
   piano[5][17]=PILLOLA;
	piano[7][19]=PILLOLA;
	piano[9][14]=PILLOLA;
	piano[3][18]=BUCONERO;
	piano[5][19]=BUCONERO;
	piano[6][19]=BUCONERO;
	piano[8][19]=BUCONERO;
	piano[9][12]=BUCONERO;
	piano[9][17]=BUCONERO;
	piano[9][19]=BUCONERO;
	piano[1][19]=PORTALE1;
	PORTALE1_X=1;
	PORTALE1_Y=19;
	piano[5][7]=PORTALE2;
	PORTALE2_X=5;
	PORTALE2_Y=7;
	countPillole=7;
	pilloletot=7;
	piano[7][18]=PORTACHIUSA;
   piano[7][0]=CHIAVE;
   i1=setInterval("raggioLaser(1,18)", 1500);
   piano[0][18]=LASERONEGIU;
   piano[1][18]=LASER;
   piano[2][18]=LASERONESU;
	piano[6][0]=ARMA;
   n1 = new Cacciatore(1,9,RUNNER);
   intervallo1 = setInterval("n1.insegui()",500);
   n2 = new Cacciatore(7,4,NEMICO);
   intervallo2 = setInterval("n2.insegui()",800);
   
}
