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
    class Movable {
        constructor(_position) {
            this.position = _position;
            this.speed = 1;
            this.speedLevel = 1;
            this.slowDown = false;
            this.radius = 2;
        }
        setColor(color) {
            this.color = color;
        }
        getRadius() {
            return this.radius * Endabgabe.scale;
        }
        setRadius(radius) {
            this.radius = radius;
        }
        setTarget(target) {
            this.target = target;
        }
        getTarget() {
            return this.target;
        }
        getPosition() {
            return this.position;
        }
        setPosition(position) {
            this.position = position;
        }
        getSpeed() {
            return this.speed;
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        //moves object to target
        move(target) {
            if (!target) {
                return;
            }
            // calc diff vector
            const diffVectr = new Endabgabe.Vector(target.X - this.position.X, target.Y - this.position.Y);
            // calc length of diff vector and return if zero
            const vectorLength = Math.sqrt(Math.pow(diffVectr.X, 2) + Math.pow(diffVectr.Y, 2));
            if (vectorLength == 0) {
                return;
            }
            // calc speed by movable properties
            const speedLevel = this.speedLevel * (this.speed / 100);
            // apply slow down if activated (Ball)
            const speed = this.slowDown ? speedLevel * (vectorLength / 100) : speedLevel;
            // calc scaling
            const scaleFactor = speed / vectorLength;
            // apply scaling to diff
            diffVectr.scale(scaleFactor);
            // add diff to current pos
            this.position.add(diffVectr);
        }
    }
    Endabgabe.Movable = Movable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map