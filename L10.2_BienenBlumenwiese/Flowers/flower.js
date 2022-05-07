"use strict";
var Lektion10;
(function (Lektion10) {
    class Flowers {
        drawRedFlowers(_x, _y) {
            Lektion10.crc2.moveTo(_x, _y);
            Lektion10.crc2.fillStyle = "darkgreen";
            Lektion10.crc2.fillRect(_x, _y, 4, -30);
            //rote Blüte außen
            Lektion10.crc2.fillStyle = "firebrick";
            Lektion10.crc2.beginPath();
            Lektion10.crc2.arc(_x + 2, _y - 40, 15, 0, 2 * Math.PI);
            Lektion10.crc2.closePath();
            Lektion10.crc2.fill();
            //gelbe Blütenmitte
            Lektion10.crc2.fillStyle = "gold";
            Lektion10.crc2.beginPath();
            Lektion10.crc2.arc(_x + 2, _y - 40, 7, 0, 2 * Math.PI);
            Lektion10.crc2.closePath();
            Lektion10.crc2.fill();
            Lektion10.crc2.restore();
        }
        drawOrangeFlowers(_x, _y) {
            Lektion10.crc2.moveTo(_x, _y);
            Lektion10.crc2.fillStyle = "darkgreen";
            Lektion10.crc2.fillRect(_x, _y, 4, 30);
            //Blüten
            Lektion10.crc2.beginPath();
            Lektion10.crc2.arc(_x + 2, _y - 10, 15, 0, Math.PI, false);
            Lektion10.crc2.closePath();
            Lektion10.crc2.lineWidth = 5;
            Lektion10.crc2.fillStyle = "orangered";
            Lektion10.crc2.fill();
        }
    }
    Lektion10.Flowers = Flowers;
})(Lektion10 || (Lektion10 = {}));
//# sourceMappingURL=flower.js.map