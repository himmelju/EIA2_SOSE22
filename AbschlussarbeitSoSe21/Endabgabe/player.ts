/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    export interface IPlayerDrawOptions {
        showActionRadius: boolean;
        showPlayerOrigin: boolean;
    }

    export class Player extends Movable {

        // default speed level which scales with speed
        protected speedLevel: number = 2;

        protected color: string;

        // speed 1 to 99
        protected speed: number = 80;

        // precision1 to 99
        protected precision: number = 20;

        // origin of the player
        private origin: Vector = new Vector(0, 0);

        // id of the player of identification
        private id: string = uuidv4();

        // action radius
        private actionRadius: number = 30;

        private tricotNumber: number;

        private team: number;

        // name of the player
        private name: string;

        // whether the player is displayed on the field or on substitution
        private active: boolean;

        // shot power
        private shotPower: number = 100;

        // whether the player is highlighted or not
        private highlighted: boolean;

        constructor(name: string, _position: Vector, shotPower: number = 70, precision: number = 70, speed: number = 80, color: string = "red", team: number = 0, tricotNumber: number = 0) {
            super(
                new Vector(_position.X, _position.Y)
            );
            this.shotPower = shotPower;
            this.precision = precision;
            this.speed = speed;
            this.color = color;
            this.team = team;
            this.active = true;
            this.tricotNumber = tricotNumber;
            this.radius = 2;


            this.setName(name);
            this.origin = new Vector(_position.X, _position.Y);
        }

        //get tricot number
        public getTricotNumber(): number {
            return this.tricotNumber;
        }

        //set tricot numner
        public setTricotNumber(tricotNumber: number): void {
            this.tricotNumber = tricotNumber;
        }

        //whether the player is on the field or not
        public isActive(): boolean {
            return this.active;
        }

        //set player to be active or inactive
        public setActive(active: boolean): void {
            this.active = active;
        }

        public getTeam(): number {
            return this.team;
        }

        public setTeam(team: number): void {
            this.team = team;
        }

        public getColor(): string {
            return this.color;
        }

        public setColor(color: string): void {
            this.color = color;
        }

        public setShotPower(power: number): void {
            this.shotPower = power;
        }

        public setPrecision(prec: number): void {
            this.precision = prec;
        }

        public getPrecision(): number {
            return this.precision;
        }

        public getShotPower(): number {
            return this.shotPower;
        }

        public getId(): string {
            return this.id;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string): void {
            this.name = name;
        }

        public getActionRadius(): number {
            return this.actionRadius * scale;
        }

        public getOrigin(): Vector {
            return this.origin;
        }

        public setOrigin(origin: Vector): void {
            this.origin = origin;
        }

        public highlight(): void {
            this.highlighted = true;
        }

        public dehighlight(): void {
            this.highlighted = false;
        }

        public isHighlighted(): boolean {
            return this.highlighted;
        }

        public draw(options: IPlayerDrawOptions = {
            showActionRadius: true,
            showPlayerOrigin: true
        }): void {
            ctx.save();

            // draw player center
            ctx.beginPath();
            ctx.arc(this.position.X, this.position.Y, this.isHighlighted() ? this.getRadius() * 1.5 : this.getRadius(), 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.lineWidth = this.isHighlighted() ? 2 : 1;
            ctx.strokeStyle = "#003300";
            ctx.stroke();
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "white"; 
            ctx.fillText(this.getTricotNumber().toString(), this.position.X, this.position.Y);


            // draw action radius
            if (typeof options.showActionRadius !== "boolean" || options.showActionRadius) {
                ctx.beginPath();
                ctx.arc(this.position.X, this.position.Y, this.getActionRadius(), 0, 2 * Math.PI, false);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#6D6D6D";
                ctx.stroke();
            }

            // draw line to origin
            if (typeof options.showPlayerOrigin !== "boolean" || options.showPlayerOrigin) {
                ctx.beginPath();
                ctx.moveTo(this.position.X, this.position.Y);
                ctx.lineTo(this.getOrigin().X, this.getOrigin().Y);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#green";
                ctx.stroke();
            }

            ctx.restore();
        }

        getPosition(): Vector {
            return this.position;
        }
    }
}
