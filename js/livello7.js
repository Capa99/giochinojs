window.addEventListener("load",livello7,true);
window.addEventListener("load",disegnaPiano,true);

function livello7(){
	piano[0][1]=OSTACOLO;
	piano[1][1]=OSTACOLO;
	piano[2][1]=OSTACOLO;
	piano[3][1]=OSTACOLO;
	piano[3][2]=OSTACOLO;
	piano[3][15]=OSTACOLO;
   piano[3][16]=OSTACOLO;
   piano[3][17]=OSTACOLO;
	piano[4][17]=OSTACOLO;
   piano[5][0]=OSTACOLO;
   piano[5][1]=OSTACOLO;
   piano[5][2]=OSTACOLO;
   piano[5][15]=OSTACOLO;
	piano[5][16]=OSTACOLO;
   piano[5][17]=OSTACOLO;
   piano[3][6]=FUNGO;
	piano[3][10]=FUNGO;
	piano[3][14]=FUNGO;
	piano[4][4]=FUNGO;
	piano[4][8]=FUNGO;
	piano[4][12]=FUNGO;
	piano[5][14]=FUNGO;
	piano[0][2]=PILLOLA;
	piano[0][9]=PILLOLA;
   piano[0][18]=PILLOLA;
	piano[9][2]=PILLOLA;
   piano[9][9]=PILLOLA;
	piano[9][18]=PILLOLA;
	countPillole=6;
	pilloletot=6;
	piano[4][16]=ARMA;
   n1 = new Cacciatore(0,6,NEMICO);
   intervallo1 = setInterval("n1.insegui()",800);
   n2 = new Cacciatore(0,13,NEMICO);
   intervallo2 = setInterval("n2.insegui()",800);
   n3 = new Cacciatore(2,4,NEMICO);
   intervallo3 = setInterval("n3.insegui()",800);
   n4 = new Cacciatore(6,4,NEMICO);
   intervallo4 = setInterval("n4.insegui()",800);
   n5 = new Cacciatore(9,6,NEMICO);
   intervallo5 = setInterval("n5.insegui()",800);
   n6 = new Cacciatore(9,13,NEMICO);
   intervallo6 = setInterval("n6.insegui()",800);
}
