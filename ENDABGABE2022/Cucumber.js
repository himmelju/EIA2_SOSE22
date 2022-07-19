"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Cucumber extends EndabgabeSoSe22.Vegetable {
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
            this.waterStep = 4;
            this.ripe = 10;
            this.ripeStep = 15;
            this.fertilizer = 30;
            this.fertilizerStep = 4;
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
            //Oval für die Gurke
            EndabgabeSoSe22.crc2.fillStyle = "green";
            EndabgabeSoSe22.crc2.strokeStyle = "green";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.ellipse(0, 0, 13, 35, Math.PI / 9, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Licht
            EndabgabeSoSe22.crc2.fillStyle = "	#3cb371";
            EndabgabeSoSe22.crc2.strokeStyle = "	#3cb371";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 2, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate((270 * Math.PI) / 180);
            EndabgabeSoSe22.crc2.ellipse(0, 0, 30, 11, Math.PI / 9, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            // Blatt links
            EndabgabeSoSe22.crc2.fillStyle = "yellow";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 11, this.position.y - 38);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            // Blatt rechts
            EndabgabeSoSe22.crc2.fillStyle = "yellow";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 18, this.position.y - 36);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Strich 1
            EndabgabeSoSe22.crc2.strokeStyle = "yellow";
            EndabgabeSoSe22.crc2.lineWidth = 2;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y - 22);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 2
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 11, this.position.y - 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 3
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 11, this.position.y - 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 4
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 11, this.position.y + 7);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 5
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 5, this.position.y + 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Strich 6
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 8, this.position.y + 6);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-4, 10);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
        }
        calculateSeedlingPrice() {
            this.currentSeedlingPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minSeedlingPrice - EndabgabeSoSe22.maxSeedlingPrice + 1)) +
                    EndabgabeSoSe22.maxSeedlingPrice;
            EndabgabeSoSe22.cucumberDisplay.innerHTML =
                "Preis: " + this.currentSeedlingPrice.toString();
            return this.currentSeedlingPrice;
        }
        calculateMarketPrice() {
            this.currentVegetablePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minVegetablePrice - EndabgabeSoSe22.maxVegetablePrice + 1)) + EndabgabeSoSe22.maxVegetablePrice;
            EndabgabeSoSe22.cucumberSellDisplay.innerHTML =
                "Markt Preis: " + this.currentVegetablePrice.toString();
            return this.currentVegetablePrice;
        }
    }
    EndabgabeSoSe22.Cucumber = Cucumber;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Cucumber.js.map