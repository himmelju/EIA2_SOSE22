"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Carrot extends EndabgabeSoSe22.Vegetable {
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
            this.waterStep = 3;
            this.ripe = 10;
            this.ripeStep = 10;
            this.fertilizer = 30;
            this.fertilizerStep = 3;
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
            // Blatt 1 (Mitte)
            EndabgabeSoSe22.crc2.strokeStyle = "green";
            EndabgabeSoSe22.crc2.lineWidth = 4;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 9, this.position.y - 55);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(0, 20);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Blatt 2 (Rechts)
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 21, this.position.y - 51);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(-10, 20);
            EndabgabeSoSe22.crc2.lineTo(0, 0);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Blatt 3 (Links)
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 8, this.position.y - 30);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(-10, -20);
            EndabgabeSoSe22.crc2.lineTo(0, 0);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Oval für die Karotte
            EndabgabeSoSe22.crc2.fillStyle = "#ffa500";
            EndabgabeSoSe22.crc2.strokeStyle = "#ffa500";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.ellipse(0, 0, 13, 35, Math.PI / 12, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Licht
            EndabgabeSoSe22.crc2.fillStyle = "#ffcc66";
            EndabgabeSoSe22.crc2.strokeStyle = "#ffcc66";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate(270 * Math.PI / 180);
            EndabgabeSoSe22.crc2.ellipse(0, 0, 30, 11, Math.PI / 12, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Strich 1
            EndabgabeSoSe22.crc2.strokeStyle = "brown";
            EndabgabeSoSe22.crc2.lineWidth = 2;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 10, this.position.y + 4);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(10, 2);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 2
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 3, this.position.y - 8);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(10, 2);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 3
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 5, this.position.y + 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(10, 2);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
        }
        calculateSeedlingPrice() {
            this.currentSeedlingPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minSeedlingPrice - EndabgabeSoSe22.maxSeedlingPrice + 1)) + EndabgabeSoSe22.maxSeedlingPrice;
            EndabgabeSoSe22.carrotDisplay.innerHTML = "Preis: " + this.currentSeedlingPrice.toString();
            return this.currentSeedlingPrice;
        }
        calculateMarketPrice() {
            this.currentVegetablePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minVegetablePrice - EndabgabeSoSe22.maxVegetablePrice + 1)) + EndabgabeSoSe22.maxVegetablePrice;
            EndabgabeSoSe22.carrotSellDisplay.innerHTML = "Markt Preis: " + this.currentVegetablePrice.toString();
            return this.currentVegetablePrice;
        }
    }
    EndabgabeSoSe22.Carrot = Carrot;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Carrot.js.map