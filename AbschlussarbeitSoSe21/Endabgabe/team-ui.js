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
    class TeamUI {
        draw(players) {
            const body = document.getElementById("team-body");
            if (!body) {
                return;
            }
            body.innerHTML = "";
            body.appendChild(this.createColorRow(players));
            // creates row in table for players
            this.createPlayerRows(players).forEach(function (r) {
                body.appendChild(r);
            });
        }
        createColorRow(players) {
            const row = Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("l", "Farbe"), { th: true }), 
            // add listener to handle color changes on home team
            Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createInput("color-home", "", (v) => {
                players.forEach((m) => {
                    if (m instanceof Endabgabe.Player && m.getTeam() == 1) {
                        m.setColor(v);
                        // redraw
                        const preColor = document.getElementById("score-pre");
                        if (preColor) {
                            preColor.style.background = v;
                        }
                        this.draw(players);
                    }
                });
            })), 
            // add listener to handle color changes on away team
            Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createInput("color-away", "", (v) => {
                players.forEach((m) => {
                    if (m instanceof Endabgabe.Player && m.getTeam() == 2) {
                        m.setColor(v);
                        // redraw
                        const postColor = document.getElementById("score-post");
                        if (postColor) {
                            postColor.style.background = v;
                        }
                        this.draw(players);
                    }
                });
            })));
            return row;
        }
        createPlayerRows(players) {
            // create lists for home and away players which are not on the field (isActive() == false)
            const awaySubstitutes = players.filter((p) => p.getTeam() == 2 && !p.isActive());
            const homeSubstitutes = players.filter((p) => p.getTeam() == 1 && !p.isActive());
            const homeTeam = players.filter((p) => p.getTeam() == 1);
            const awayTeam = players.filter((p) => p.getTeam() == 2);
            // get max row count
            const rowCount = Math.max(awaySubstitutes.length, homeSubstitutes.length);
            const rows = [];
            // creates a rows for all players
            for (let i = 0; i < rowCount; i++) {
                const row = Endabgabe.UIHelper.createRow(Endabgabe.UIHelper.createCell(this.createDraggableElement(homeTeam, homeSubstitutes[i], () => this.draw(players))), Endabgabe.UIHelper.createCell(this.createDraggableElement(awayTeam, awaySubstitutes[i], () => this.draw(players))));
                rows.push(row);
            }
            // creates title cell and set rowspan to number of max rows
            rows[0].insertBefore(Endabgabe.UIHelper.createCell(Endabgabe.UIHelper.createSpan("l", "Spieler"), {
                rowspan: rowCount,
                th: true
            }), rows[0].children[0]);
            return rows;
        }
        createDraggableElement(players, player, cb) {
            const s = document.createElement("span");
            if (!player) {
                return s;
            }
            // enable dragability
            s.setAttribute("draggable", "true");
            function checkDrag(e) {
                players.filter((p) => p.isActive()).forEach((p) => {
                    const v = new Endabgabe.Vector(Endabgabe.canvas.getBoundingClientRect().x + p.getPosition().X, Endabgabe.canvas.getBoundingClientRect().y + p.getPosition().Y);
                    // dehighlight player
                    p.dehighlight();
                    // if player is hovered highlight it
                    if (Endabgabe.distance(v, new Endabgabe.Vector(e.clientX, e.clientY)) - player.getRadius() * 2 <= 0) {
                        if (e.dataTransfer) {
                            e.dataTransfer.effectAllowed = "copyMove";
                        }
                        p.highlight();
                    }
                });
            }
            // add listener for drag events to highlight hovered players
            s.addEventListener("drag", checkDrag);
            function dragEnd(e) {
                // get player directly under the mouse
                const p = players.filter((p) => p.isActive()).find((p) => {
                    const v = new Endabgabe.Vector(Endabgabe.canvas.getBoundingClientRect().x + p.getPosition().X, Endabgabe.canvas.getBoundingClientRect().y + p.getPosition().Y);
                    return Endabgabe.distance(v, new Endabgabe.Vector(e.clientX, e.clientY)) - player.getRadius() * 2;
                });
                // if there was a player on dragend swap both
                if (p) {
                    // set current active player to inactive
                    p.setActive(false);
                    player.setActive(true);
                    // swap subsitutes origin with players origin
                    player.setOrigin(new Endabgabe.Vector(p.getOrigin().X, p.getOrigin().Y));
                    // swap subsitutes position with players position
                    player.setPosition(new Endabgabe.Vector(p.getPosition().X, p.getPosition().Y));
                    // executes callback
                    cb();
                }
            }
            // add listener for dragend to swap players
            s.addEventListener("dragend", dragEnd);
            // set some stylings to look better
            s.style.background = player.getColor();
            s.style.border = `1px solid black`;
            s.style.width = `${2 * player.getRadius()}px`;
            s.style.height = `${2 * player.getRadius()}px`;
            s.classList.add("is-draggable");
            s.innerHTML = player?.getTricotNumber().toString();
            return s;
        }
    }
    Endabgabe.TeamUI = TeamUI;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=team-ui.js.map