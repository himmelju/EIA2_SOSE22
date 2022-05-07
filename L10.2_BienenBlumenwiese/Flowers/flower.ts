namespace Lektion10 {

    export class Flowers {

        drawRedFlowers(_x: number, _y: number): void {
            
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 4, -30);

            //rote Blüte außen
            crc2.fillStyle = "firebrick";
            crc2.beginPath();
            crc2.arc(_x + 2, _y - 40, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

          
            //gelbe Blütenmitte
            crc2.fillStyle = "gold";
            crc2.beginPath();
            crc2.arc(_x + 2, _y - 40, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore(); 
        }

        drawOrangeFlowers(_x: number, _y: number): void {

            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 4, 30);
      
            //Blüten
            crc2.beginPath();
            crc2.arc(_x + 2, _y - 10, 15, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "orangered";
            crc2.fill();

        }
    }
}