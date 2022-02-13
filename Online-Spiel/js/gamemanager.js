// ein riesiges Objekt da HTML nur eine Funktion seperat laufen lassen kann
//Hauptobjekt (ist für das Spiel verantwortlich)
let gameManager = {
  // setGameStart ist ein Method von gameManager und
  // setGameStart ist ein Konstruktor welches resetSpieler für mehrere Klassen zu benutzen
  setGameStart: function(heldenTyp) {
    this.resetSpieler(heldenTyp);
    this.setPreFight();
  },
  //resetSpieler ist eine weitere Method von gameManager
  //es setzt die Werte vom Charakter fest
  resetSpieler: function(heldenTyp) {
    switch (heldenTyp) {
      case "Krieger":
        spieler = new Spieler(heldenTyp, 1000, 0, 400, 100, 50)
        break;
      case "Magier":
        spieler = new Spieler(heldenTyp, 350, 250, 100, 200, 100)
        break;
    }
    // und stellt sie im Interface da
    let aktivierInterface = document.querySelector(".interface");
    aktivierInterface.innerHTML =
      '<img src="/bilder/' + heldenTyp.toLowerCase() + '.jpg" class="img-avatar"> <div> <h3> ' +
      heldenTyp + '</h3> <p class="leben-spieler"> Leben: ' +
      spieler.leben + '</p> <p class="mana-spieler"> Mana: ' +
      spieler.mana + '</p> <p> Stärke: ' + spieler.stärke +
      '</p> <p> Agilität: ' + spieler.agilität + '</p> <p> Tempo: ' + spieler.tempo + '</p> </div>';
  },
  // es wird das "Kampffeld" geladen
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getAktion = document.querySelector(".aktion");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p> Aufgabe: Finde einen Gegner! </p>';
    // onclick funktion setFight wird geladen nachdem der Gegner gesucht wird
    getAktion.innerHTML = '<a href="#" class="knopf-prefight" onclick="gameManager.setFight()"> Such den Gegner! </a>';
    getArena.style.visibility = "visible";
  },
  // Method und Konstruktor für den kompletten Kampf
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getAktion = document.querySelector(".aktion");
    let getGegner = document.querySelector(".gegner");

    //gegner Kreieren
    let gegner00 = new Gegner("Orc", 400, 0, 400, 100, 100);
    let gegner01 = new Gegner("Drache", 1000, 100, 150, 130, 20);
    //zufaelligerGegner wird ausgesucht
    let zufaelligerGegner = Math.floor(Math.random() * Math.floor(2));
    switch (zufaelligerGegner) {
      case 0:
        gegner = gegner00;
        break;
      case 1:
        gegner = gegner01;
        break;
    }

    getHeader.innerHTML = '<p>Aufgabe: Greif An </p> ';
    //onclick SpielerBewegung (öffentliches Objekt von spieler.js wird geladen)
    //Konstruktor calcAngriff wird geladen
    getAktion.innerHTML = '<a href="#" class="knopf-prefight" onclick="SpielerBewegung.calcAngriff()"> ATTACKE! </a>';

    //gegnerischen Werte werden dargestellt
    getGegner.innerHTML = '<img src="/bilder/' + gegner.gegnerTyp.toLowerCase() + '.jpg" class="img-avatar"> <div> <h3> ' +
      gegner.gegnerTyp + '</h3> <p class="leben-gegner"> Leben: ' +
      gegner.leben + '</p> <p class="mana-gegner"> Mana: ' +
      gegner.mana + '</p> <p> Stärke: ' + gegner.stärke + '</p> <p> Agilität: ' +
      gegner.agilität + '</p> <p> Tempo: ' + gegner.tempo + '</p> </div>';
  }
}
