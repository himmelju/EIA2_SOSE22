"use strict";
var Bienen;
(function (Bienen) {
    function drawBackground() {
        console.log("Background");
        let gradient = Bienen.crc2.createLinearGradient(0, 0, 0, Bienen.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Bienen.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.fillRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
    }
    Bienen.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = Bienen.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Bienen.crc2.fill();
        Bienen.crc2.restore();
    }
    Bienen.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 120;
        let x = 0;
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(0, 0);
        Bienen.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Bienen.crc2.lineTo(x, y);
        } while (x < Bienen.crc2.canvas.width);
        Bienen.crc2.lineTo(x, 0);
        Bienen.crc2.closePath();
        let gradient = Bienen.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.fill();
        Bienen.crc2.restore();
    }
    Bienen.drawMountains = drawMountains;
    function drawBeeHive() {
        Bienen.crc2.save();
        Bienen.crc2.translate(Bienen.crc2.canvas.width / 2, Bienen.crc2.canvas.height * 0.7);
        Bienen.crc2.scale(8, 8);
        Bienen.crc2.lineWidth = 0.5;
        Bienen.crc2.strokeStyle = "#996633";
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(0, 0);
        Bienen.crc2.lineTo(-5.5, -1);
        Bienen.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Bienen.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Bienen.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Bienen.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Bienen.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Bienen.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Bienen.crc2.fillStyle = "#FFB90F";
        Bienen.crc2.fill();
        Bienen.crc2.closePath();
        Bienen.crc2.stroke();
        Bienen.crc2.beginPath();
        Bienen.crc2.arc(0, -3, 1.5, 0, 2 * Math.PI);
        Bienen.crc2.fillStyle = "#663300";
        Bienen.crc2.fill();
        Bienen.crc2.closePath();
        Bienen.crc2.restore();
    }
    Bienen.drawBeeHive = drawBeeHive;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=background.js.map