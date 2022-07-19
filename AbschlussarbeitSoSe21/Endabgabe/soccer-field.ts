/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export class SoccerField {
        // padding of the field
        private padding: number;

        // width of the field
        private width: number;

        // height of the field
        private height: number;

        // goal width
        private goalWidth: number = 7.32 * scale;

        // width of goal area 
        private goalArea: number = 5.50 * scale;

        // width penalty area
        private penaltyArea: number = 11 * scale;

        // width of lines
        private lineWidth: number = 2;

        constructor() {
            this.setWidth(100);
            this.setHeight(75);
            this.setPadding(10);
        }

        //whether the ball is in bounds or not
        isOutOfBounds(ball: Ball): boolean {
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
        isHomeGoal(ball: Ball): boolean {
            if (ball.getPosition().X < this.getPadding() &&
                ball.getPosition().Y > this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2) &&
                ball.getPosition().Y < this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2)) {
                return true;
            }
            return false;
        }

        //whether the ball is in away goal or not
        isAwayGoal(ball: Ball): boolean {
            if (ball.getPosition().X > this.getPadding() + this.getWidth() &&
                ball.getPosition().Y > this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2) &&
                ball.getPosition().Y < this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2)) {
                return true;
            }
            return false;
        }

        drawCorner(x: number, y: number, start: number, arc: number): void {
            ctx.beginPath();
            ctx.arc(x, y, 5 * scale, degreesToRadians(start), arc * Math.PI, false);
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = "white";
            ctx.stroke();
        }


        //draws soccer field
        draw(): void {
            // default stuff
            ctx.save();
            ctx.fillStyle = "#1F6000";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


            // draw grass samples
            const segments: number = 16;
            for (let i: number = 0; i < segments; i++) {
                ctx.beginPath();
                ctx.rect(this.getPadding() + ((this.getWidth() / segments) * i),
                         this.getPadding(),
                         (this.getWidth() / segments),
                         this.getHeight()
                );
                ctx.fillStyle = i % 2 == 0 ? "#84BD3B" : "#629D25";
                ctx.fill();
            }

            // draw outline
            ctx.beginPath();
            ctx.moveTo(this.getPadding(), this.getPadding());
            ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding());
            ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding() + this.getHeight());
            ctx.lineTo(this.getPadding(), this.getPadding() + this.getHeight());
            ctx.lineTo(this.getPadding(), this.getPadding());

            // mid line
            ctx.moveTo(this.getPadding() + (this.getWidth() / 2), this.getPadding());
            ctx.lineTo(this.getPadding() + (this.getWidth() / 2), this.getPadding() + this.getHeight());
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();

            // draw left upper corner
            this.drawCorner(this.getPadding(), this.getPadding(), 0, .5);

            // draw right lower corner
            this.drawCorner(this.getPadding() + this.getWidth(), this.getPadding() + this.getHeight(), 180, 1.5);

            // draw upper right corner
            this.drawCorner(this.getPadding() + this.getWidth(), this.getPadding(), 90, 1);

            // draw lower left corner
            this.drawCorner(this.getPadding(), this.getPadding() + this.getHeight(), 270, 0);

            // goal area left
            ctx.beginPath();
            ctx.rect(
                this.getPadding(),
                (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea),
                this.goalArea,
                this.goalArea * 2 + this.goalWidth
            );
            ctx.strokeStyle = "white";
            ctx.stroke();

            // penalty area left
            ctx.beginPath();
            ctx.rect(
                this.getPadding(),
                (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea + this.penaltyArea),
                this.goalArea + this.penaltyArea,
                this.goalArea * 2 + this.penaltyArea * 2 + this.goalWidth
            );
            ctx.strokeStyle = "white";
            ctx.stroke();


            // goal area right
            ctx.beginPath();
            ctx.rect(
                this.getPadding() + this.getWidth() - this.goalArea,
                (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea),
                this.goalArea,
                this.goalArea * 2 + this.goalWidth
            );
            ctx.strokeStyle = "white";
            ctx.stroke();

            // penalty area right
            ctx.beginPath();
            ctx.rect(
                this.getPadding() + this.getWidth() - this.goalArea - this.penaltyArea,
                (this.getPadding() + (this.getHeight() / 2)) - ((this.goalWidth / 2) + this.goalArea + this.penaltyArea),
                this.goalArea + this.penaltyArea,
                this.goalArea * 2 + this.penaltyArea * 2 + this.goalWidth
            );
            ctx.strokeStyle = "white";
            ctx.stroke();

            // ctx.beginPath();
            this.drawCorner(
                this.getPadding() + this.getWidth() - this.goalArea - this.penaltyArea,
                this.getPadding() + this.getHeight() / 2,
                90,
                1.5
            );

            this.drawCorner(
                this.getPadding() + this.goalArea + this.penaltyArea,
                this.getPadding() + this.getHeight() / 2,
                270,
                0.5
            );

            // left goal
            ctx.moveTo(this.getPadding(), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            ctx.lineTo(this.getPadding() - (5 * scale), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            ctx.lineTo(this.getPadding() - (5 * scale), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            ctx.lineTo(this.getPadding(), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            ctx.stroke();

            // right goal
            ctx.moveTo(this.getPadding() + this.getWidth(), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            ctx.lineTo(this.getPadding() + this.getWidth() + (5 * scale), this.getPadding() + (this.getHeight() / 2) - (this.goalWidth / 2));
            ctx.lineTo(this.getPadding() + this.getWidth() + (5 * scale), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            ctx.lineTo(this.getPadding() + this.getWidth(), this.getPadding() + (this.getHeight() / 2) + (this.goalWidth / 2));
            ctx.stroke();

            // middle circle
            const middleRadius: number = 9.15 * scale;
            ctx.beginPath();
            ctx.arc(this.getPadding() + (this.getWidth() / 2), this.getPadding() + (this.getHeight() / 2), middleRadius, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = "white";
            ctx.stroke();

            ctx.restore();

        }

        //set padding of the field
        public setPadding(padding: number): void {
            this.padding = padding;
        }

        //get padding of the field
        public getPadding(): number {
            return this.padding * scale;
        }

        //get width of the field
        public getWidth(): number {
            return this.width * scale;
        }

        //set width of the field
        public setWidth(width: number): void {
            this.width = width;
        }

        //get height of the field
        public getHeight(): number {
            return this.height * scale;
        }

        //set height of the field
        public setHeight(height: number): void {
            this.height = height;
        }
    }
}