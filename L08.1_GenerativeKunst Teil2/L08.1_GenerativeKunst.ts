namespace GenerativeKunst {

    window.addEventListener("load", createCanvas);

    let crc2: CanvasRenderingContext2D;
    let size: number = 600;
    let step: number = 100;

    const reloadButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("reload");
    
    function reload(): void {
        location.reload();
    }

    reloadButton.addEventListener("click", reload, false);

    function Lines(x: number, y: number): void {
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
    
    function dots(): void {
        for (let i: number = 0; i < 50; i++) {
            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (2000) + 1), Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (50) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.fill();
            
        }
    }

    function createCanvas(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        canvas.width = 1200;
        canvas.height = 800;
        crc2.lineCap = "square";
        crc2.lineWidth = 3;
        Lines(0, 0);
        dots();
    }


}