window.addEventListener("load",livello6,true);
window.addEventListener("load",disegnaPiano,true);
function livello6(){
	piano[0][5]=OSTACOLO;
	piano[1][5]=OSTACOLO;
	piano[3][5]=OSTACOLO;
	piano[4][0]=OSTACOLO;
	piano[4][1]=OSTACOLO;
    piano[4][3]=OSTACOLO;
	piano[4][4]=OSTACOLO;
	piano[4][5]=OSTACOLO;
	piano[5][5]=OSTACOLO;
    piano[6][5]=OSTACOLO;
    piano[7][5]=OSTACOLO;
	piano[8][0]=OSTACOLO;
	piano[8][1]=OSTACOLO;
	piano[8][3]=OSTACOLO;
	piano[8][4]=OSTACOLO;
	piano[8][5]=OSTACOLO;
	piano[8][8]=OSTACOLO;
	piano[10][5]=OSTACOLO;
	piano[11][5]=OSTACOLO;
	piano[12][0]=OSTACOLO;
	piano[12][4]=OSTACOLO;
	piano[12][5]=OSTACOLO;
	piano[13][5]=OSTACOLO;
	piano[14][5]=OSTACOLO;
	piano[16][5]=OSTACOLO;
	piano[17][5]=OSTACOLO;
	piano[18][5]=OSTACOLO;
	piano[19][5]=OSTACOLO;
	piano[3][7]=FUNGO;
	piano[4][6]=FUNGO;
	piano[4][8]=FUNGO;
	piano[7][7]=FUNGO;
	piano[8][9]=FUNGO;
	piano[12][7]=FUNGO;
	piano[10][6]=FUNGO;
	piano[10][8]=FUNGO;
	piano[13][8]=FUNGO;
	piano[6][4]=PILLOLA;
    piano[4][10]=PILLOLA;
	piano[7][9]=PILLOLA;
	piano[0][18]=PILLOLA;
	piano[0][17]=BUCONERO;
	piano[0][19]=BUCONERO;
	piano[2][4]=PORTACHIUSA;
	piano[2][4]=PORTACHIUSA;
	piano[2][4]=PORTACHIUSA;
	piano[5][15]=PORTACHIUSA;
	piano[1][12]=LASERONEGIU;
	piano[3][12]=LASERONESU;
	
	i1=setInterval("raggioLaser(2,12)", 1500);
	countPillole=4;
	pilloletot=4;
	n1=new Cacciatore(0,6,NEMICO);
	intervallo1=setInterval("n1.insegui()",800);	
	n2=new Cacciatore(2,18,NEMICO);
	intervallo2=setInterval("n1.insegui()",800);	
	n3=new Cacciatore(6,19,NEMICO);
	intervallo3=setInterval("n1.insegui()",800);
}
	