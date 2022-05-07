"use strict";
var Bienen;
(function (Bienen) {
    class Bees {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScale = _randomScale;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            Bienen.crc2.save();
            Bienen.crc2.translate(this.posX, this.posY);
            Bienen.crc2.scale(this.randomScale, this.randomScale);
            Bienen.crc2.lineWidth = 2;
            Bienen.crc2.strokeStyle = "black";
            Bienen.crc2.fillStyle = "gold";
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Bienen.crc2.fill();
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            Bienen.crc2.fill();
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            Bienen.crc2.fill();
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.moveTo(-3, 7);
            Bienen.crc2.lineTo(-3, -7);
            Bienen.crc2.moveTo(0, 8);
            Bienen.crc2.lineTo(0, -8);
            Bienen.crc2.moveTo(3, 7);
            Bienen.crc2.lineTo(3, -7);
            Bienen.crc2.strokeStyle = "black";
            Bienen.crc2.stroke();
            Bienen.crc2.lineWidth = 1;
            Bienen.crc2.closePath();
            Bienen.crc2.restore();
        }
        update() {
            if (this.posX > Bienen.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Bienen.crc2.canvas.height || this.posY < Bienen.crc2.canvas.height * 0.40) {
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
            this.draw();
        }
    }
    Bienen.Bees = Bees;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=bees.js.map