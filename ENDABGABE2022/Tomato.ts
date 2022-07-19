namespace EndabgabeSoSe22 {
  export class Tomato extends Vegetable {
    constructor(_position?: Vector) {
      super(_position);

      if (!_position) {
        this.position.x = 500;
        this.position.y = 500;
      } else {
        this.position = _position;
      }
      this.harvestStatus = false;
      this.water = 50;
      this.waterStep = 1;
      this.ripe = 10;
      this.ripeStep = 16;
      this.fertilizer = 50;
      this.fertilizerStep = 1;
      this.minSeedlingPrice = minSeedlingPrice;
      this.maxSeedlingPrice = maxSeedlingPrice;
      this.minVegetablePrice = minVegetablePrice;
      this.maxVegetablePrice = maxVegetablePrice;
      this.minFertilizerPrice = minFertilizerPrice;
      this.maxFertilizerPrice = maxFertilizerPrice;
      this.minPesticidePrice = minPesticidePrice;
      this.maxPesticidePrice = maxPesticidePrice;
      this.currentSeedlingPrice = this.calculateSeedlingPrice();
      this.currentVegetablePrice = this.calculateMarketPrice();
      this.currentFertilizerPrice = this.calculateFertilizerPrice();
      this.currentPesticidePrice = this.calculatePesticidePrice();
    }

    public draw(): void {
      // console.log("tomato draw");

      crc2.fillStyle = "red";
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.arc(0, 0, 30, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Kreis für den Schatten
      crc2.fillStyle = "#ff6347";
      crc2.save();
      crc2.translate(this.position.x + 2, this.position.y);
      crc2.beginPath();
      crc2.rotate((270 * Math.PI) / 180);
      crc2.arc(0, 0, 25, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      // Blatt 1
      crc2.strokeStyle = "green";
      crc2.lineWidth = 8;
      crc2.save();
      crc2.translate(this.position.x, this.position.y - 42);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(0, 20);
      crc2.stroke();
      crc2.restore();
      //Blatt 2
      crc2.save();
      crc2.translate(this.position.x + 12, this.position.y - 40);
      crc2.beginPath();
      crc2.moveTo(-10, 20);
      crc2.lineTo(0, 0);
      crc2.stroke();
      crc2.restore();
      //Blatt 3
      crc2.save();
      crc2.translate(this.position.x - 3, this.position.y - 20);
      crc2.beginPath();
      crc2.moveTo(-10, -20);
      crc2.lineTo(0, 0);
      crc2.stroke();
      crc2.restore();
    }

    //methode für Setzling Preis
    public calculateSeedlingPrice(): number {
      this.currentSeedlingPrice =
        Math.floor(Math.random() * (minSeedlingPrice - maxSeedlingPrice + 1)) +
        maxSeedlingPrice;
      tomatoDisplay.innerHTML =
        "Preis: " + this.currentSeedlingPrice.toString();

      return this.currentSeedlingPrice;
    }
    //methode für Dünger Preis
    public calculateMarketPrice(): number {
      this.currentVegetablePrice =
        Math.floor(
          Math.random() * (minVegetablePrice - maxVegetablePrice + 1)
        ) + maxVegetablePrice;
      tomatoSellDisplay.innerHTML =
        "Markt Preis: " + this.currentVegetablePrice.toString();

      return this.currentVegetablePrice;
    }
  } //class
} //namespace
