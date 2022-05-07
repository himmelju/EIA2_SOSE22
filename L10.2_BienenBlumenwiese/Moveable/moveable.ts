namespace Lektion10 {
    
    export class Moveable {
        posX: number;
        posY: number;
    
        velocityX: number;
        velocityY: number;
    
        constructor(_position: Vector, _velocity: Vector) {
              this.posX = _position.x; 
              this.posY = _position.y; 
    
              this.velocityX = _velocity.x;
              this.velocityY = _velocity.y;
        }
    
        draw(): void {
            //Draw
        }
    
        update(): void {
            //Update
        }
    }
    
    }