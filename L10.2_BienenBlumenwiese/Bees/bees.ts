namespace Lektion10 {

    export class Bees extends Moveable {

        randomScale: number;
        randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
        counter: number = 0;

        constructor( _position: Vector, _velocity: Vector, _randomScale: number) {
            super(_position, _velocity);
        }

        draw(): void {
           
            crc2.save();
            crc2.translate(this.posX, this.posY);

            crc2.scale(this.randomScale, this.randomScale);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "gold";
            crc2.beginPath();
            crc2.arc(0, 0, 8 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 8 , 0, Math.PI * 2, false);
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(-5, -11, 5 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(5, -11, 5 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(-3, 7);
            crc2.lineTo(- 3, - 7);
            crc2.moveTo(0, 8);
            crc2.lineTo(0,  - 8);
            crc2.moveTo(3, 7);
            crc2.lineTo(3, - 7);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.restore();


        }

        update(): void {

            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }

            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter ++;
        }
    }

}