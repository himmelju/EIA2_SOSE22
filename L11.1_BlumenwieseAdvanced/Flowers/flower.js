"use strict";
var Nektar;
(function (Nektar) {
    class Flowers {
        drawRedFlowers(_x, _y) {
            Nektar.crc2.moveTo(_x, _y);
            Nektar.crc2.fillStyle = "darkgreen";
            Nektar.crc2.fillRect(_x, _y, 4, -30);
            //rote Blüte außen
            Nektar.crc2.fillStyle = "firebrick";
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(_x + 2, _y - 40, 15, 0, 2 * Math.PI);
            Nektar.crc2.closePath();
            Nektar.crc2.fill();
            //gelbe Blütenmitte
            Nektar.crc2.fillStyle = "gold";
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(_x + 2, _y - 40, 7, 0, 2 * Math.PI);
            Nektar.crc2.closePath();
            Nektar.crc2.fill();
            Nektar.crc2.restore();
        }
        drawOrangeFlowers(_x, _y) {
            Nektar.crc2.moveTo(_x, _y);
            Nektar.crc2.fillStyle = "darkgreen";
            Nektar.crc2.fillRect(_x, _y, 4, 30);
            //Blüten
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(_x + 2, _y - 10, 15, 0, Math.PI, false);
            Nektar.crc2.closePath();
            Nektar.crc2.lineWidth = 5;
            Nektar.crc2.fillStyle = "orangered";
            Nektar.crc2.fill();
        }
    }
    Nektar.Flowers = Flowers;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=flower.js.map