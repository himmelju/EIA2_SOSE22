"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Broccoli extends EndabgabeSoSe22.Vegetable {
        constructor(_position) {
            super(_position);
            if (!_position) {
                this.position.x = 500;
                this.position.y = 500;
            }
            else {
                this.position = _position;
            }
            this.harvestStatus = false;
            this.water = 30;
            this.waterStep = 2;
            this.ripe = 10;
            this.ripeStep = 5;
            this.fertilizer = 30;
            this.fertilizerStep = 2;
            this.minSeedlingPrice = EndabgabeSoSe22.minSeedlingPrice;
            this.maxSeedlingPrice = EndabgabeSoSe22.maxSeedlingPrice;
            this.minVegetablePrice = EndabgabeSoSe22.minVegetablePrice;
            this.maxVegetablePrice = EndabgabeSoSe22.maxVegetablePrice;
            this.minFertilizerPrice = EndabgabeSoSe22.minFertilizerPrice;
            this.maxFertilizerPrice = EndabgabeSoSe22.maxFertilizerPrice;
            this.currentSeedlingPrice = this.calculateSeedlingPrice();
            this.currentVegetablePrice = this.calculateMarketPrice();
        }
        draw() {
            EndabgabeSoSe22.crc2.strokeStyle = "#99cc66";
            EndabgabeSoSe22.crc2.lineWidth = 15;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(0, 35);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            // Strang (Rechts)
            EndabgabeSoSe22.crc2.lineWidth = 6;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 15, this.position.y + 5);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-10, 15);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            // Strang (Linkss)
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 5, this.position.y + 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-10, -15);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Kreis (Links)
            EndabgabeSoSe22.crc2.fillStyle = "darkgreen";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 25, this.position.y - 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 18, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Kreis (Rechts)
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 25, this.position.y - 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 18, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Kreis (Mitte)
            EndabgabeSoSe22.crc2.fillStyle = "green";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y - 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Licht
            EndabgabeSoSe22.crc2.fillStyle = "#99cc66";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 2, this.position.y - 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate((270 * Math.PI) / 180);
            EndabgabeSoSe22.crc2.arc(0, 0, 18, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
        }
        calculateSeedlingPrice() {
            this.currentSeedlingPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minSeedlingPrice - EndabgabeSoSe22.maxSeedlingPrice + 1)) +
                    EndabgabeSoSe22.maxSeedlingPrice;
            EndabgabeSoSe22.broccoliDisplay.innerHTML =
                "Preis: " + this.currentSeedlingPrice.toString();
            return this.currentSeedlingPrice;
        }
        calculateMarketPrice() {
            this.currentVegetablePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minVegetablePrice - EndabgabeSoSe22.maxVegetablePrice + 1)) + EndabgabeSoSe22.maxVegetablePrice;
            EndabgabeSoSe22.broccoliSellDisplay.innerHTML =
                "Markt Preis: " + this.currentVegetablePrice.toString();
            return this.currentVegetablePrice;
        }
    }
    EndabgabeSoSe22.Broccoli = Broccoli;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Broccoli.js.map