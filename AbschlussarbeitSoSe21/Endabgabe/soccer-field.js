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
    class SoccerField {
        constructor() {
            // goal width
            this.goalWidth = 7.32 * Endabgabe.scale;
            // width of goal area 
            this.goalArea = 5.50 * Endabgabe.scale;
            // width penalty area
            this.penaltyArea = 11 * Endabgabe.scale;
            // width of lines
            this.lineWidth = 2;
            this.setWidth(100);
            this.setHeight(75);
            this.setPadding(10);
        }
        //whether the ball is in bounds or not
        isOutOfBounds(ball) {
            if (ball.getPosition().X < this.getPadding()) {
                return true;
            }
            if (ball.getPosition().X > this.getPadding() + this.getWidth()) {
                return true;
            }
            if (ball.getPosition().Y < this.getPadding()) {
                return true;
            }
            if (ball.getPosition().Y > this.getPadding() + this.getHeight()) {
                return true;
            }
            return false;
        }
        //whether the ball is in home goal or not
        isHomeGoal(ball) {
            if (ball.getPosition().X < this.getPadding() &&
                ball.getPosition().Y > this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2) &&
                ball.getPosition().Y < this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2)) {
                return true;
            }
            return false;
        }
        //whether the ball is in away goal or not
        isAwayGoal(ball) {
            if (ball.getPosition().X > this.getPadding() + this.getWidth() &&
                ball.getPosition().Y > this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2) &&
                ball.getPosition().Y < this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2)) {
                return true;
            }
            return false;
        }
        drawCorner(x, y, start, arc) {
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(x, y, 5 * Endabgabe.scale, Endabgabe.degreesToRadians(start), arc * Math.PI, false);
            Endabgabe.ctx.lineWidth = this.lineWidth;
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
        }
        //draws soccer field
        draw() {
            // default stuff
            Endabgabe.ctx.save();
            Endabgabe.ctx.fillStyle = "#1F6000";
            Endabgabe.ctx.fillRect(0, 0, Endabgabe.ctx.canvas.width, Endabgabe.ctx.canvas.height);
            // draw grass samples
            const segments = 16;
            for (let i = 0; i < segments; i++) {
                Endabgabe.ctx.beginPath();
                Endabgabe.ctx.rect(this.getPadding() + ((this.getWidth() / segments) * i), this.getPadding(), (this.getWidth() / segments), this.getHeight());
                Endabgabe.ctx.fillStyle = i % 2 == 0 ? "#84BD3B" : "#629D25";
                Endabgabe.ctx.fill();
            }
            // draw outline
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.moveTo(this.getPadding(), this.getPadding());
            Endabgabe.ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding());
            Endabgabe.ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding() + this.getHeight());
            Endabgabe.ctx.lineTo(this.getPadding(), this.getPadding() + this.getHeight());
            Endabgabe.ctx.lineTo(this.getPadding(), this.getPadding());
            // mid line
            Endabgabe.ctx.moveTo(this.getPadding() + (this.getWidth() / 2), this.getPadding());
            Endabgabe.ctx.lineTo(this.getPadding() + (this.getWidth() / 2), this.getPadding() + this.getHeight());
            Endabgabe.ctx.lineWidth = this.lineWidth;
            Endabgabe.ctx.strokeStyle = "#ffffff";
            Endabgabe.ctx.stroke();
            // draw left upper corner
            this.drawCorner(this.getPadding(), this.getPadding(), 0, .5);
            // draw right lower corner
            this.drawCorner(this.getPadding() + this.getWidth(), this.getPadding() + this.getHeight(), 180, 1.5);
            // draw upper right corner
            this.drawCorner(this.getPadding() + this.getWidth(), this.getPadding(), 90, 1);
            // draw lower left corner
            this.drawCorner(this.getPadding(), this.getPadding() + this.getHeight(), 270, 0);
            // goal area left
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.rect(this.getPadding(), (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea), this.goalArea, this.goalArea * 2 + this.goalWidth);
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
            // penalty area left
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.rect(this.getPadding(), (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea + this.penaltyArea), this.goalArea + this.penaltyArea, this.goalArea * 2 + this.penaltyArea * 2 + this.goalWidth);
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
            // goal area right
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.rect(this.getPadding() + this.getWidth() - this.goalArea, (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea), this.goalArea, this.goalArea * 2 + this.goalWidth);
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
            // penalty area right
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.rect(this.getPadding() + this.getWidth() - this.goalArea - this.penaltyArea, (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea + this.penaltyArea), this.goalArea + this.penaltyArea, this.goalArea * 2 + this.penaltyArea * 2 + this.goalWidth);
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
            // ctx.beginPath();
            this.drawCorner(this.getPadding() + this.getWidth() - this.goalArea - this.penaltyArea, this.getPadding() + this.getHeight() / 2, 90, 1.5);
            this.drawCorner(this.getPadding() + this.goalArea + this.penaltyArea, this.getPadding() + this.getHeight() / 2, 270, 0.5);
            // left goal
            Endabgabe.ctx.moveTo(this.getPadding(), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding() - (5 * Endabgabe.scale), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding() - (5 * Endabgabe.scale), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding(), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            Endabgabe.ctx.stroke();
            // right goal
            Endabgabe.ctx.moveTo(this.getPadding() + this.getWidth(), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding() + this.getWidth() + (5 * Endabgabe.scale), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding() + this.getWidth() + (5 * Endabgabe.scale), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            Endabgabe.ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            Endabgabe.ctx.stroke();
            // middle circle
            const middleRadius = 9.15 * Endabgabe.scale;
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(this.getPadding() + (this.getWidth() / 2), this.getPadding() + (this.getHeight() / 2), middleRadius, 0, 2 * Math.PI, false);
            Endabgabe.ctx.lineWidth = this.lineWidth;
            Endabgabe.ctx.strokeStyle = "white";
            Endabgabe.ctx.stroke();
            Endabgabe.ctx.restore();
        }
        //set padding of the field
        setPadding(padding) {
            this.padding = padding;
        }
        //get padding of the field
        getPadding() {
            return this.padding * Endabgabe.scale;
        }
        //get width of the field
        getWidth() {
            return this.width * Endabgabe.scale;
        }
        //set width of the field
        setWidth(width) {
            this.width = width;
        }
        //get height of the field
        getHeight() {
            return this.height * Endabgabe.scale;
        }
        //set height of the field
        setHeight(height) {
            this.height = height;
        }
    }
    Endabgabe.SoccerField = SoccerField;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=soccer-field.js.map