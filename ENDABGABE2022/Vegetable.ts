namespace EndabgabeSoSe22 {
  export abstract class Vegetable {
    public position: Vector;
    public harvestStatus: boolean;
    public ripe: number;
    public water: number;
    public fertilizer: number;
    public currentSeedlingPrice: number;
    public currentVegetablePrice: number;
    public currentFertilizerPrice: number;
    public currentPesticidePrice: number;
    protected fertilizerStep: number;
    protected waterStep: number;
    protected ripeStep: number;
    protected minFertilizerPrice: number;
    protected maxFertilizerPrice: number;
    protected minPesticidePrice: number;
    protected maxPesticidePrice: number;
    protected minSeedlingPrice: number;
    protected maxSeedlingPrice: number;
    protected minVegetablePrice: number;
    protected maxVegetablePrice: number;

    constructor(_position?: Vector) {
      this.position = new Vector(500, 500);
    }

    public draw(): void {
      // console.log("vegetable draw");
    }

    //Beim Pflanzen wird Setzling Preis von Kapital abgezogen
    public substractFromCapital(): void {
      capital -= this.currentSeedlingPrice;
      capitalDisplay.innerHTML = capital.toString();

      //Lädt Seite nue wenn Kapital < 0
      if (capital < 0) {
        window.alert("game over");
        location.reload();
      }
    }

    //Beim Ernten wird Gemüsepreis Kapital gutgeschrieben
    public addToCapital(): void {
      capital += this.currentVegetablePrice;
      capitalDisplay.innerHTML = capital.toString();
    }

    //Zieht Beim DÜngen Düngerpreis von Kapital ab
    public substractFertilizerFromCapital(): void {
      capital -= this.currentFertilizerPrice;
      capitalDisplay.innerHTML = capital.toString();

      //Lädt Seite nue wenn Kapital < 0
      if (capital < 0) {
        window.alert("game over");
        location.reload();
      }
    }

    //Methode für Dünger Preis
    public calculateFertilizerPrice(): number {
      this.currentFertilizerPrice =
        Math.floor(
          Math.random() * (minFertilizerPrice - maxFertilizerPrice + 1)
        ) + maxFertilizerPrice;
      fertilizerPriceDisplay.innerHTML = this.currentFertilizerPrice.toString();

      return this.currentFertilizerPrice;
    }

    //Methode für Pestizid Preis
    public calculatePesticidePrice(): number {
      this.currentPesticidePrice =
        Math.floor(
          Math.random() * (minPesticidePrice - maxPesticidePrice + 1)
        ) + maxPesticidePrice;
      pesticideDisplay.innerHTML = this.currentPesticidePrice.toString();

      return this.currentPesticidePrice;
    }

    //Zieht Pestizid Preis von Kapital ab
    public substractPesticideFromCapital(): void {
      capital -= this.currentPesticidePrice;
      capitalDisplay.innerHTML = capital.toString();

      //Lädt Seite nue wenn Kapital < 0
      if (capital < 0) {
        window.alert("game over");
        location.reload();
      }
    }

    //start mit Reifegrad erhöhen und wasser/dünger verringern
    public start = () => {
      const growInterval: number = setInterval(() => {
        if (this.fertilizer >= 100 || this.fertilizer <= 0) {
          clearInterval(growInterval);
        }
        if (this.water >= 100 || this.water <= 0) {
          clearInterval(growInterval);
        }
        if (this.ripe >= 100) {
          clearInterval(growInterval);
          this.harvestStatus = true;
        }
        this.fertilizer -= this.fertilizerStep;
        this.water -= this.waterStep;
        this.ripe += this.ripeStep;
      },                                       5000);
    }
  }
}
