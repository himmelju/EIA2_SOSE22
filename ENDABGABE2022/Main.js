"use strict";
/* alt
Aufgabe: <Abschlussarbeit SoSe22>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2022>
Quellen: <Kommiliton:innen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Celine Schneller, Katrin Masson - weitere Quellen: Inverted Classroon, Internet>
*/
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    window.addEventListener("load", handleload);
    EndabgabeSoSe22.canvas = (document.querySelector("canvas"));
    let imgData;
    EndabgabeSoSe22.allFields = [];
    let startButton;
    //Variablen für Infos Box rechts am Rand
    EndabgabeSoSe22.waterDisplay = (document.getElementById("water"));
    EndabgabeSoSe22.ripeDisplay = (document.getElementById("ripe"));
    EndabgabeSoSe22.fertilizerDisplay = (document.getElementById("fertilizer"));
    //Variablen für Actionbar links am Rand
    EndabgabeSoSe22.fertilizerPriceDisplay = (document.getElementById("fertilizerPrice"));
    EndabgabeSoSe22.pesticideDisplay = (document.getElementById("pesticidePrice"));
    //Variablen für Setzling Preise Anzeige
    EndabgabeSoSe22.capitalDisplay = (document.getElementById("capital"));
    EndabgabeSoSe22.tomatoDisplay = (document.getElementById("tomatoPrice"));
    EndabgabeSoSe22.cucumberDisplay = (document.getElementById("cucumberPrice"));
    EndabgabeSoSe22.carrotDisplay = (document.getElementById("carrotPrice"));
    EndabgabeSoSe22.potatoDisplay = (document.getElementById("potatoPrice"));
    EndabgabeSoSe22.broccoliDisplay = (document.getElementById("broccoliPrice"));
    //Variablen für Verkaufspreise für Gemüse
    EndabgabeSoSe22.tomatoSellDisplay = (document.getElementById("tomatoSellPrice"));
    EndabgabeSoSe22.cucumberSellDisplay = (document.getElementById("cucumberSellPrice"));
    EndabgabeSoSe22.carrotSellDisplay = (document.getElementById("carrotSellPrice"));
    EndabgabeSoSe22.potatoSellDisplay = (document.getElementById("potatoSellPrice"));
    EndabgabeSoSe22.broccoliSellDisplay = (document.getElementById("broccoliSellPrice"));
    //Variablen für FormData Werte
    let startCapital;
    let minVegetablePriceFD;
    let maxVegetablePriceFD;
    let minFertilizerPriceFD;
    let maxFertilizerPriceFD;
    let minPesticidePriceFD;
    let maxPesticidePriceFD;
    let minSeedlingPriceFD;
    let maxSeedlingPriceFD;
    //Array, um alle gepflanzten Gemüse und Bugs zu speichern
    EndabgabeSoSe22.vegetables = [];
    EndabgabeSoSe22.bugs = [];
    //x und y Koordinaten
    let mX;
    let mY;
    //Bilder aus VegetableBar unten
    let tomatoImage = (document.getElementById("tomato"));
    EndabgabeSoSe22.tomatoBoolean = false;
    let cucumberImage = (document.getElementById("cucumber"));
    EndabgabeSoSe22.cucumberBoolean = false;
    let carrotImage = (document.getElementById("carrot"));
    EndabgabeSoSe22.carrotBoolean = false;
    let potatoImage = (document.getElementById("potato"));
    EndabgabeSoSe22.potatoBoolean = false;
    let broccoliImage = (document.getElementById("broccoli"));
    EndabgabeSoSe22.broccoliBoolean = false;
    EndabgabeSoSe22.activeVegetable = null;
    EndabgabeSoSe22.activeField = null;
    //Bilder aus ActionarBar
    EndabgabeSoSe22.wateringCanBoolean = false;
    EndabgabeSoSe22.wateringCanImage = (document.getElementById("Giesskanne"));
    EndabgabeSoSe22.fertilizerBoolean = false;
    EndabgabeSoSe22.fertilizerImage = (document.getElementById("Duenger"));
    EndabgabeSoSe22.pesticideBoolean = false;
    EndabgabeSoSe22.pesticideImage = (document.getElementById("Pestizid"));
    //Load: Felder, Anzeigen etc. werden gezeichnet.
    function handleload() {
        if (!EndabgabeSoSe22.canvas)
            return;
        EndabgabeSoSe22.crc2 = EndabgabeSoSe22.canvas.getContext("2d");
        EndabgabeSoSe22.canvas.width = window.innerWidth;
        EndabgabeSoSe22.canvas.height = window.innerHeight;
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
        drawGrass();
        //Canvas bekommt mouseposition listener
        EndabgabeSoSe22.canvas.addEventListener("click", getMousePosition);
        for (let spalten = 0; spalten < 10; spalten++) {
            for (let zeilen = 0; zeilen < 4; zeilen++) {
                EndabgabeSoSe22.allFields.push(new EndabgabeSoSe22.Field(spalten, zeilen));
            }
        }
        for (let field of EndabgabeSoSe22.allFields) {
            field.draw();
        }
        //Imagedata speichern, um es später bei der Animation zu zeichnen
        imgData = EndabgabeSoSe22.crc2.getImageData(0, 0, EndabgabeSoSe22.canvas.width, EndabgabeSoSe22.canvas.height);
    }
    //startGame wird bei StarButton KLick ausgeführt
    function startGame() {
        //get formdata
        let formData = new FormData(document.forms[0]);
        //delete span
        let startBoardSpan = (document.getElementById("startBoardSpan"));
        startBoardSpan.innerHTML = " ";
        startBoardSpan.setAttribute("class", "invisible");
        //data aus HTML
        startCapital = formData.get("startCapital");
        minVegetablePriceFD = formData.get("minVegetablePrice");
        maxVegetablePriceFD = formData.get("maxVegetablePrice");
        minFertilizerPriceFD = (formData.get("minFertilizerPrice"));
        maxFertilizerPriceFD = (formData.get("maxFertilizerPrice"));
        minPesticidePriceFD = formData.get("minPesticidePrice");
        maxPesticidePriceFD = formData.get("maxPesticidePrice");
        minSeedlingPriceFD = formData.get("minSeedlingPrice");
        maxSeedlingPriceFD = formData.get("maxSeedlingPrice");
        //FormData Variablen in Number umwandeln
        EndabgabeSoSe22.capital = Number(startCapital);
        EndabgabeSoSe22.maxVegetablePrice = Number(maxVegetablePriceFD);
        EndabgabeSoSe22.minVegetablePrice = Number(minVegetablePriceFD);
        EndabgabeSoSe22.minFertilizerPrice = Number(minFertilizerPriceFD);
        EndabgabeSoSe22.maxFertilizerPrice = Number(maxFertilizerPriceFD);
        EndabgabeSoSe22.minPesticidePrice = Number(minPesticidePriceFD);
        EndabgabeSoSe22.maxPesticidePrice = Number(maxPesticidePriceFD);
        EndabgabeSoSe22.minSeedlingPrice = Number(minSeedlingPriceFD);
        EndabgabeSoSe22.maxSeedlingPrice = Number(maxSeedlingPriceFD);
        //Kapital visuell Anzeigen
        EndabgabeSoSe22.capitalDisplay.innerHTML = EndabgabeSoSe22.capital.toString();
        //bugs werden gezeichnet
        createBugs();
        window.setInterval(animate, 10);
    }
    //Preise werden alle x Sekunden erneuert
    let tomatoCalculator = new EndabgabeSoSe22.Tomato();
    setInterval(tomatoCalculator.calculateSeedlingPrice, 10000);
    setInterval(tomatoCalculator.calculateMarketPrice, 10000);
    let cucumberCalculator = new EndabgabeSoSe22.Cucumber();
    setInterval(cucumberCalculator.calculateSeedlingPrice, 10000);
    setInterval(cucumberCalculator.calculateMarketPrice, 10000);
    let carrotCalculator = new EndabgabeSoSe22.Carrot();
    setInterval(carrotCalculator.calculateSeedlingPrice, 10000);
    setInterval(carrotCalculator.calculateMarketPrice, 10000);
    let potataoCalculator = new EndabgabeSoSe22.Potato();
    setInterval(potataoCalculator.calculateSeedlingPrice, 10000);
    setInterval(potataoCalculator.calculateMarketPrice, 10000);
    let broccoliCalculator = new EndabgabeSoSe22.Broccoli();
    setInterval(broccoliCalculator.calculateSeedlingPrice, 10000);
    setInterval(broccoliCalculator.calculateMarketPrice, 10000);
    //Tomate erstellen, um Düngerberechnungs Methode aufzurufen
    let priceCalculator = new EndabgabeSoSe22.Tomato();
    setInterval(priceCalculator.calculateFertilizerPrice, 10000);
    setInterval(priceCalculator.calculatePesticidePrice, 10000);
    //create Bugs
    function createBugs() {
        setInterval(function () {
            let bug = new EndabgabeSoSe22.Bug({ x: 10000, y: 400 }); // Neuer Bug mit neuer Klasse
            EndabgabeSoSe22.bugs.push(bug);
        }, 20000);
    }
    // Funktion um die Bugs zu animieren
    function animate() {
        EndabgabeSoSe22.crc2.putImageData(imgData, 0, 0); // das gespeicherte Bild wiederverwenden
        //Gemüse immer neu zeichnen, weil es sonst verschwindet
        EndabgabeSoSe22.vegetables.forEach(vegetable => {
            vegetable.draw();
        });
        for (let i = 0; i < EndabgabeSoSe22.bugs.length; i++) {
            let bug = EndabgabeSoSe22.bugs[i]; // Jeder Bug wird geupdatet, also an eine neue Position gebracht
            bug.update();
        }
    }
    //Gemüse wird erstellt und in Array gepusht. Wird in Field bei Klick aufgerufen. Methoden für Wasser etc. werden durch start() aufgerufen
    function createVegetable(_position, veggieClass) {
        let veggie = new veggieClass(_position, veggieClass);
        EndabgabeSoSe22.vegetables.push(veggie);
        veggie.draw();
        veggie.start();
        return veggie;
    }
    EndabgabeSoSe22.createVegetable = createVegetable;
    function drawGrass() {
        let gradient = EndabgabeSoSe22.crc2.createLinearGradient(0, 0, 0, EndabgabeSoSe22.crc2.canvas.height);
        gradient.addColorStop(0, "lightgreen");
        gradient.addColorStop(0.8, "green");
        EndabgabeSoSe22.crc2.fillStyle = gradient;
        EndabgabeSoSe22.crc2.fillRect(0, 0, EndabgabeSoSe22.canvas.width, EndabgabeSoSe22.canvas.height);
        EndabgabeSoSe22.crc2.restore();
    }
    EndabgabeSoSe22.drawGrass = drawGrass;
    //speichert die Koordinaten der Mausposition als mX und mY und ruft da field.handleclick auf
    function getMousePosition(_evt) {
        let rect = EndabgabeSoSe22.canvas.getBoundingClientRect();
        mX = _evt.clientX - rect.left;
        mY = _evt.clientY - rect.top;
        for (let field of EndabgabeSoSe22.allFields) {
            field.handleClick(mX, mY, _evt);
        }
    }
    //Bei Klick auf Bild bekommt -> Varibale bekommt den Wert des aktuellen Gemüses, um es zum Pflanzen auszuwählen
    function vegetableChosen(vegetableClass) {
        EndabgabeSoSe22.activeVegetable = vegetableClass;
    }
    //alle Gemüse in der unteren Bar bekommen einen eventlistener
    tomatoImage.addEventListener("click", () => vegetableChosen(EndabgabeSoSe22.Tomato));
    cucumberImage.addEventListener("click", () => vegetableChosen(EndabgabeSoSe22.Cucumber));
    carrotImage.addEventListener("click", () => vegetableChosen(EndabgabeSoSe22.Carrot));
    potatoImage.addEventListener("click", () => vegetableChosen(EndabgabeSoSe22.Potato));
    broccoliImage.addEventListener("click", () => vegetableChosen(EndabgabeSoSe22.Broccoli));
    //wenn wasser ausgewählt wird
    function waterChosen(_event) {
        EndabgabeSoSe22.wateringCanBoolean = true;
    }
    //Wenn Dünger ausgewählt wird
    function fertilizerChosen(_event) {
        EndabgabeSoSe22.fertilizerBoolean = true;
    }
    //Wenn Pestizid ausgewählt wird
    function pesticideChosen(_event) {
        EndabgabeSoSe22.pesticideBoolean = true;
    }
    //Klick Listener für Wasser und Dünger
    EndabgabeSoSe22.wateringCanImage.addEventListener("click", waterChosen);
    EndabgabeSoSe22.fertilizerImage.addEventListener("click", fertilizerChosen);
    EndabgabeSoSe22.pesticideImage.addEventListener("click", pesticideChosen);
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Main.js.map