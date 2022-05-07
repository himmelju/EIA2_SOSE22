"use strict";
var Nektar;
(function (Nektar) {
    function drawBackground() {
        console.log("Background");
        let gradient = Nektar.crc2.createLinearGradient(0, 0, 0, Nektar.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Nektar.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Nektar.crc2.fillStyle = gradient;
        Nektar.crc2.fillRect(0, 0, Nektar.crc2.canvas.width, Nektar.crc2.canvas.height);
    }
    Nektar.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = Nektar.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Nektar.crc2.save();
        Nektar.crc2.translate(_position.x, _position.y);
        Nektar.crc2.fillStyle = gradient;
        Nektar.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Nektar.crc2.fill();
        Nektar.crc2.restore();
    }
    Nektar.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 120;
        let x = 0;
        Nektar.crc2.save();
        Nektar.crc2.translate(_position.x, _position.y);
        Nektar.crc2.beginPath();
        Nektar.crc2.moveTo(0, 0);
        Nektar.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Nektar.crc2.lineTo(x, y);
        } while (x < Nektar.crc2.canvas.width);
        Nektar.crc2.lineTo(x, 0);
        Nektar.crc2.closePath();
        let gradient = Nektar.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Nektar.crc2.fillStyle = gradient;
        Nektar.crc2.fill();
        Nektar.crc2.restore();
    }
    Nektar.drawMountains = drawMountains;
    function drawBeeHive() {
        Nektar.crc2.save();
        Nektar.crc2.translate(Nektar.crc2.canvas.width / 2, Nektar.crc2.canvas.height * 0.7);
        Nektar.crc2.scale(8, 8);
        Nektar.crc2.lineWidth = 0.5;
        Nektar.crc2.strokeStyle = "#996633";
        Nektar.crc2.beginPath();
        Nektar.crc2.moveTo(0, 0);
        Nektar.crc2.lineTo(-5.5, -1);
        Nektar.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Nektar.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Nektar.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Nektar.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Nektar.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Nektar.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Nektar.crc2.fillStyle = "#FFB90F";
        Nektar.crc2.fill();
        Nektar.crc2.closePath();
        Nektar.crc2.stroke();
        Nektar.crc2.beginPath();
        Nektar.crc2.arc(0, -3, 1.5, 0, 2 * Math.PI);
        Nektar.crc2.fillStyle = "#663300";
        Nektar.crc2.fill();
        Nektar.crc2.closePath();
        Nektar.crc2.restore();
    }
    Nektar.drawBeeHive = drawBeeHive;
    function drawNektarProgress() {
        Nektar.crc2.save();
        Nektar.crc2.translate(Nektar.crc2.canvas.width, Nektar.crc2.canvas.height);
        let amount = 0; // use it for Amount loaded color
        let startAmount = 0; //number for Amount loaded
        let diff = (amount / 100) * Math.PI * 2;
        Nektar.crc2.beginPath();
        Nektar.crc2.arc(-100, -500, 50, 0, 2 * Math.PI, false);
        Nektar.crc2.fillStyle = "yellow"; // for color of circle
        Nektar.crc2.fill(); // fill function
        Nektar.crc2.strokeStyle = "orange"; // for border color
        Nektar.crc2.stroke(); // Stroke function
        Nektar.crc2.fillStyle = "black"; // For text color
        Nektar.crc2.strokeStyle = "yellow"; //For Stroke Color
        Nektar.crc2.textAlign = "center"; //you know already for aligning text in center;
        Nektar.crc2.lineWidth = 15; // for Stroke width
        Nektar.crc2.beginPath(); // starting circle drawing function
        Nektar.crc2.arc(-100, -500, 50, startAmount, diff + startAmount, false);
        Nektar.crc2.stroke(); // Stroke function
        Nektar.crc2.fillText(startAmount + "% Nektar", -100 + 2, -500 + 6); //text value & text position
        function start() {
            setInterval(updateNectar, 1000);
        }
        function updateNectar() {
            if (startAmount < 100) {
                startAmount++;
                amount++;
            }
        }
        start();
    }
    Nektar.drawNektarProgress = drawNektarProgress;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=background.js.map