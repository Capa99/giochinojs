window.addEventListener("load",livello5,true);
window.addEventListener("load",disegnaPiano,true);

function livello5(){
	piano[0][3]=OSTACOLO;
	piano[0][13]=OSTACOLO;
	piano[1][1]=OSTACOLO;
	piano[1][6]=OSTACOLO;
	piano[2][3]=OSTACOLO;
	piano[2][13]=OSTACOLO;
   piano[4][8]=OSTACOLO;
   piano[4][9]=OSTACOLO;
	piano[4][13]=OSTACOLO;
   piano[5][3]=OSTACOLO;
   piano[5][5]=OSTACOLO;
   piano[5][7]=OSTACOLO;
   piano[5][9]=OSTACOLO;
	piano[6][7]=OSTACOLO;
   piano[6][9]=OSTACOLO;
	piano[6][13]=OSTACOLO;
	piano[6][15]=OSTACOLO;
	piano[6][17]=OSTACOLO;
   piano[6][19]=OSTACOLO;
   piano[8][2]=OSTACOLO;
   piano[8][14]=OSTACOLO;
   piano[8][16]=OSTACOLO;
	piano[0][1]=FUNGO;
	piano[0][8]=FUNGO;
	piano[1][3]=FUNGO;
	piano[1][5]=FUNGO;
	piano[1][7]=FUNGO;
	piano[1][9]=FUNGO;
	piano[2][1]=FUNGO;
   piano[2][8]=FUNGO;
   piano[2][15]=FUNGO;
   piano[3][6]=FUNGO;
	piano[4][15]=FUNGO;
   piano[4][17]=FUNGO;
   piano[7][7]=FUNGO;
   piano[7][8]=FUNGO;
   piano[7][9]=FUNGO;
   piano[8][19]=FUNGO;
   piano[9][17]=FUNGO;
	piano[0][2]=PILLOLA;
	piano[0][4]=PILLOLA;
   piano[0][6]=PILLOLA;
	piano[0][17]=PILLOLA;
   piano[1][8]=PILLOLA;
	piano[1][12]=PILLOLA;
   piano[1][14]=PILLOLA;
	piano[1][16]=PILLOLA;
   piano[2][2]=PILLOLA;
	piano[2][6]=PILLOLA;
   piano[2][19]=PILLOLA;
	piano[3][14]=PILLOLA;
   piano[4][0]=PILLOLA;
	piano[4][16]=PILLOLA;
   piano[5][4]=PILLOLA;
   piano[5][14]=PILLOLA;
	piano[5][17]=PILLOLA;
   piano[6][8]=PILLOLA;
	piano[6][16]=PILLOLA;
   piano[7][0]=PILLOLA;
	piano[7][5]=PILLOLA;
   piano[8][2]=PILLOLA;
	piano[8][9]=PILLOLA;
   piano[9][4]=PILLOLA;
	piano[9][10]=PILLOLA;
	piano[9][15]=PILLOLA;
	countPillole=26;
	pilloletot=26;
	piano[0][11]=BUCONERO;
	piano[0][15]=BUCONERO;
   piano[1][4]=BUCONERO;
   piano[1][10]=BUCONERO;
   piano[2][10]=BUCONERO;
   piano[2][17]=BUCONERO;
	piano[3][11]=BUCONERO;
   piano[4][11]=BUCONERO;
   piano[4][19]=BUCONERO;
   piano[5][11]=BUCONERO;
   piano[6][1]=BUCONERO;
   piano[6][11]=BUCONERO;
	piano[7][1]=BUCONERO;
   piano[7][10]=BUCONERO;
   piano[8][8]=BUCONERO;
   piano[8][10]=BUCONERO;
   piano[8][11]=BUCONERO;
	piano[9][1]=BUCONERO;
	piano[9][0]=PORTALE1;
	PORTALE1_X=9;
	PORTALE1_Y=0;
	piano[0][19]=PORTALE2;
	PORTALE2_X=0;
	PORTALE2_Y=19;
   n1 = new Cacciatore(4,6,8);
   intervallo = setInterval("n1.insegui()",500);
   n2 = new Cacciatore(3,18,8);
   intervallo2 = setInterval("n2.insegui()",500);
   piano[5][8]=ARMA;
   piano[9][11]=PORTACHIUSA;
   piano[9][19]=CHIAVE;
   i1=setInterval("raggioLaser(3,2)", 1500);
   piano[3][1]=LASERONEGIU;
   piano[3][2]=LASER;
   piano[3][3]=LASERONESU;
}
