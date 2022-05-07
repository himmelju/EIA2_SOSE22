"use strict";
var Lektion10;
(function (Lektion10) {
    function drawBackground() {
        console.log("Background");
        let gradient = Lektion10.crc2.createLinearGradient(0, 0, 0, Lektion10.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Lektion10.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Lektion10.crc2.fillStyle = gradient;
        Lektion10.crc2.fillRect(0, 0, Lektion10.crc2.canvas.width, Lektion10.crc2.canvas.height);
    }
    Lektion10.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = Lektion10.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Lektion10.crc2.save();
        Lektion10.crc2.translate(_position.x, _position.y);
        Lektion10.crc2.fillStyle = gradient;
        Lektion10.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Lektion10.crc2.fill();
        Lektion10.crc2.restore();
    }
    Lektion10.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 120;
        let x = 0;
        Lektion10.crc2.save();
        Lektion10.crc2.translate(_position.x, _position.y);
        Lektion10.crc2.beginPath();
        Lektion10.crc2.moveTo(0, 0);
        Lektion10.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Lektion10.crc2.lineTo(x, y);
        } while (x < Lektion10.crc2.canvas.width);
        Lektion10.crc2.lineTo(x, 0);
        Lektion10.crc2.closePath();
        let gradient = Lektion10.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Lektion10.crc2.fillStyle = gradient;
        Lektion10.crc2.fill();
        Lektion10.crc2.restore();
    }
    Lektion10.drawMountains = drawMountains;
    function drawBeeHive() {
        Lektion10.crc2.save();
        Lektion10.crc2.translate(Lektion10.crc2.canvas.width / 2, Lektion10.crc2.canvas.height * 0.7);
        Lektion10.crc2.scale(8, 8);
        Lektion10.crc2.lineWidth = 0.5;
        Lektion10.crc2.strokeStyle = "#996633";
        Lektion10.crc2.beginPath();
        Lektion10.crc2.moveTo(0, 0);
        Lektion10.crc2.lineTo(-5.5, -1);
        Lektion10.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Lektion10.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Lektion10.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Lektion10.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Lektion10.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Lektion10.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Lektion10.crc2.fillStyle = "#FFB90F";
        Lektion10.crc2.fill();
        Lektion10.crc2.closePath();
        Lektion10.crc2.stroke();
        Lektion10.crc2.beginPath();
        Lektion10.crc2.arc(0, -3, 1.5, 0, 2 * Math.PI);
        Lektion10.crc2.fillStyle = "#663300";
        Lektion10.crc2.fill();
        Lektion10.crc2.closePath();
        Lektion10.crc2.restore();
    }
    Lektion10.drawBeeHive = drawBeeHive;
})(Lektion10 || (Lektion10 = {}));
//# sourceMappingURL=background.js.map