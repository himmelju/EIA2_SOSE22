namespace EndabgabeSoSe22 {
  export class Potato extends Vegetable {
    constructor(_position?: Vector) {
      super(_position);

      if (!_position) {
        this.position.x = 500;
        this.position.y = 500;
      } else {
        this.position = _position;
      }
      this.harvestStatus = false;
      this.water = 30;
      this.waterStep = 5;
      this.ripe = 10;
      this.ripeStep = 10;
      this.fertilizer = 30;
      this.fertilizerStep = 5;
      this.minSeedlingPrice = minSeedlingPrice;
      this.maxSeedlingPrice = maxSeedlingPrice;
      this.minVegetablePrice = minVegetablePrice;
      this.maxVegetablePrice = maxVegetablePrice;
      this.minFertilizerPrice = minFertilizerPrice;
      this.maxFertilizerPrice = maxFertilizerPrice;
      this.currentSeedlingPrice = this.calculateSeedlingPrice();
      this.currentVegetablePrice = this.calculateMarketPrice();
    }

    draw(): void {
      crc2.fillStyle = "#ffcc66";
      crc2.save();
      crc2.translate(this.position.x, this.position.y - 15);
      crc2.beginPath();
      crc2.arc(0, 0, 23, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis Licht
      crc2.fillStyle = "#ffff99";
      crc2.save();
      crc2.translate(this.position.x, this.position.y - 12);
      crc2.beginPath();
      crc2.rotate((270 * Math.PI) / 180);
      crc2.arc(0, 0, 17, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Kreis für unteren Teil der Kartoffel
      crc2.fillStyle = "#ffcc66";
      crc2.save();
      crc2.translate(this.position.x, this.position.y + 15);
      crc2.beginPath();
      crc2.arc(0, 0, 23, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis Licht
      crc2.fillStyle = "#ffff99";
      crc2.save();
      crc2.translate(this.position.x, this.position.y + 10);
      crc2.beginPath();
      crc2.rotate((270 * Math.PI) / 180);
      crc2.arc(0, 0, 19, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 1
      crc2.fillStyle = "brown";
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 2
      crc2.save();
      crc2.translate(this.position.x + 6, this.position.y + 11);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 3
      crc2.save();
      crc2.translate(this.position.x - 6, this.position.y - 12);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 4
      crc2.save();
      crc2.translate(this.position.x - 10, this.position.y + 8);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 5
      crc2.save();
      crc2.translate(this.position.x + 10, this.position.y - 10);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 6
      crc2.save();
      crc2.translate(this.position.x + 2, this.position.y - 25);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 7
      crc2.save();
      crc2.translate(this.position.x - 11, this.position.y - 23);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 8
      crc2.save();
      crc2.translate(this.position.x - 10, this.position.y + 21);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Halb-Kreis 9
      crc2.save();
      crc2.translate(this.position.x + 7, this.position.y + 21);
      crc2.beginPath();
      crc2.arc(0, 0, 3, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
    }

    calculateSeedlingPrice(): number {
      this.currentSeedlingPrice =
        Math.floor(Math.random() * (minSeedlingPrice - maxSeedlingPrice + 1)) +
        maxSeedlingPrice;
      potatoDisplay.innerHTML =
        "Preis: " + this.currentSeedlingPrice.toString();

      return this.currentSeedlingPrice;
    }

    calculateMarketPrice(): number {
      this.currentVegetablePrice =
        Math.floor(
          Math.random() * (minVegetablePrice - maxVegetablePrice + 1)
        ) + maxVegetablePrice;
      potatoSellDisplay.innerHTML =
        "Markt Preis: " + this.currentVegetablePrice.toString();

      return this.currentVegetablePrice;
    }
  }
}
