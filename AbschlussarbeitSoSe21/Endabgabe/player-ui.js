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
    class PlayerUI {
        static draw(player) {
            const playerUi = document.getElementById("current-player");
            if (!playerUi) {
                return;
            }
            playerUi.innerHTML = "";
            if (!player) {
                return;
            }
            // creates table
            const t = Endabgabe.UIHelper.createTable(
            // player name
            Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-player-name-label", "Spielername")), Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-player-name-value", player.getName()))), 
            // shot power
            Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-shot-strength-label", "Schusskraft")), Endabgabe.UIHelper.createCell(this.createShotStrength(player)), Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-shot-strength-value", player.getShotPower().toString()))), 
            // precision
            Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-precision-label", "Präzision")), Endabgabe.UIHelper.createCell(this.createPrecision(player)), Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-precision-value", player.getPrecision().toString()))), 
            // speed
            Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-speed-label", "Geschwindigkeit")), Endabgabe.UIHelper.createCell(this.createSpeed(player)), Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("td-speed-value", player.getSpeed().toString()))));
            playerUi.appendChild(t);
        }
        //creates range input
        static createRangeInput(min, max, value, cb) {
            const range = document.createElement("input");
            range.setAttribute("type", "range");
            range.setAttribute("min", min.toString());
            range.setAttribute("max", max.toString());
            range.setAttribute("value", value);
            // add eventlistener to handle changes to range
            range.addEventListener("change", handleRange);
            function handleRange(event) {
                const el = event.target;
                cb(el.value);
            }
            return range;
        }
        //creates range ui element for shot strength of player
        static createShotStrength(player) {
            return this.createRangeInput(1, 99, player?.getShotPower().toString(), strengthHelper);
            function strengthHelper(value) {
                Endabgabe.UIHelper.updateById("td-shot-strength-value", value);
                player.setShotPower(parseInt(value));
            }
        }
        //creates range ui element for speed of player
        static createSpeed(player) {
            return this.createRangeInput(1, 99, player?.getSpeed().toString(), speedHelper);
            function speedHelper(value) {
                Endabgabe.UIHelper.updateById("td-speed-value", value);
                player.setSpeed(parseInt(value));
            }
        }
        //creates range ui element for precision of player
        static createPrecision(player) {
            return this.createRangeInput(1, 99, player?.getPrecision().toString(), precisionHelper);
            function precisionHelper(value) {
                Endabgabe.UIHelper.updateById("td-precision-value", value);
                player.setPrecision(parseInt(value));
            }
        }
    }
    Endabgabe.PlayerUI = PlayerUI;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=player-ui.js.map