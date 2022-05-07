"use strict";
var Nektar;
(function (Nektar) {
    class Cloud extends Nektar.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            Nektar.crc2.save();
            Nektar.crc2.translate(this.posX, this.posY);
            Nektar.crc2.beginPath();
            Nektar.crc2.moveTo(-115, -20);
            Nektar.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Nektar.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Nektar.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Nektar.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Nektar.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Nektar.crc2.lineWidth = 2;
            Nektar.crc2.fillStyle = "white";
            Nektar.crc2.fill();
            Nektar.crc2.strokeStyle = "white";
            Nektar.crc2.closePath();
            Nektar.crc2.stroke();
            Nektar.crc2.restore();
        }
        update() {
            if (this.posX > Nektar.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Nektar.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    Nektar.Cloud = Cloud;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=cloud.js.map