"use strict";
/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    class Ball extends Endabgabe.Movable {
        constructor(_origin) {
            super(_origin);
            this.speed = 0;
            this.speedLevel = 10;
            this.slowDown = true;
            this.radius = 1.5;
        }
        draw() {
            Endabgabe.ctx.save();
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(this.position.X, this.position.Y, this.getRadius(), 0, 2 * Math.PI, false);
            Endabgabe.ctx.fillStyle = "white";
            Endabgabe.ctx.fill();
            Endabgabe.ctx.lineWidth = 1;
            Endabgabe.ctx.strokeStyle = "black";
            Endabgabe.ctx.stroke();
            Endabgabe.ctx.restore();
        }
    }
    Endabgabe.Ball = Ball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ball.js.map