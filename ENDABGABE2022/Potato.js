"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Potato extends EndabgabeSoSe22.Vegetable {
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
            this.waterStep = 5;
            this.ripe = 10;
            this.ripeStep = 10;
            this.fertilizer = 30;
            this.fertilizerStep = 5;
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
            EndabgabeSoSe22.crc2.fillStyle = "#ffcc66";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y - 15);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 23, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis Licht
            EndabgabeSoSe22.crc2.fillStyle = "#ffff99";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y - 12);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate((270 * Math.PI) / 180);
            EndabgabeSoSe22.crc2.arc(0, 0, 17, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Kreis für unteren Teil der Kartoffel
            EndabgabeSoSe22.crc2.fillStyle = "#ffcc66";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y + 15);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 23, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis Licht
            EndabgabeSoSe22.crc2.fillStyle = "#ffff99";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y + 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate((270 * Math.PI) / 180);
            EndabgabeSoSe22.crc2.arc(0, 0, 19, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 1
            EndabgabeSoSe22.crc2.fillStyle = "brown";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 2
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 6, this.position.y + 11);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 3
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 6, this.position.y - 12);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 4
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 10, this.position.y + 8);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 5
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 10, this.position.y - 10);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 6
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 2, this.position.y - 25);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 7
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 11, this.position.y - 23);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 8
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 10, this.position.y + 21);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Halb-Kreis 9
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 7, this.position.y + 21);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 3, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
        }
        calculateSeedlingPrice() {
            this.currentSeedlingPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minSeedlingPrice - EndabgabeSoSe22.maxSeedlingPrice + 1)) +
                    EndabgabeSoSe22.maxSeedlingPrice;
            EndabgabeSoSe22.potatoDisplay.innerHTML =
                "Preis: " + this.currentSeedlingPrice.toString();
            return this.currentSeedlingPrice;
        }
        calculateMarketPrice() {
            this.currentVegetablePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minVegetablePrice - EndabgabeSoSe22.maxVegetablePrice + 1)) + EndabgabeSoSe22.maxVegetablePrice;
            EndabgabeSoSe22.potatoSellDisplay.innerHTML =
                "Markt Preis: " + this.currentVegetablePrice.toString();
            return this.currentVegetablePrice;
        }
    }
    EndabgabeSoSe22.Potato = Potato;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Potato.js.map