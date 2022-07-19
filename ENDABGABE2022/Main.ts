/* 
Aufgabe: <Abschlussarbeit SoSe22>
Name: <Julian Himmel>
Matrikel: <266418> 
Datum: <18.07.2022>
Quellen: <Kommiliton:innen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Celine Schneller, Katrin Masson - weitere Quellen: Inverted Classroon, Internet>
*/

namespace EndabgabeSoSe22 {
  window.addEventListener("load", handleload);

  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.querySelector("canvas")
  );
  let imgData: ImageData;

  export let allFields: Field[] = [];

  let startButton: HTMLButtonElement;

  //Variablen für Infos Box rechts am Rand
  export let waterDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("water")
  );
  export let ripeDisplay: HTMLElement = <HTMLElement>(
    document.getElementById("ripe")
  );
  export let fertilizerDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("fertilizer")
  );
  //Variablen für Actionbar links am Rand
  export let fertilizerPriceDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("fertilizerPrice")
  );
  export let pesticideDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("pesticidePrice")
  );
  //Variablen für Setzling Preise Anzeige
  export let capitalDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("capital")
  );
  export let tomatoDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("tomatoPrice")
  );
  export let cucumberDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("cucumberPrice")
  );
  export let carrotDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("carrotPrice")
  );
  export let potatoDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("potatoPrice")
  );
  export let broccoliDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("broccoliPrice")
  );
  //Variablen für Verkaufspreise für Gemüse
  export let tomatoSellDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("tomatoSellPrice")
  );
  export let cucumberSellDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("cucumberSellPrice")
  );
  export let carrotSellDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("carrotSellPrice")
  );
  export let potatoSellDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("potatoSellPrice")
  );
  export let broccoliSellDisplay: HTMLSpanElement = <HTMLSpanElement>(
    document.getElementById("broccoliSellPrice")
  );
  //Variablen für FormData Werte
  let startCapital: FormDataEntryValue;
  let minVegetablePriceFD: FormDataEntryValue;
  let maxVegetablePriceFD: FormDataEntryValue;
  let minFertilizerPriceFD: FormDataEntryValue;
  let maxFertilizerPriceFD: FormDataEntryValue;
  let minPesticidePriceFD: FormDataEntryValue;
  let maxPesticidePriceFD: FormDataEntryValue;
  let minSeedlingPriceFD: FormDataEntryValue;
  let maxSeedlingPriceFD: FormDataEntryValue;
  //FormData Werte in number umwandeln
  export let capital: number;
  export let maxVegetablePrice: number;
  export let minVegetablePrice: number;
  export let minFertilizerPrice: number;
  export let maxFertilizerPrice: number;
  export let minPesticidePrice: number;
  export let maxPesticidePrice: number;
  export let minSeedlingPrice: number;
  export let maxSeedlingPrice: number;

  //Array, um alle gepflanzten Gemüse und Bugs zu speichern
  export let vegetables: Vegetable[] = [];
  export let bugs: Bug[] = [];
  //x und y Koordinaten
  let mX: number;
  let mY: number;
  //Bilder aus VegetableBar unten
  let tomatoImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("tomato")
  );
  export let tomatoBoolean: boolean = false;
  let cucumberImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("cucumber")
  );
  export let cucumberBoolean: boolean = false;
  let carrotImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("carrot")
  );
  export let carrotBoolean: boolean = false;
  let potatoImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("potato")
  );
  export let potatoBoolean: boolean = false;
  let broccoliImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("broccoli")
  );
  export let broccoliBoolean: boolean = false;

  export let activeVegetable: Vegetable | null = null;
  export let activeField: Field | null = null;

  //Bilder aus ActionarBar
  export let wateringCanBoolean: boolean = false;
  export let wateringCanImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("Giesskanne")
  );
  export let fertilizerBoolean: boolean = false;
  export let fertilizerImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("Duenger")
  );
  export let pesticideBoolean: boolean = false;
  export let pesticideImage: HTMLImageElement = <HTMLImageElement>(
    document.getElementById("Pestizid")
  );

  //Load: Felder, Anzeigen etc. werden gezeichnet.
  function handleload(): void {
    if (!canvas) return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startButton = <HTMLButtonElement>document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

    drawGrass();
    //Canvas bekommt mouseposition listener
    canvas.addEventListener("click", getMousePosition);

    for (let spalten: number = 0; spalten < 10; spalten++) {
      for (let zeilen: number = 0; zeilen < 4; zeilen++) {
        allFields.push(new Field(spalten, zeilen));
      }
    }
    for (let field of allFields) {
      field.draw();
    }
    //Imagedata speichern, um es später bei der Animation zu zeichnen
    imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
  }
  //startGame wird bei StarButton KLick ausgeführt
  function startGame(): void {
    //get formdata
    let formData: FormData = new FormData(document.forms[0]);
    //delete span
    let startBoardSpan: HTMLSpanElement = <HTMLSpanElement>(
      document.getElementById("startBoardSpan")
    );
    startBoardSpan.innerHTML = " ";
    startBoardSpan.setAttribute("class", "invisible");
    //data aus HTML
    startCapital = <FormDataEntryValue>formData.get("startCapital");
    minVegetablePriceFD = <FormDataEntryValue>formData.get("minVegetablePrice");
    maxVegetablePriceFD = <FormDataEntryValue>formData.get("maxVegetablePrice");
    minFertilizerPriceFD = <FormDataEntryValue>(
      formData.get("minFertilizerPrice")
    );
    maxFertilizerPriceFD = <FormDataEntryValue>(
      formData.get("maxFertilizerPrice")
    );
    minPesticidePriceFD = <FormDataEntryValue>formData.get("minPesticidePrice");
    maxPesticidePriceFD = <FormDataEntryValue>formData.get("maxPesticidePrice");
    minSeedlingPriceFD = <FormDataEntryValue>formData.get("minSeedlingPrice");
    maxSeedlingPriceFD = <FormDataEntryValue>formData.get("maxSeedlingPrice");
    //FormData Variablen in Number umwandeln
    capital = Number(startCapital);
    maxVegetablePrice = Number(maxVegetablePriceFD);
    minVegetablePrice = Number(minVegetablePriceFD);
    minFertilizerPrice = Number(minFertilizerPriceFD);
    maxFertilizerPrice = Number(maxFertilizerPriceFD);
    minPesticidePrice = Number(minPesticidePriceFD);
    maxPesticidePrice = Number(maxPesticidePriceFD);
    minSeedlingPrice = Number(minSeedlingPriceFD);
    maxSeedlingPrice = Number(maxSeedlingPriceFD);

    //Kapital visuell Anzeigen
    capitalDisplay.innerHTML = capital.toString();

    //bugs werden gezeichnet
    createBugs();
    window.setInterval(animate, 10);
  }

  //Preise werden alle x Sekunden erneuert
  let tomatoCalculator: Tomato = new Tomato();
  setInterval(tomatoCalculator.calculateSeedlingPrice, 10000);
  setInterval(tomatoCalculator.calculateMarketPrice, 10000);
  let cucumberCalculator: Cucumber = new Cucumber();
  setInterval(cucumberCalculator.calculateSeedlingPrice, 10000);
  setInterval(cucumberCalculator.calculateMarketPrice, 10000);
  let carrotCalculator: Carrot = new Carrot();
  setInterval(carrotCalculator.calculateSeedlingPrice, 10000);
  setInterval(carrotCalculator.calculateMarketPrice, 10000);
  let potataoCalculator: Potato = new Potato();
  setInterval(potataoCalculator.calculateSeedlingPrice, 10000);
  setInterval(potataoCalculator.calculateMarketPrice, 10000);
  let broccoliCalculator: Broccoli = new Broccoli();
  setInterval(broccoliCalculator.calculateSeedlingPrice, 10000);
  setInterval(broccoliCalculator.calculateMarketPrice, 10000);
  
  //Tomate erstellen, um Düngerberechnungs Methode aufzurufen
  let priceCalculator: Tomato = new Tomato();
  setInterval(priceCalculator.calculateFertilizerPrice, 10000);
  setInterval(priceCalculator.calculatePesticidePrice, 10000);

  //create Bugs
  function createBugs(): void {

    setInterval(function (): void {
      let bug: Bug = new Bug({ x: 10000, y: 400 }); // Neuer Bug mit neuer Klasse
      bugs.push(bug);
    },          20000);
  }

  // Funktion um die Bugs zu animieren
  function animate(): void {

    crc2.putImageData(imgData, 0, 0); // das gespeicherte Bild wiederverwenden
    //Gemüse immer neu zeichnen, weil es sonst verschwindet
    vegetables.forEach(vegetable => {
      vegetable.draw();
    });

    for (let i: number = 0; i < bugs.length; i++) {

      let bug: Bug = bugs[i]; // Jeder Bug wird geupdatet, also an eine neue Position gebracht
      bug.update();
    }
  }

  //Gemüse wird erstellt und in Array gepusht. Wird in Field bei Klick aufgerufen. Methoden für Wasser etc. werden durch start() aufgerufen
  export function createVegetable(_position: Vector, veggieClass: any): Vegetable {
    let veggie: Vegetable = new veggieClass(_position, veggieClass);
    vegetables.push(veggie);
    veggie.draw();
    veggie.start();

    return veggie;
  }

  export function drawGrass(): void {
    let gradient: CanvasGradient = crc2.createLinearGradient(
      0,
      0,
      0,
      crc2.canvas.height
    );
    gradient.addColorStop(0, "lightgreen");
    gradient.addColorStop(0.8, "green");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    crc2.restore();
  }

  //speichert die Koordinaten der Mausposition als mX und mY und ruft da field.handleclick auf
  function getMousePosition(_evt: MouseEvent): void {
    let rect: DOMRect = canvas.getBoundingClientRect();
    mX = _evt.clientX - rect.left;
    mY = _evt.clientY - rect.top;
    for (let field of allFields) {
      field.handleClick(mX, mY, _evt);
    }
  }
  //Bei Klick auf Bild bekommt -> Varibale bekommt den Wert des aktuellen Gemüses, um es zum Pflanzen auszuwählen
  function vegetableChosen(vegetableClass: any): void {
    activeVegetable = vegetableClass;
  }

  //alle Gemüse in der unteren Bar bekommen einen eventlistener
  tomatoImage.addEventListener("click", () => vegetableChosen(Tomato));
  cucumberImage.addEventListener("click", () => vegetableChosen(Cucumber));
  carrotImage.addEventListener("click", () => vegetableChosen(Carrot));
  potatoImage.addEventListener("click", () => vegetableChosen(Potato));
  broccoliImage.addEventListener("click", () => vegetableChosen(Broccoli));
  //wenn wasser ausgewählt wird
  function waterChosen(_event: MouseEvent): void {
    wateringCanBoolean = true;
  }
  //Wenn Dünger ausgewählt wird
  function fertilizerChosen(_event: MouseEvent): void {
    fertilizerBoolean = true;
  }
   //Wenn Pestizid ausgewählt wird
  function pesticideChosen(_event: MouseEvent): void {
    pesticideBoolean = true;
  }
  //Klick Listener für Wasser und Dünger
  wateringCanImage.addEventListener("click", waterChosen);
  fertilizerImage.addEventListener("click", fertilizerChosen);
  pesticideImage.addEventListener("click", pesticideChosen);
}
