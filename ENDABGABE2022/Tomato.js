"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Tomato extends EndabgabeSoSe22.Vegetable {
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
            this.water = 50;
            this.waterStep = 1;
            this.ripe = 10;
            this.ripeStep = 16;
            this.fertilizer = 50;
            this.fertilizerStep = 1;
            this.minSeedlingPrice = EndabgabeSoSe22.minSeedlingPrice;
            this.maxSeedlingPrice = EndabgabeSoSe22.maxSeedlingPrice;
            this.minVegetablePrice = EndabgabeSoSe22.minVegetablePrice;
            this.maxVegetablePrice = EndabgabeSoSe22.maxVegetablePrice;
            this.minFertilizerPrice = EndabgabeSoSe22.minFertilizerPrice;
            this.maxFertilizerPrice = EndabgabeSoSe22.maxFertilizerPrice;
            this.minPesticidePrice = EndabgabeSoSe22.minPesticidePrice;
            this.maxPesticidePrice = EndabgabeSoSe22.maxPesticidePrice;
            this.currentSeedlingPrice = this.calculateSeedlingPrice();
            this.currentVegetablePrice = this.calculateMarketPrice();
            this.currentFertilizerPrice = this.calculateFertilizerPrice();
            this.currentPesticidePrice = this.calculatePesticidePrice();
        }
        draw() {
            // console.log("tomato draw");
            EndabgabeSoSe22.crc2.fillStyle = "red";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            //Kreis für den Schatten
            EndabgabeSoSe22.crc2.fillStyle = "#ff6347";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 2, this.position.y);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.rotate((270 * Math.PI) / 180);
            EndabgabeSoSe22.crc2.arc(0, 0, 25, 0, 1 * Math.PI);
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.restore();
            // Blatt 1
            EndabgabeSoSe22.crc2.strokeStyle = "green";
            EndabgabeSoSe22.crc2.lineWidth = 8;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y - 42);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(0, 20);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Blatt 2
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 12, this.position.y - 40);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(-10, 20);
            EndabgabeSoSe22.crc2.lineTo(0, 0);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Blatt 3
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 3, this.position.y - 20);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(-10, -20);
            EndabgabeSoSe22.crc2.lineTo(0, 0);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
        }
        //methode für Setzling Preis
        calculateSeedlingPrice() {
            this.currentSeedlingPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minSeedlingPrice - EndabgabeSoSe22.maxSeedlingPrice + 1)) +
                    EndabgabeSoSe22.maxSeedlingPrice;
            EndabgabeSoSe22.tomatoDisplay.innerHTML =
                "Preis: " + this.currentSeedlingPrice.toString();
            return this.currentSeedlingPrice;
        }
        //methode für Dünger Preis
        calculateMarketPrice() {
            this.currentVegetablePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minVegetablePrice - EndabgabeSoSe22.maxVegetablePrice + 1)) + EndabgabeSoSe22.maxVegetablePrice;
            EndabgabeSoSe22.tomatoSellDisplay.innerHTML =
                "Markt Preis: " + this.currentVegetablePrice.toString();
            return this.currentVegetablePrice;
        }
    } //class
    EndabgabeSoSe22.Tomato = Tomato;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {})); //namespace
//# sourceMappingURL=Tomato.js.map