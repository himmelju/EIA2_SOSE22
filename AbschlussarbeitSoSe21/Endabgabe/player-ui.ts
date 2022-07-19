/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export class PlayerUI {
        public static draw(player: Player | null): void {
            const playerUi: HTMLElement | null = document.getElementById("current-player");
            if (!playerUi) { return; }

            playerUi.innerHTML = "";
            if (!player) { return; }

            // creates table
            const t: HTMLTableElement = UIHelper.createTable(
                // player name
                UIHelper.createRow(
                    UIHelper.createCell(UIHelper.createSpan("td-player-name-label", "Spielername")),
                    UIHelper.createCell(UIHelper.createSpan("td-player-name-value", player.getName()))
                ),
                // shot power
                UIHelper.createRow(
                    UIHelper.createCell(UIHelper.createSpan("td-shot-strength-label", "Schusskraft")),
                    UIHelper.createCell(this.createShotStrength(player)),
                    UIHelper.createCell(UIHelper.createSpan("td-shot-strength-value", player.getShotPower().toString()))
                ),
                // precision
                UIHelper.createRow(
                    UIHelper.createCell(UIHelper.createSpan("td-precision-label", "Präzision")),
                    UIHelper.createCell(this.createPrecision(player)),
                    UIHelper.createCell(UIHelper.createSpan("td-precision-value", player.getPrecision().toString()))
                ),
                // speed
                UIHelper.createRow(
                    UIHelper.createCell(UIHelper.createSpan("td-speed-label", "Geschwindigkeit")),
                    UIHelper.createCell(this.createSpeed(player)),
                    UIHelper.createCell(UIHelper.createSpan("td-speed-value", player.getSpeed().toString()))
                )
            );
            playerUi.appendChild(t);
        }

        //creates range input
        private static createRangeInput(min: number, max: number, value: string, cb: (val: string) => void): HTMLInputElement {
            const range: HTMLInputElement = document.createElement("input");
            range.setAttribute("type", "range");
            range.setAttribute("min", min.toString());
            range.setAttribute("max", max.toString());
            range.setAttribute("value", value);

            // add eventlistener to handle changes to range
            range.addEventListener("change", handleRange);

            function handleRange(event: Event): void {
                const el: HTMLInputElement = event.target as HTMLInputElement;
                cb(el.value);
            }
            return range;
        }

        //creates range ui element for shot strength of player
        private static createShotStrength(player: Player): HTMLInputElement {
            return this.createRangeInput(1, 99, player?.getShotPower().toString(), strengthHelper);

            function strengthHelper(value: string): void {
                UIHelper.updateById("td-shot-strength-value", value);
                player.setShotPower(parseInt(value));
            }
        }

        //creates range ui element for speed of player
        private static createSpeed(player: Player): HTMLInputElement {
            return this.createRangeInput(1, 99, player?.getSpeed().toString(), speedHelper);

            function speedHelper(value: string): void {
                UIHelper.updateById("td-speed-value", value);
                player.setSpeed(parseInt(value));
            }
        }

        //creates range ui element for precision of player
        private static createPrecision(player: Player): HTMLInputElement {
            return this.createRangeInput(1, 99, player?.getPrecision().toString(), precisionHelper);

            function precisionHelper(value: string): void  {
                UIHelper.updateById("td-precision-value", value);
                player.setPrecision(parseInt(value));
            }
        }
    }
}