/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export class UI {
       
        private homeScore: number;

        private awayScore: number;

        //gets score of home team
        public getHomeScore(): number {
            return this.homeScore || 0;
        }

        //set score for home team
        public setHomeScore(homeScore: number): void {
            this.homeScore = homeScore;
            this.updateScore();
        }

        //gets score of away team
        public getAwayScore(): number {
            return this.awayScore || 0;
        }

        //set score for away team
        public setAwayScore(awayScore: number): void {
            this.awayScore = awayScore;
            this.updateScore();
        }

        //redraws general ui
        public draw(time: number): void {
            const playerUi: HTMLElement | null = document.getElementById("upper-ui");
            if (!playerUi) { return; }

            // creats clock
            this.createTime(playerUi, time);
        }

        //updates score
        public updateScore(): void {
            const playerUi: HTMLElement | null = document.getElementById("upper-ui");
            if (!playerUi) { return; }
            let scoreElement: HTMLSpanElement | null = document.getElementById("score");
            if (!scoreElement) {
                const scorePre: HTMLElement = document.createElement("span");
                scorePre.setAttribute("id", "score-pre");
                const scorePost: HTMLElement = document.createElement("span");
                scorePost.setAttribute("id", "score-post");
                scoreElement = document.createElement("span");
                scoreElement.setAttribute("id", "score");
                playerUi.appendChild(scorePre);
                playerUi.appendChild(scoreElement);
                playerUi.appendChild(scorePost);
            }


            scoreElement.innerHTML = `${this.getHomeScore()} : ${this.getAwayScore()}`;

        }

        //creates clock
        public createTime(playerUi: HTMLElement, time: number): void {
            let timeElement: HTMLSpanElement | null = document.getElementById("time");
            if (!timeElement) {
                timeElement = document.createElement("span");
                timeElement.setAttribute("id", "time");
                playerUi.appendChild(timeElement);
            }

            if (!time) { return; }

            // calculates human readable time
            const minutes: number = Math.floor(time / (1000 * 60));
            const minuteRest: number = time % (1000 * 60);
            const seconds: number = Math.floor(minuteRest / 1000);

            timeElement.innerHTML = `Zeit: ${minutes.toString().length < 2 ? `0${minutes}` : minutes}:${seconds.toString().length < 2 ? `0${seconds}` : seconds}`;
        }

    }
}