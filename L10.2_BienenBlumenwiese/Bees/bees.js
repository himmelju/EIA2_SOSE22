"use strict";
var Lektion10;
(function (Lektion10) {
    class Bees extends Lektion10.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            Lektion10.crc2.save();
            Lektion10.crc2.translate(this.posX, this.posY);
            Lektion10.crc2.scale(this.randomScale, this.randomScale);
            Lektion10.crc2.lineWidth = 2;
            Lektion10.crc2.strokeStyle = "black";
            Lektion10.crc2.fillStyle = "gold";
            Lektion10.crc2.beginPath();
            Lektion10.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Lektion10.crc2.fill();
            Lektion10.crc2.beginPath();
            Lektion10.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Lektion10.crc2.stroke();
            Lektion10.crc2.beginPath();
            Lektion10.crc2.fillStyle = "white";
            Lektion10.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            Lektion10.crc2.fill();
            Lektion10.crc2.stroke();
            Lektion10.crc2.beginPath();
            Lektion10.crc2.fillStyle = "white";
            Lektion10.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            Lektion10.crc2.fill();
            Lektion10.crc2.stroke();
            Lektion10.crc2.beginPath();
            Lektion10.crc2.moveTo(-3, 7);
            Lektion10.crc2.lineTo(-3, -7);
            Lektion10.crc2.moveTo(0, 8);
            Lektion10.crc2.lineTo(0, -8);
            Lektion10.crc2.moveTo(3, 7);
            Lektion10.crc2.lineTo(3, -7);
            Lektion10.crc2.strokeStyle = "black";
            Lektion10.crc2.stroke();
            Lektion10.crc2.lineWidth = 1;
            Lektion10.crc2.closePath();
            Lektion10.crc2.restore();
        }
        update() {
            if (this.posX > Lektion10.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Lektion10.crc2.canvas.height || this.posY < Lektion10.crc2.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
        }
    }
    Lektion10.Bees = Bees;
})(Lektion10 || (Lektion10 = {}));
//# sourceMappingURL=bees.js.map