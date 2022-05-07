"use strict";
var Lektion10;
(function (Lektion10) {
    class Cloud extends Lektion10.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            Lektion10.crc2.save();
            Lektion10.crc2.translate(this.posX, this.posY);
            Lektion10.crc2.beginPath();
            Lektion10.crc2.moveTo(-115, -20);
            Lektion10.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Lektion10.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Lektion10.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Lektion10.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Lektion10.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Lektion10.crc2.lineWidth = 2;
            Lektion10.crc2.fillStyle = "white";
            Lektion10.crc2.fill();
            Lektion10.crc2.strokeStyle = "white";
            Lektion10.crc2.closePath();
            Lektion10.crc2.stroke();
            Lektion10.crc2.restore();
        }
        update() {
            if (this.posX > Lektion10.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Lektion10.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    Lektion10.Cloud = Cloud;
})(Lektion10 || (Lektion10 = {}));
//# sourceMappingURL=cloud.js.map