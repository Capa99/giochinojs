//window.addEventListener("load",livello7,true);
//window.addEventListener("load",disegnaPiano,true);

function livello7(){
	piano[0][1]=OSTACOLO;
	piano[1][1]=OSTACOLO;
	piano[2][1]=OSTACOLO;
	piano[3][1]=OSTACOLO;
	piano[3][2]=LASERONEGIU;
	piano[3][15]=OSTACOLO;
   piano[3][16]=OSTACOLO;
   piano[3][17]=OSTACOLO;
	piano[4][17]=OSTACOLO;
   piano[5][0]=OSTACOLO;
   piano[5][1]=OSTACOLO;
   piano[5][2]=LASERONESU;
   piano[5][15]=OSTACOLO;
	piano[5][16]=OSTACOLO;
   piano[5][17]=OSTACOLO;
   piano[6][2]=OSTACOLO;
   piano[7][2]=OSTACOLO;
   piano[8][2]=OSTACOLO;
   piano[9][2]=OSTACOLO;
   piano[3][6]=FUNGO;
	piano[3][10]=FUNGO;
	piano[3][14]=FUNGO;
	piano[4][4]=FUNGO;
	piano[4][8]=FUNGO;
	piano[4][12]=FUNGO;
	piano[5][14]=FUNGO;
	piano[2][4]=FUNGO;
	piano[2][12]=FUNGO;
	piano[5][6]=FUNGO;
	piano[5][10]=FUNGO;
	piano[6][4]=FUNGO;
	piano[6][12]=FUNGO;
	piano[0][3]=PILLOLA;
	piano[0][9]=PILLOLA;
   piano[0][18]=PILLOLA;
	piano[9][1]=PILLOLA;
	piano[9][4]=PILLOLA;
   piano[9][9]=PILLOLA;
	piano[9][18]=PILLOLA;
	piano[4][19]=PILLOLA;
	piano[0][2]=BUCONERO;
	piano[0][19]=BUCONERO;
	piano[9][3]=BUCONERO;
	piano[8][4]=BUCONERO;
	piano[9][19]=BUCONERO;
	piano[3][18]=PORTACHIUSA;
	piano[3][19]=PORTACHIUSA;
	piano[5][18]=PORTACHIUSA;
	piano[5][19]=PORTACHIUSA;
	piano[4][15]=PORTACHIUSA;
	piano[8][3]=CHIAVE;
	piano[4][18]=PORTALE1;
	PORTALE1_X=4;
	PORTALE1_Y=18;
	piano[6][0]=PORTALE2;
	PORTALE2_X=6;
	PORTALE2_Y=0;
	countPillole=8;
	pilloletot=8;
	piano[4][16]=ARMA;
   n1 = new Cacciatore(0,8,NEMICO);
   intervallo1 = setInterval("n1.insegui()",800);
   n2 = new Cacciatore(0,15,NEMICO);
   intervallo2 = setInterval("n2.insegui()",800);
   n3 = new Cacciatore(1,8,NEMICO);
   intervallo3 = setInterval("n3.insegui()",800);
   n4 = new Cacciatore(7,8,NEMICO);
   intervallo4 = setInterval("n4.insegui()",800);
   n5 = new Cacciatore(9,8,NEMICO);
   intervallo5 = setInterval("n5.insegui()",800);
   n6 = new Cacciatore(9,15,NEMICO);
   intervallo6 = setInterval("n6.insegui()",800);
   i1=setInterval("raggioLaser(4,2)", 1250);
}
