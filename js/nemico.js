function Nemico (x,y,nome){
    this.x=x; 
    this.y=y;
	this.nome=nome;
	insegui: function{
		var precX = this.x;
		var precY = this.y;
		var newX = this.x; 
    	var newY = this.y; 
		if(Math.sqrt(Math.pow((ominoX-this.x),2)+Math.pow((ominoY-this.y),2))<5){

		if (this.x < ominoX) { newX = this.x +1; }
		if (this.x > ominoX) { newX = this.x - 1; }
		if (this.y < ominoY) {newY = this.y +1;}
		if (this.y > ominoY) {newY = this.y - 1;}
		// adesso prima di spostare controlliamo che non ci sia un ostacolo nella cella: 
		if (piano[newX][newY]!=OSTACOLO){
		// assume la nuova posizione
		this.x = newX; 
		this.y = newY;
		// si disegna il cacciatore nella nuova cella
		document.getElementById(“c”+precX+”_“+precY).src   = piano[precX][precY ] + “.jpg”;
		document.getElementById(“c”+this.x+”_“+this.y).src    = this.nome + “.jpg”; 
	}
	}
	else{
		if (controllaCellaNemico(newX, newY)){
		var daSrc = "c" +this.x+"_"+this.y; 
	    var aSrc  = "c" + newX+"_"+ newY;
		console.log(daSrc + " " +aSrc);

		document.getElementById(daSrc).src = pathImg +  piano[this.x][this.y] + ".jpg";
		this.x= newX;
		this.y= newY;
		
		disegnaCellaSpeciale(nemicox,nemicoy,NEMICO);
		}
		var min=1; 
        var max=4;  
        var random =Math.floor(Math.random() * (+max - +min)) + +min;
		if (random==1)
			newX=(newX -1 + R)%R;
		if (random==2)
			newX=(newX +1 + R)%R;
		if (random==3)
			newY=(newY -1 + C)%C;
		if (random==4)
			newX=(newY +1 + C)%C;
	}
}

