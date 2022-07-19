namespace EndabgabeSoSe22 {
  export class Broccoli extends Vegetable {
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
      this.waterStep = 2;
      this.ripe = 10;
      this.ripeStep = 5;
      this.fertilizer = 30;
      this.fertilizerStep = 2;
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
      crc2.strokeStyle = "#99cc66";
      crc2.lineWidth = 15;
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(0, 35);
      crc2.stroke();
      crc2.restore();
      // Strang (Rechts)
      crc2.lineWidth = 6;
      crc2.save();
      crc2.translate(this.position.x + 15, this.position.y + 5);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-10, 15);
      crc2.stroke();
      crc2.restore();
      // Strang (Linkss)
      crc2.save();
      crc2.translate(this.position.x - 5, this.position.y + 20);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-10, -15);
      crc2.stroke();
      crc2.restore();
      //Kreis (Links)
      crc2.fillStyle = "darkgreen";
      crc2.save();
      crc2.translate(this.position.x - 25, this.position.y - 10);
      crc2.beginPath();
      crc2.arc(0, 0, 18, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Kreis (Rechts)
      crc2.save();
      crc2.translate(this.position.x + 25, this.position.y - 10);
      crc2.beginPath();
      crc2.arc(0, 0, 18, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Kreis (Mitte)
      crc2.fillStyle = "green";
      crc2.save();
      crc2.translate(this.position.x, this.position.y - 20);
      crc2.beginPath();
      crc2.arc(0, 0, 25, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      //Licht
      crc2.fillStyle = "#99cc66";
      crc2.save();
      crc2.translate(this.position.x + 2, this.position.y - 20);
      crc2.beginPath();
      crc2.rotate((270 * Math.PI) / 180);
      crc2.arc(0, 0, 18, 0, 1 * Math.PI);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
    }

    calculateSeedlingPrice(): number {
      this.currentSeedlingPrice =
        Math.floor(Math.random() * (minSeedlingPrice - maxSeedlingPrice + 1)) +
        maxSeedlingPrice;
      broccoliDisplay.innerHTML =
        "Preis: " + this.currentSeedlingPrice.toString();

      return this.currentSeedlingPrice;
    }

    calculateMarketPrice(): number {
      this.currentVegetablePrice =
        Math.floor(
          Math.random() * (minVegetablePrice - maxVegetablePrice + 1)
        ) + maxVegetablePrice;
      broccoliSellDisplay.innerHTML =
        "Markt Preis: " + this.currentVegetablePrice.toString();

      return this.currentVegetablePrice;
    }
  }
}
