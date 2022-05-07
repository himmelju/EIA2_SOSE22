namespace GenerativeKunst {

    window.addEventListener("load", createCanvas);

    let crc2: CanvasRenderingContext2D;
    let size: number = 200;
    let step: number = 90;

    function drawArtDots(): void {
        for (let i: number = 0; i < 50; i++) {
            let purple: number = Math.floor(Math.random() * 200);
            let yellow: number = Math.floor(Math.random() * 400);
            let blue: number = Math.floor(Math.random() * 600);
            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1), Math.floor(Math.random() * (100) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "rgb(" + purple + ", " + yellow + "," + blue + ")";
            crc2.fill();
            
        }
    }

    function backgroundLines(x: number, y: number): void {
        for (var x: number = 0; x < size; x += step) {
            for (var y: number = 0; y < size; y += step) {

                let leftToRight: boolean = Math.random() >= 0.5;
                
                if (leftToRight) {
                    crc2.moveTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                    crc2.lineTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                } else {
                    crc2.moveTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                    crc2.lineTo(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1));
                }
                crc2.strokeStyle = "white";
                crc2.stroke();
                
            }    
        }
    }    

    function createCanvas(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.lineCap = "square";
        crc2.lineWidth = 3;
        drawArtDots();
        backgroundLines(0, 0);
    }
}