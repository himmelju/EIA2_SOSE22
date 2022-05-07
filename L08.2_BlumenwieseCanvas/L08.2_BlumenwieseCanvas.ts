namespace BlumenwieseCanvas {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 125}, {x: 250, y: 75});
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        drawRedFlowers();
        drawOrangeFlowers();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 100;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 120;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawRedFlowers(): void {
        console.log("RedFlowers"); 

        for (let i: number = 0; i < 7; i++) {
            let x: number = Math.random() * 900;
            let y: number = Math.random() * 200;
            crc2.save();
            crc2.translate(x, y);
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 5;
            crc2.fillStyle = "darkgreen";
            crc2.beginPath();
            crc2.moveTo(50, 540);
            crc2.lineTo(52, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(67, 575, 6, 32, 10, 30, 50);
            crc2.closePath();
            crc2.fill();
            //rote Blüte außen
            crc2.fillStyle = "firebrick";
            crc2.beginPath();
            crc2.arc(45, 520, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //gelbe Blütenmitte
            crc2.fillStyle = "gold";
            crc2.beginPath();
            crc2.arc(45, 520, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore(); 
        }
    }

    function drawOrangeFlowers(): void {
        console.log("OrangeFlowers");
        
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * 400;
            let y: number = Math.random() * 10;

            crc2.save();
            crc2.translate(x, y);
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 5;
            crc2.fillStyle = "darkgreen";
            crc2.beginPath();
            crc2.moveTo(100, 500);
            crc2.lineTo(120, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(135, 575, 6, 32, 10, 30, 50);
            crc2.closePath();
            crc2.fill();
            //Orange Blume 
            crc2.beginPath();
            crc2.arc(100, 502, 30, -0.5, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "orangered";
            crc2.fill();
            
        }
    }
    
}