"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Vegetable {
        position;
        harvestStatus;
        ripe;
        water;
        fertilizer;
        currentSeedlingPrice;
        currentVegetablePrice;
        currentFertilizerPrice;
        currentPesticidePrice;
        fertilizerStep;
        waterStep;
        ripeStep;
        minFertilizerPrice;
        maxFertilizerPrice;
        minPesticidePrice;
        maxPesticidePrice;
        minSeedlingPrice;
        maxSeedlingPrice;
        minVegetablePrice;
        maxVegetablePrice;
        constructor(_position) {
            this.position = new EndabgabeSoSe22.Vector(500, 500);
        }
        draw() {
            // console.log("vegetable draw");
        }
        //Beim Pflanzen wird Setzling Preis von Kapital abgezogen
        substractFromCapital() {
            EndabgabeSoSe22.capital -= this.currentSeedlingPrice;
            EndabgabeSoSe22.capitalDisplay.innerHTML = EndabgabeSoSe22.capital.toString();
            //Lädt Seite nue wenn Kapital < 0
            if (EndabgabeSoSe22.capital < 0) {
                window.alert("game over");
                location.reload();
            }
        }
        //Beim Ernten wird Gemüsepreis Kapital gutgeschrieben
        addToCapital() {
            EndabgabeSoSe22.capital += this.currentVegetablePrice;
            EndabgabeSoSe22.capitalDisplay.innerHTML = EndabgabeSoSe22.capital.toString();
        }
        //Zieht Beim DÜngen Düngerpreis von Kapital ab
        substractFertilizerFromCapital() {
            EndabgabeSoSe22.capital -= this.currentFertilizerPrice;
            EndabgabeSoSe22.capitalDisplay.innerHTML = EndabgabeSoSe22.capital.toString();
            //Lädt Seite nue wenn Kapital < 0
            if (EndabgabeSoSe22.capital < 0) {
                window.alert("game over");
                location.reload();
            }
        }
        //Methode für Dünger Preis
        calculateFertilizerPrice() {
            this.currentFertilizerPrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minFertilizerPrice - EndabgabeSoSe22.maxFertilizerPrice + 1)) + EndabgabeSoSe22.maxFertilizerPrice;
            EndabgabeSoSe22.fertilizerPriceDisplay.innerHTML = this.currentFertilizerPrice.toString();
            return this.currentFertilizerPrice;
        }
        //Methode für Pestizid Preis
        calculatePesticidePrice() {
            this.currentPesticidePrice =
                Math.floor(Math.random() * (EndabgabeSoSe22.minPesticidePrice - EndabgabeSoSe22.maxPesticidePrice + 1)) + EndabgabeSoSe22.maxPesticidePrice;
            EndabgabeSoSe22.pesticideDisplay.innerHTML = this.currentPesticidePrice.toString();
            return this.currentPesticidePrice;
        }
        //Zieht Pestizid Preis von Kapital ab
        substractPesticideFromCapital() {
            EndabgabeSoSe22.capital -= this.currentPesticidePrice;
            EndabgabeSoSe22.capitalDisplay.innerHTML = EndabgabeSoSe22.capital.toString();
            //Lädt Seite nue wenn Kapital < 0
            if (EndabgabeSoSe22.capital < 0) {
                window.alert("game over");
                location.reload();
            }
        }
        // start mit Reifegrad erhöhen und wasser/dünger verringern
        start = () => {
            const growInterval = setInterval(() => {
                if (this.fertilizer >= 100 || this.fertilizer <= 0) {
                    clearInterval(growInterval);
                }
                if (this.water >= 100 || this.water <= 0) {
                    clearInterval(growInterval);
                }
                if (this.ripe >= 100) {
                    clearInterval(growInterval);
                    this.harvestStatus = true;
                }
                this.fertilizer -= this.fertilizerStep;
                this.water -= this.waterStep;
                this.ripe += this.ripeStep;
            }, 5000);
        };
    }
    EndabgabeSoSe22.Vegetable = Vegetable;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Vegetable.js.map