/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    //Source: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid

    // global scaling factor
    export let scale: number = 5;

    //get int between min and max
    export function randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //converts degrees to radians
    export function degreesToRadians(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }

    //creates unique id
    export function uuidv4(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r: number = Math.random() * 16 | 0, v: number = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    //gets distance between two vectors
    export function distance(v1: Vector, v2: Vector): number {
        let d: number = Math.sqrt(Math.pow(v2.X - v1.X, 2) +
            Math.pow(v2.Y - v1.Y, 2));
        return d;
    }
}