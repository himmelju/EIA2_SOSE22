"use strict";
var EndabgabeSoSe22;
(function (EndabgabeSoSe22) {
    let TASK;
    (function (TASK) {
        TASK[TASK["IDLE"] = 0] = "IDLE";
        TASK[TASK["FLY_TO_VEGETABLE"] = 1] = "FLY_TO_VEGETABLE";
        TASK[TASK["ABSORB_NECTAR"] = 2] = "ABSORB_NECTAR";
        TASK[TASK["FLY_TO_BEHIVE"] = 3] = "FLY_TO_BEHIVE";
        TASK[TASK["EJECT_NECTAR"] = 4] = "EJECT_NECTAR";
    })(TASK || (TASK = {}));
    class Bug {
        position;
        velocity;
        vegetable; //aktuelles Vegetable
        xTarget;
        yTarget;
        speed;
        task = TASK.IDLE; // Leerlauf - Anfangszustand
        //drawBug();
        constructor(_position) {
            this.position = _position;
            // this.position.x = 50;
            // this.position.y = 50;
            this.speed = 0.005;
            // TASK ENUMERATION
            this.updateTask();
        }
        draw() {
            //Flügel 1
            (EndabgabeSoSe22.crc2.strokeStyle = "darkblue"), (EndabgabeSoSe22.crc2.fillStyle = "lightblue");
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(this.position.x, this.position.y - 25, 12, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.lineWidth = 1;
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Flügel 1
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(this.position.x + 10, this.position.y - 25, 12, 0, 2 * Math.PI),
                EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.lineWidth = 1;
            EndabgabeSoSe22.crc2.closePath();
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Körper
            EndabgabeSoSe22.crc2.fillStyle = "black";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(this.position.x, this.position.y - 3, 20, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.closePath();
            //Auge
            EndabgabeSoSe22.crc2.fillStyle = "white";
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.arc(this.position.x - 8, this.position.y - 5, 3, 0, 2 * Math.PI);
            EndabgabeSoSe22.crc2.fill();
            EndabgabeSoSe22.crc2.closePath();
            //Beine (Vorne)
            EndabgabeSoSe22.crc2.strokeStyle = "black";
            EndabgabeSoSe22.crc2.lineWidth = 3;
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x, this.position.y + 23);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-10, -15);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 15, this.position.y + 23);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(-10, -15);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //Beine (Hinten)
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x - 10, this.position.y + 12);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(0, 12);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
            //
            EndabgabeSoSe22.crc2.save();
            EndabgabeSoSe22.crc2.translate(this.position.x + 5, this.position.y + 12);
            EndabgabeSoSe22.crc2.beginPath();
            EndabgabeSoSe22.crc2.moveTo(0, 0);
            EndabgabeSoSe22.crc2.lineTo(0, 12);
            EndabgabeSoSe22.crc2.stroke();
            EndabgabeSoSe22.crc2.restore();
        }
        // Bug zu dieser Position x,y bewegen
        move() {
            if (!this.vegetable) {
                // nur wenn es eine target Gemüse gibt, ansonsten fliegen sie wie die normalen Bugs
                this.position.x += Math.random() * 5 - 4;
                this.position.y += Math.random() * 6 - 3;
                //wenn sie aus Bild fliegen
                for (let i = 0; i < 15; i++) {
                    if (this.position.x < 0) {
                        // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                        this.position.x = EndabgabeSoSe22.crc2.canvas.width;
                    }
                    if (this.position.y < 0) {
                        // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                        this.position.y = EndabgabeSoSe22.crc2.canvas.height;
                    }
                    if (this.position.y >= EndabgabeSoSe22.crc2.canvas.height) {
                        this.position.y = 0;
                    }
                }
                return;
            }
            //normaler weg der bugs
            let xDiff = this.xTarget - this.position.x;
            let yDiff = this.yTarget - this.position.y;
            this.position.x += xDiff * this.speed;
            this.position.y += yDiff * this.speed;
        }
        //bug an neuer position malen
        update() {
            this.move();
            this.draw();
            this.updateTask();
        }
        //Aufgabe des Bugs ändert sich
        updateTask() {
            switch (this.task) {
                case TASK.IDLE: // wenn du nichts zu tun hast
                    // suche volle Gemüse
                    this.setRandomVegetablePosition();
                    // Gemüse gefunden:
                    if (this.vegetable) {
                        this.task = TASK.FLY_TO_VEGETABLE; // vlt erst bei Move wenn volle Gemüse gefunden wurde
                    }
                    break;
                case TASK.FLY_TO_VEGETABLE:
                    // Bug bewegt sich zur Gemüse
                    this.move();
                    // wenn angekommen:
                    // Differenz
                    let xDiff = this.xTarget - this.position.x;
                    let yDiff = this.yTarget - this.position.y;
                    if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                        // wenn sie nah genug dran ist, zieht sie dem Gemüse Reife ab
                        this.task = TASK.ABSORB_NECTAR;
                    }
                    break;
                // case TASK.ABSORB_NECTAR:
                //     // Nectar -= 0.5 --> Gemüse aussaugen
                //     this.absorbNectar();
                //     // wenn voll:
                //     if (this.nectar > 2) { // wenn Nectar > 2 fliegt die Biene zum Bienenstock
                //         this.task = TASK.FLY_TO_BEHIVE;
                //     } else if (this.nectar <= 2) { // wenn Gemüse leer --> IDLE, solange bis Nectar >2 ist
                //         this.task = TASK.IDLE;
                //         this.flower = null; //Biene soll vergessen, dass sie auf Gemüse saß
                //         // this.direction = false;
                //     }
                //     break;
                // case TASK.FLY_TO_BEHIVE:
                //     // Biene fliegt zum Bienenstock
                //     this.setTargetBeehive();
                //     // am Bienenkorb angekommen:
                //     let xDiff2: number = this.xTarget - this.x;
                //     let yDiff2: number = this.yTarget - this.y;
                //     if (Math.abs(xDiff2) < 1 && Math.abs(yDiff2) < 1 && this.x > 1188) {
                //         this.task = TASK.EJECT_NECTAR;
                //     }
                //     break;
                // case TASK.EJECT_NECTAR:
                //     // Wenn am Bienenkorb angekommen: Lässt Nektar fallen
                //     this.ejectNectar();
                //     // sobald fertig:
                //     if (this.nectar < 1) {
                //         this.task = TASK.IDLE;
                //     }
            }
        }
        // Zufällige Position x,y aus dem Gemüsenarray
        setRandomVegetablePosition() {
            let r = Math.round(Math.random() * (EndabgabeSoSe22.vegetables.length - 1));
            if (EndabgabeSoSe22.vegetables.length > 0) {
                this.xTarget = EndabgabeSoSe22.vegetables[r].position.x + 10; // an dem Gemüse
                this.yTarget = EndabgabeSoSe22.vegetables[r].position.y;
            }
            this.vegetable = EndabgabeSoSe22.vegetables[r];
        }
    }
    EndabgabeSoSe22.Bug = Bug;
})(EndabgabeSoSe22 || (EndabgabeSoSe22 = {}));
//# sourceMappingURL=Bug.js.map