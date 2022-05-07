"use strict";
var Bienen;
(function (Bienen) {
    Bienen.golden = 0.62;
    let bienen = [];
    let flowers = [];
    let clouds = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Bienen.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBackground();
        drawFlowers();
        multipleFlowers();
        createCloud();
        createBees(10);
        imageData = Bienen.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Bienen.crc2.canvas.height * Bienen.golden;
        Bienen.drawBackground();
        Bienen.drawSun({ x: Bienen.crc2.canvas.width / 2, y: Bienen.crc2.canvas.height * 0.15 });
        Bienen.drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        Bienen.drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        Bienen.drawBeeHive();
        multipleFlowers();
        drawFlowers();
    }
    function multipleFlowers() {
        for (let i = 0; i < 10; i++) {
            let redFlower = new Bienen.Flowers();
            flowers.push(redFlower);
        }
        for (let i = 0; i < 10; i++) {
            let orangeFlower = new Bienen.Flowers();
            flowers.push(orangeFlower);
        }
    }
    function drawFlowers() {
        for (let redFlower of flowers) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            redFlower.drawRedFlowers(randomX + 280, randomY + 420);
        }
        for (let orangeFlower of flowers) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            orangeFlower.drawOrangeFlowers(randomX + 100, randomY + 420);
        }
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bienen.push(new Bienen.Bees({ x: Bienen.crc2.canvas.width / 2, y: Bienen.crc2.canvas.height * Bienen.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        clouds.push(new Bienen.Cloud({ x: Bienen.crc2.canvas.width * .10, y: Bienen.crc2.canvas.height * .10 }));
        clouds.push(new Bienen.Cloud({ x: Bienen.crc2.canvas.width * .5, y: Bienen.crc2.canvas.height * .05 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Bienen.crc2.clearRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
        Bienen.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bienen.length; index++) {
            bienen[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(Bienen || (Bienen = {}));
//# sourceMappingURL=main.js.map