//window.addEventListener("load",livello5,true);
//window.addEventListener("load",disegnaPiano,true);
function livello5(){
	piano[5][0]=OSTACOLO;
	piano[5][1]=OSTACOLO;
	piano[5][3]=OSTACOLO;
	piano[0][4]=OSTACOLO;
	piano[1][4]=OSTACOLO;
    piano[3][4]=OSTACOLO;
	piano[4][4]=OSTACOLO;
	piano[5][4]=OSTACOLO;
	piano[5][5]=OSTACOLO;
    piano[5][6]=OSTACOLO;
    piano[5][7]=OSTACOLO;
	piano[0][8]=OSTACOLO;
	piano[1][8]=OSTACOLO;
	piano[3][8]=OSTACOLO;
	piano[4][8]=OSTACOLO;
	piano[5][8]=OSTACOLO;
	piano[8][8]=OSTACOLO;
	piano[5][10]=OSTACOLO;
	piano[5][11]=OSTACOLO;
	piano[0][12]=OSTACOLO;
	piano[4][12]=OSTACOLO;
	piano[5][12]=OSTACOLO;
	piano[5][13]=OSTACOLO;
	piano[5][14]=OSTACOLO;
	piano[5][16]=OSTACOLO;
	piano[5][17]=OSTACOLO;
	piano[5][18]=OSTACOLO;
	piano[5][19]=OSTACOLO;
	piano[7][3]=FUNGO;
	piano[6][4]=FUNGO;
	piano[8][4]=FUNGO;
	piano[7][7]=FUNGO;
	piano[9][8]=FUNGO;
	piano[7][12]=FUNGO;
	piano[6][10]=FUNGO;
	piano[8][10]=FUNGO;
	piano[8][13]=FUNGO;
	piano[6][4]=PILLOLA;
    piano[4][10]=PILLOLA;
	piano[7][9]=PILLOLA;
	piano[0][18]=PILLOLA;
	piano[0][17]=BUCONERO;
	piano[0][19]=BUCONERO;
	piano[2][4]=PORTACHIUSA;
	piano[5][9]=PORTACHIUSA;
	piano[2][8]=PORTACHIUSA;
	piano[5][15]=PORTACHIUSA;
	piano[1][12]=LASERONEGIU;
	piano[3][12]=LASERONESU;
	piano[9][18]=CHIAVE;
	piano[0][10]=ARMA;
	
	
	
	i1=setInterval("raggioLaser(2,12)", 1500);
	countPillole=4;
	pilloletot=4;
	n1=new Cacciatore(0,6,NEMICO);
	intervallo1=setInterval("n1.insegui()",800);	
	n2=new Cacciatore(2,18,NEMICO);
	intervallo2=setInterval("n2.insegui()",800);	
	n3=new Cacciatore(6,19,NEMICO);
	intervallo3=setInterval("n3.insegui()",800);
}
	