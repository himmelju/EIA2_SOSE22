"use strict";
var Bienen;
(function (Bienen) {
    class Cloud {
        constructor(_position) {
            this.velocityX = 0.5;
            this.velocityY = 0.1;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        draw() {
            Bienen.crc2.save();
            Bienen.crc2.translate(this.posX, this.posY);
            Bienen.crc2.beginPath();
            Bienen.crc2.moveTo(-115, -20);
            Bienen.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Bienen.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Bienen.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Bienen.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Bienen.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Bienen.crc2.lineWidth = 2;
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.fill();
            Bienen.crc2.strokeStyle = "white";
            Bienen.crc2.closePath();
            Bienen.crc2.stroke();
            Bienen.crc2.restore();
        }
        update() {
            if (this.posX > Bienen.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Bienen.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    Bienen.Cloud = Cloud;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=cloud.js.map