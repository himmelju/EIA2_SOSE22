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
    //Source: Jirkas Code (Asteroids/vector.ts)
    class Vector {
        constructor(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
        }
        scale(_factor) {
            this.X *= _factor;
            this.Y *= _factor;
        }
        add(_added) {
            this.X += _added.X;
            this.Y += _added.Y;
        }
        draw(color = "red", radius = 1) {
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(this.X, this.Y, radius, 0, 2 * Math.PI, false);
            Endabgabe.ctx.lineWidth = 1;
            Endabgabe.ctx.strokeStyle = color;
            Endabgabe.ctx.stroke();
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=vector.js.map