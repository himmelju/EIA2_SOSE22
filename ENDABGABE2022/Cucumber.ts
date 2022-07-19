namespace EndabgabeSoSe22 {
  export class Cucumber extends Vegetable {
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
      this.waterStep = 4;
      this.ripe = 10;
      this.ripeStep = 15;
      this.fertilizer = 30;
      this.fertilizerStep = 4;
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
      //Oval für die Gurke
      crc2.fillStyle = "green";
      crc2.strokeStyle = "green";
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.ellipse(0, 0, 13, 35, Math.PI / 9, 0, 2 * Math.PI);
      crc2.stroke();
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Licht
      crc2.fillStyle = "	#3cb371";
      crc2.strokeStyle = "	#3cb371";
      crc2.save();
      crc2.translate(this.position.x - 2, this.position.y);
      crc2.beginPath();
      crc2.rotate((270 * Math.PI) / 180);
      crc2.ellipse(0, 0, 30, 11, Math.PI / 9, 0, 1 * Math.PI);
      crc2.stroke();
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      // Blatt links
      crc2.fillStyle = "yellow";
      crc2.save();
      crc2.translate(this.position.x + 11, this.position.y - 38);
      crc2.beginPath();
      crc2.arc(0, 0, 5, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      // Blatt rechts
      crc2.fillStyle = "yellow";
      crc2.save();
      crc2.translate(this.position.x + 18, this.position.y - 36);
      crc2.beginPath();
      crc2.arc(0, 0, 5, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Strich 1
      crc2.strokeStyle = "yellow";
      crc2.lineWidth = 2;
      crc2.save();
      crc2.translate(this.position.x, this.position.y - 22);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
      //Strich 2
      crc2.save();
      crc2.translate(this.position.x - 11, this.position.y - 10);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
      //Strich 3
      crc2.save();
      crc2.translate(this.position.x + 11, this.position.y - 10);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
      //Strich 4
      crc2.save();
      crc2.translate(this.position.x + 11, this.position.y + 7);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
      //Strich 5
      crc2.save();
      crc2.translate(this.position.x - 5, this.position.y + 20);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
      //Strich 6
      crc2.save();
      crc2.translate(this.position.x - 8, this.position.y + 6);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-4, 10);
      crc2.stroke();
      crc2.restore();
    }

    calculateSeedlingPrice(): number {
      this.currentSeedlingPrice =
        Math.floor(Math.random() * (minSeedlingPrice - maxSeedlingPrice + 1)) +
        maxSeedlingPrice;
      cucumberDisplay.innerHTML =
        "Preis: " + this.currentSeedlingPrice.toString();

      return this.currentSeedlingPrice;
    }

    calculateMarketPrice(): number {
      this.currentVegetablePrice =
        Math.floor(
          Math.random() * (minVegetablePrice - maxVegetablePrice + 1)
        ) + maxVegetablePrice;
      cucumberSellDisplay.innerHTML =
        "Markt Preis: " + this.currentVegetablePrice.toString();

      return this.currentVegetablePrice;
    }
  }
}
