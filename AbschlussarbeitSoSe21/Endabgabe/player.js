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
    class Player extends Endabgabe.Movable {
        constructor(name, _position, shotPower = 70, precision = 70, speed = 80, color = "red", team = 0, tricotNumber = 0) {
            super(new Endabgabe.Vector(_position.X, _position.Y));
            // default speed level which scales with speed
            this.speedLevel = 2;
            // speed 1 to 99
            this.speed = 80;
            // precision1 to 99
            this.precision = 20;
            // origin of the player
            this.origin = new Endabgabe.Vector(0, 0);
            // id of the player of identification
            this.id = Endabgabe.uuidv4();
            // action radius
            this.actionRadius = 30;
            // shot power
            this.shotPower = 100;
            this.shotPower = shotPower;
            this.precision = precision;
            this.speed = speed;
            this.color = color;
            this.team = team;
            this.active = true;
            this.tricotNumber = tricotNumber;
            this.radius = 2;
            this.setName(name);
            this.origin = new Endabgabe.Vector(_position.X, _position.Y);
        }
        //get tricot number
        getTricotNumber() {
            return this.tricotNumber;
        }
        //set tricot numner
        setTricotNumber(tricotNumber) {
            this.tricotNumber = tricotNumber;
        }
        //whether the player is on the field or not
        isActive() {
            return this.active;
        }
        //set player to be active or inactive
        setActive(active) {
            this.active = active;
        }
        getTeam() {
            return this.team;
        }
        setTeam(team) {
            this.team = team;
        }
        getColor() {
            return this.color;
        }
        setColor(color) {
            this.color = color;
        }
        setShotPower(power) {
            this.shotPower = power;
        }
        setPrecision(prec) {
            this.precision = prec;
        }
        getPrecision() {
            return this.precision;
        }
        getShotPower() {
            return this.shotPower;
        }
        getId() {
            return this.id;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        getActionRadius() {
            return this.actionRadius * Endabgabe.scale;
        }
        getOrigin() {
            return this.origin;
        }
        setOrigin(origin) {
            this.origin = origin;
        }
        highlight() {
            this.highlighted = true;
        }
        dehighlight() {
            this.highlighted = false;
        }
        isHighlighted() {
            return this.highlighted;
        }
        draw(options = {
            showActionRadius: true,
            showPlayerOrigin: true
        }) {
            Endabgabe.ctx.save();
            // draw player center
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(this.position.X, this.position.Y, this.isHighlighted() ? this.getRadius() * 1.5 : this.getRadius(), 0, 2 * Math.PI, false);
            Endabgabe.ctx.fillStyle = this.color;
            Endabgabe.ctx.fill();
            Endabgabe.ctx.lineWidth = this.isHighlighted() ? 2 : 1;
            Endabgabe.ctx.strokeStyle = "#003300";
            Endabgabe.ctx.stroke();
            Endabgabe.ctx.textBaseline = "middle";
            Endabgabe.ctx.textAlign = "center";
            Endabgabe.ctx.fillStyle = "white";
            Endabgabe.ctx.fillText(this.getTricotNumber().toString(), this.position.X, this.position.Y);
            // draw action radius
            if (typeof options.showActionRadius !== "boolean" || options.showActionRadius) {
                Endabgabe.ctx.beginPath();
                Endabgabe.ctx.arc(this.position.X, this.position.Y, this.getActionRadius(), 0, 2 * Math.PI, false);
                Endabgabe.ctx.lineWidth = 1;
                Endabgabe.ctx.strokeStyle = "#6D6D6D";
                Endabgabe.ctx.stroke();
            }
            // draw line to origin
            if (typeof options.showPlayerOrigin !== "boolean" || options.showPlayerOrigin) {
                Endabgabe.ctx.beginPath();
                Endabgabe.ctx.moveTo(this.position.X, this.position.Y);
                Endabgabe.ctx.lineTo(this.getOrigin().X, this.getOrigin().Y);
                Endabgabe.ctx.lineWidth = 1;
                Endabgabe.ctx.strokeStyle = "#green";
                Endabgabe.ctx.stroke();
            }
            Endabgabe.ctx.restore();
        }
        getPosition() {
            return this.position;
        }
    }
    Endabgabe.Player = Player;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=player.js.map