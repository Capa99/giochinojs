window.addEventListener("load",livello2,true);
window.addEventListener("load",disegnaPiano,true);

function livello2(){

	piano[0][16]=OSTACOLO;
	piano[1][16]=OSTACOLO;
	piano[2][16]=OSTACOLO;
	piano[2][17]=OSTACOLO;
	piano[2][18]=OSTACOLO;
   
   piano[3][1]=OSTACOLO;
	piano[3][2]=OSTACOLO;
	piano[3][3]=OSTACOLO;
	piano[4][3]=OSTACOLO;
   piano[5][3]=OSTACOLO;
   
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
	intervallo1=setInterval("n1.insegui()",800);
	piano[5][1]=ARMA;
   piano[3][0]=PORTACHIUSA;
   piano[9][9]=CHIAVE;
	
}