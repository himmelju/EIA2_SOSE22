namespace EndabgabeSoSe22 {
  export class Field {
    private zeilenposition: number;
    private spaltenposition: number;
    private color: string = "rgb(132, 92, 92)";
    private vegetable: Vegetable | null;

    constructor(_spaltenposition: number, _zeilenposition: number) {
      this.spaltenposition = _spaltenposition + 1;
      this.zeilenposition = _zeilenposition + 1;
    }

    public draw(): void {
      crc2.save();
      crc2.translate(this.spaltenposition * 100, this.zeilenposition * 100);
      crc2.fillStyle = this.color;
      crc2.fillRect(5, 5, 90, 90);
      crc2.restore();
    }

    public handleClick(_mX: number, _mY: number, _event: MouseEvent): void {
      if (
        _mX - 100 < this.spaltenposition * 100 &&
        _mX - 100 > this.spaltenposition * 100 - 100 &&
        _mY - 100 < this.zeilenposition * 100 &&
        _mY - 100 > this.zeilenposition * 100 - 100
      ) {
        // setze aktives Feld und zeige die Details an
        if (this.vegetable) {
          activeField = this;
          this.visualize();

          if (wateringCanBoolean == true) {
            this.vegetable.water += 25;
            wateringCanBoolean = false;
            this.visualize();
          }

          if (fertilizerBoolean == true) {
            this.vegetable.substractFertilizerFromCapital();
            this.vegetable.fertilizer += 25;
            fertilizerBoolean = false;
            this.visualize();
          }

          if (pesticideBoolean == true) {
            this.vegetable.substractPesticideFromCapital();
            pesticideBoolean = false;
            this.visualize();
          }
        }

        // wenn zuvor ein Gemüse ausgewählt wurde zeichne dieses
        if (activeVegetable) {
          this.color = "rgb(117, 84, 84)";
          this.draw();

          const veggie: Vegetable = createVegetable(
            {
              x: this.spaltenposition * 100 + 50,
              y: this.zeilenposition * 100 + 50
            },
            activeVegetable
          );

          this.vegetable = veggie;
          this.vegetable.substractFromCapital();

          activeVegetable = null;
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
          if (
            this.vegetable.fertilizer > 100 ||
            this.vegetable.fertilizer <= 0 ||
            this.vegetable.water > 100 ||
            this.vegetable.water <= 0
          ) {
            this.clear();
            this.clearCanvas();
          }
        }
      }
    }  

    private visualize(): void {
      const activeFieldVegetable: Vegetable | null = this.vegetable || null;

      waterDisplay.innerHTML = activeFieldVegetable?.water.toString() || "";
      ripeDisplay.innerHTML = activeFieldVegetable?.ripe.toString() || "";
      fertilizerDisplay.innerHTML = activeFieldVegetable?.fertilizer.toString() || "";
    }

    //Funktion mit der das Gemüse, welches geerntet wurde aus dem Array gelöscht wird
    private clear(): void {
      if (this.vegetable) {
        const vegetable: Vegetable = this.vegetable;
        vegetables.splice(
          vegetables.findIndex(
            (e) =>
              e.position.x === vegetable.position.x &&
              e.position.y === vegetable.position.y
          ),
          1
        );
      }
      this.vegetable = null;
      this.visualize();
    }

    private clearCanvas(): void {
      crc2.resetTransform();
      crc2.clearRect(0, 0, canvas.width, canvas.height);
      drawGrass();
      for (let field of allFields) {
        this.color = "rgb(132, 92, 92)";
        field.draw();
      }
      for (let vegetable of vegetables) {
        vegetable.draw();
      }
      this.vegetable = null;
    }
  }
} 
