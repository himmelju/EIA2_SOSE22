"use strict";
var Bienen;
(function (Bienen) {
    class Flowers {
        drawRedFlowers(_x, _y) {
            Bienen.crc2.moveTo(_x, _y);
            Bienen.crc2.fillStyle = "darkgreen";
            Bienen.crc2.fillRect(_x, _y, 4, -30);
            //rote Blüte außen
            Bienen.crc2.fillStyle = "firebrick";
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(_x + 2, _y - 40, 15, 0, 2 * Math.PI);
            Bienen.crc2.closePath();
            Bienen.crc2.fill();
            //gelbe Blütenmitte
            Bienen.crc2.fillStyle = "gold";
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(_x + 2, _y - 40, 7, 0, 2 * Math.PI);
            Bienen.crc2.closePath();
            Bienen.crc2.fill();
            Bienen.crc2.restore();
        }
        drawOrangeFlowers(_x, _y) {
            Bienen.crc2.moveTo(_x, _y);
            Bienen.crc2.fillStyle = "darkgreen";
            Bienen.crc2.fillRect(_x, _y, 4, 30);
            //Blüten
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(_x + 2, _y - 10, 15, 0, Math.PI, false);
            Bienen.crc2.closePath();
            Bienen.crc2.lineWidth = 5;
            Bienen.crc2.fillStyle = "orangered";
            Bienen.crc2.fill();
        }
    }
    Bienen.Flowers = Flowers;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=flower.js.map