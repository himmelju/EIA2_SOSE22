"use strict";
var Nektar;
(function (Nektar) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    Nektar.Moveable = Moveable;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=moveable.js.map