let spieler; // player variable global gesetzt ohne value

//objekt erstellen für den Spiel Charakter als Konstruktor
function Spieler(heldenTyp, leben, mana, stärke, agilität, tempo) {
  this.heldenTyp = heldenTyp;
  this.leben = leben;
  this.mana = mana;
  this.stärke = stärke;
  this.agilität = agilität;
  this.tempo = tempo;
}

let SpielerBewegung = {

  //angriffs Method
  calcAngriff: function() {

    //schadens Kalkulation für den Spieler
    let spielerAngriff = function() {
      let calcGrundSchaden;
      if (spieler.mana >= 200) {
        calcGrundSchaden = spieler.agilität + (spieler.stärke * spieler.mana / 1000);
        spieler.mana = spieler.mana - 200;
        getSpielerMana.innerHTML = "Mana: " + spieler.mana;
      } else {
        calcGrundSchaden = spieler.stärke * spieler.agilität / 500;
      }
      let schadenVarianz = Math.floor(Math.random() * Math.floor(10));
      let calcSchadenOutput = calcGrundSchaden + schadenVarianz;
      let anzahlAngriffe = Math.floor(Math.random() * Math.floor(spieler.agilität / 10) / 2) + 1;
      let angriffValue = [calcSchadenOutput, anzahlAngriffe];
      return angriffValue;
    }

    //schadens Kalkulation für den Gegner
    let gegnerAngriff = function() {
      let calcGrundSchaden;
      if (gegner.mana >= 200) {
        calcGrundSchaden = gegner.agilität + gegner.stärke * gegner.mana / 1000;
        gegner.mana = gegner.mana - 200;
      } else {
        calcGrundSchaden = gegner.stärke * gegner.agilität / 1000;
      }
      let schadenVarianz = Math.floor(Math.random() * Math.floor(10));
      let calcSchadenOutput = calcGrundSchaden + schadenVarianz;
      let anzahlAngriffe = Math.floor(Math.random() * Math.floor(spieler.agilität / 10) / 2) + 1;
      let angriffValue = [calcSchadenOutput, anzahlAngriffe];
      return angriffValue;
    }

    // Die angezeigten Werte für Gegner und Spieler
    let getSpielerLeben = document.querySelector(".leben-spieler");
    let getSpielerMana = document.querySelector(".mana-spieler");
    let getGegnerLeben = document.querySelector(".leben-gegner");
    let getGegnerMana = document.querySelector(".mana-gegner");

    //wer greift als erster an
    let getSpielerTempo = spieler.tempo;
    let getGegnerTempo = gegner.tempo;

    // wenn Spieler schneller als Gegner ist
    if (getSpielerTempo >= getGegnerTempo) {
      let spielerAngriffValue = spielerAngriff();
      let totalSchaden = spielerAngriffValue[0] * spielerAngriffValue[1];
      gegner.leben = gegner.leben - totalSchaden;
      alert("Du hast " + spielerAngriffValue[0] + " Schaden " + spielerAngriffValue[1] + " mal gemacht!");

      //wenn Kampf Gewonnen
      if (gegner.leben <= 0) {
        alert("Du hast gewonnen. Browser Refreshen um ein neues Spiel zu starten");
        getSpielerLeben.innerHTML = 'Leben: ' + spieler.leben;
        getGegnerLeben.innerHTML = 'Leben: 0'
      }
      // sonst geht der Kampf weiter und Mana empfindliche Wesen sammeln Mana auf
      else {
        if (spieler.heldenTyp == "Magier") {
          alert("Du hast das Mana der Umgebung aufgesammelt. Mana +100");
          spieler.mana += 100;
          getSpielerMana.innerHTML = "Mana: " + spieler.mana;
        }else{}
        getGegnerLeben.innerHTML = 'Leben: ' + gegner.leben;

        // jetzt greift Gegner an
        let gegnerAngriffValue = gegnerAngriff();
        let totalSchaden = gegnerAngriffValue[0] * gegnerAngriffValue[1];
        spieler.leben = spieler.leben - totalSchaden;
        alert("Du hast " + gegnerAngriffValue[0] + " Schaden " + gegnerAngriffValue[1] + " erlitten");
        if (spieler.leben <= 0) {
          alert("Du hast Verloren. Browser Refreshen um ein neues Spiel zu starten");
          getGegnerLeben.innerHTML = 'Leben: ' + gegner.leben;
          getSpielerLeben.innerHTML = 'Leben: 0'
        } else {
          if (gegner.gegnerTyp == "Drache") {
            alert("Der Gegner hat das Mana der Umgebung aufgesammelt. Mana +100");
            gegner.mana += 100;
            getGegnerMana.innerHTML = "Mana: " + gegner.mana;
          } else {}
          getSpielerLeben.innerHTML = 'Leben: ' + spieler.leben;
        }
      }
      
      // aber wenn Gegner schneller als Spieler ist, andersrum
    } else if (getSpielerTempo <= getGegnerTempo) {
      let gegnerAngriffValue = gegnerAngriff();
      let totalSchaden = gegnerAngriffValue[0] * gegnerAngriffValue[1];
      spieler.leben = spieler.leben - totalSchaden;
      alert("Du hast " + gegnerAngriffValue[0] + " Schaden " + gegnerAngriffValue[1] + " erlitten!");
      if (spieler.leben <= 0) {
        alert("Du hast Verloren. Browser Refreshen um ein neues Spiel zu starten");
        getGegnerLeben.innerHTML = 'Leben: ' + gegner.leben;
        getSpielerLeben.innerHTML = 'Leben: 0'
      } else {
        if (gegner.gegnerTyp == "Drache") {
          alert("Der Gegner hat das Mana der Umgebung aufgesammelt. Mana +100");
          gegner.mana += 100;
          getGegnerMana.innerHTML = "Mana: " + gegner.mana;
        } else {}
        getSpielerLeben.innerHTML = 'Leben: ' + spieler.leben;

        let spielerAngriffValue = spielerAngriff();
        let totalSchaden = spielerAngriffValue[0] * spielerAngriffValue[1];
        gegner.leben = gegner.leben - totalSchaden;
        alert("Du hast " + spielerAngriffValue[0] + " Schaden " + spielerAngriffValue[1] + " verursacht");
        if (gegner.leben <= 0) {
          alert("Du hast Gewonnen. Browser Refreshen um ein neues Spiel zu starten");
          getSpielerLeben.innerHTML = 'Leben: ' + spieler.leben;
          getGegnerLeben.innerHTML = 'Leben: 0'
        } else {
          if (spieler.heldenTyp == "Magier") {
            alert("Du hast das Mana der Umgebung aufgesammelt. Mana +100");
            spieler.mana += 100;
            getSpielerMana.innerHTML = "Mana: " + spieler.mana;
          } else {}
          getGegnerLeben.innerHTML = 'Leben: ' + gegner.leben;
        }
      }
    }
  }
}
