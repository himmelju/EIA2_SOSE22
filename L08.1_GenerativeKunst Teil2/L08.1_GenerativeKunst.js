"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", createCanvas);
    let crc2;
    let size = 600;
    let step = 100;
    const reloadButton = document.querySelector("reload");
    function reload() {
        location.reload();
    }
    reloadButton.addEventListener("click", reload, false);
    function Lines(x, y) {
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
    function dots() {
        for (let i = 0; i < 50; i++) {
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (2000) + 1), Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (50) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
        }
    }
    function createCanvas() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = 1200;
        canvas.height = 800;
        crc2.lineCap = "square";
        crc2.lineWidth = 3;
        Lines(0, 0);
        dots();
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=L08.1_GenerativeKunst.js.map