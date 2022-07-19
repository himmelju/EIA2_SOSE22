namespace EndabgabeSoSe22 {

    export class Carrot extends Vegetable {
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
            this.waterStep = 3;
            this.ripe = 10;
            this.ripeStep = 10;
            this.fertilizer = 30;
            this.fertilizerStep = 3;
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
            // Blatt 1 (Mitte)
            crc2.strokeStyle = "green";
            crc2.lineWidth = 4;
            crc2.save();
            crc2.translate(this.position.x + 9, this.position.y - 55);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 20);
            crc2.stroke();
            crc2.restore();
            //Blatt 2 (Rechts)
            crc2.save();
            crc2.translate(this.position.x + 21, this.position.y - 51);
            crc2.beginPath();
            crc2.moveTo(-10, 20);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.restore();
            //Blatt 3 (Links)
            crc2.save();
            crc2.translate(this.position.x + 8, this.position.y - 30);
            crc2.beginPath();
            crc2.moveTo(-10, -20);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.restore();
            //Oval für die Karotte
            crc2.fillStyle = "#ffa500";
            crc2.strokeStyle = "#ffa500";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(0, 0, 13, 35, Math.PI / 12, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fill();
            crc2.restore();
            //Licht
            crc2.fillStyle = "#ffcc66";
            crc2.strokeStyle = "#ffcc66";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(270 * Math.PI / 180);
            crc2.ellipse(0, 0, 30, 11, Math.PI / 12, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fill();
            crc2.restore();
            //Strich 1
            crc2.strokeStyle = "brown";
            crc2.lineWidth = 2;
            crc2.save();
            crc2.translate(this.position.x - 10, this.position.y + 4);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(10, 2);
            crc2.stroke();
            crc2.restore();
            //Strich 2
            crc2.save();
            crc2.translate(this.position.x + 3, this.position.y - 8);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(10, 2);
            crc2.stroke();
            crc2.restore();
            //Strich 3
            crc2.save();
            crc2.translate(this.position.x - 5, this.position.y + 20);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(10, 2);
            crc2.stroke();
            crc2.restore();
        }

        calculateSeedlingPrice(): number {
          this.currentSeedlingPrice =
            Math.floor(Math.random() * (minSeedlingPrice - maxSeedlingPrice + 1)) + maxSeedlingPrice;
          carrotDisplay.innerHTML = "Preis: " + this.currentSeedlingPrice.toString();
          
          return this.currentSeedlingPrice;
              }

        calculateMarketPrice(): number {
          this.currentVegetablePrice =
            Math.floor(
              Math.random() * (minVegetablePrice - maxVegetablePrice + 1)
            ) + maxVegetablePrice;
          carrotSellDisplay.innerHTML = "Markt Preis: " + this.currentVegetablePrice.toString();
    
          return this.currentVegetablePrice;
        }
    }
}