namespace   Nektar {
    export class Cloud extends Moveable {

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);
            crc2.beginPath();
            crc2.moveTo(-115, -20);
            crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);

            crc2.lineWidth = 2;
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.closePath();
            crc2.stroke();

            crc2.restore();
            
        }

        public update(): void {
           
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
}