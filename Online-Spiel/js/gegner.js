let gegner; //gegner Variable global gesetzt ohne value

//objekt erstellen für den Gegner Charakter als Konstruktor
function Gegner(gegnerTyp, leben, mana, stärke, agilität, tempo){
  this.gegnerTyp = gegnerTyp;
  this.leben = leben;
  this.mana = mana;
  this.stärke = stärke;
  this.agilität = agilität;
  this.tempo = tempo;
}
