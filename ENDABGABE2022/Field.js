"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    class Field {
        zeilenposition;
        spaltenposition;
        color = "rgb(132, 92, 92)";
        vegetable;
        constructor(_spaltenposition, _zeilenposition) {
            this.spaltenposition = _spaltenposition + 1;
            this.zeilenposition = _zeilenposition + 1;
        }
        draw() {
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.spaltenposition * 100, this.zeilenposition * 100);
            EndabgabeSoSe22.crc2.fillStyle = this.color;
            EndabgabeSoSe22.crc2.fillRect(5, 5, 90, 90);
            EndabgabeSoSe22.crc2.restore();
        }
        handleClick(_mX, _mY, _event) {
            if (_mX - 100 < this.spaltenposition * 100 &&
                _mX - 100 > this.spaltenposition * 100 - 100 &&
                _mY - 100 < this.zeilenposition * 100 &&
                _mY - 100 > this.zeilenposition * 100 - 100) {
                // setze aktives Feld und zeige die Details an
                if (this.vegetable) {
                    EndabgabeSoSe22.activeField = this;
                    this.visualize();
                    if (EndabgabeSoSe22.wateringCanBoolean == true) {
                        this.vegetable.water += 25;
                        EndabgabeSoSe22.wateringCanBoolean = false;
                        this.visualize();
                    }
                    if (EndabgabeSoSe22.fertilizerBoolean == true) {
                        this.vegetable.substractFertilizerFromCapital();
                        this.vegetable.fertilizer += 25;
                        EndabgabeSoSe22.fertilizerBoolean = false;
                        this.visualize();
                    }
                    if (EndabgabeSoSe22.pesticideBoolean == true) {
                        this.vegetable.substractPesticideFromCapital();
                        EndabgabeSoSe22.pesticideBoolean = false;
                        this.visualize();
                    }
                }
                // wenn zuvor ein Gemüse ausgewählt wurde zeichne dieses
                if (EndabgabeSoSe22.activeVegetable) {
                    this.color = "rgb(117, 84, 84)";
                    this.draw();
                    const veggie = EndabgabeSoSe22.createVegetable({
                        x: this.spaltenposition * 100 + 50,
                        y: this.zeilenposition * 100 + 50
                    }, EndabgabeSoSe22.activeVegetable);
                    this.vegetable = veggie;
                    this.vegetable.substractFromCapital();
                    EndabgabeSoSe22.activeVegetable = null;
                }
                // check ob Gemüse gesetzt ist
                if (this.vegetable) {
                    // Wenn das Gemüse erntereif ist geklickt wird, dann Gemüse löschen und Canvas neu zeichnen
                    if (this.vegetable.ripe >= 100) {
                        this.vegetable.addToCapital();
                        this.clear();
                        this.clearCanvas();
                    }
                    // wird gelöscht wenn überdüngt/unterdüngt oder überwässert/ unterwässert
                    if (this.vegetable.fertilizer > 100 ||
                        this.vegetable.fertilizer <= 0 ||
                        this.vegetable.water > 100 ||
                        this.vegetable.water <= 0) {
                        this.clear();
                        this.clearCanvas();
                    }
                }
            }
        }
        visualize() {
            const activeFieldVegetable = this.vegetable || null;
            EndabgabeSoSe22.waterDisplay.innerHTML = activeFieldVegetable?.water.toString() || "";
            EndabgabeSoSe22.ripeDisplay.innerHTML = activeFieldVegetable?.ripe.toString() || "";
            EndabgabeSoSe22.fertilizerDisplay.innerHTML = activeFieldVegetable?.fertilizer.toString() || "";
        }
        //Funktion mit der das Gemüse, welches geerntet wurde aus dem Array gelöscht wird
        clear() {
            if (this.vegetable) {
                const vegetable = this.vegetable;
                EndabgabeSoSe22.vegetables.splice(EndabgabeSoSe22.vegetables.findIndex((e) => e.position.x === vegetable.position.x &&
                    e.position.y === vegetable.position.y), 1);
            }
            this.vegetable = null;
            this.visualize();
        }
        clearCanvas() {
            EndabgabeSoSe22.crc2.resetTransform();
            EndabgabeSoSe22.crc2.clearRect(0, 0, EndabgabeSoSe22.canvas.width, EndabgabeSoSe22.canvas.height);
            EndabgabeSoSe22.drawGrass();
            for (let field of EndabgabeSoSe22.allFields) {
                this.color = "rgb(132, 92, 92)";
                field.draw();
            }
            for (let vegetable of EndabgabeSoSe22.vegetables) {
                vegetable.draw();
            }
            this.vegetable = null;
        }
    }
    EndabgabeSoSe22.Field = Field;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Field.js.map