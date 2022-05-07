"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", createCanvas);
    let crc2;
    let size = 200;
    let step = 90;
    function drawArtDots() {
        for (let i = 0; i < 50; i++) {
            let purple = Math.floor(Math.random() * 200);
            let yellow = Math.floor(Math.random() * 400);
            let blue = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1), Math.floor(Math.random() * (100) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "rgb(" + purple + ", " + yellow + "," + blue + ")";
            crc2.fill();
        }
    }
    function backgroundLines(x, y) {
        for (var x = 0; x < size; x += step) {
            for (var y = 0; y < size; y += step) {
                let leftToRight = Math.random() >= 0.5;
                if (leftToRight) {
                    crc2.moveTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                    crc2.lineTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                }
                else {
                    crc2.moveTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                    crc2.lineTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                }
                crc2.strokeStyle = "white";
                crc2.stroke();
            }
        }
    }
    function createCanvas() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.lineCap = "square";
        crc2.lineWidth = 3;
        drawArtDots();
        backgroundLines(0, 0);
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=L08.1_GenerativeKunst.js.map