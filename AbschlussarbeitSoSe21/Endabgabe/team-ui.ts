/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export class TeamUI {

        public draw(players: Player[]): void {
            const body: HTMLElement | null = document.getElementById("team-body");
            if (!body) { return; }

            body.innerHTML = "";
            body.appendChild(this.createColorRow(players));

            // creates row in table for players
            this.createPlayerRows(players).forEach(function(r: HTMLTableRowElement): void {
                body.appendChild(r);
            });

        }

        private createColorRow(players: Player[]): HTMLTableRowElement {
            const row: HTMLTableRowElement = UIHelper.createRow(
                UIHelper.createCell(UIHelper.createSpan("l", "Farbe"), { th: true }),

                // add listener to handle color changes on home team
                UIHelper.createCell(UIHelper.createInput("color-home", "", (v: string) => {
                    players.forEach((m) => {
                        if (m instanceof Player && m.getTeam() == 1) {
                            m.setColor(v);
                            // redraw
                            const preColor: HTMLElement | null = document.getElementById("score-pre");
                            if (preColor) { preColor.style.background = v; }


                            this.draw(players);
                        }
                    });
                    
                })),

                // add listener to handle color changes on away team
                UIHelper.createCell(UIHelper.createInput("color-away", "", (v: string) => {
                    players.forEach((m) => {
                        if (m instanceof Player && m.getTeam() == 2) {
                            m.setColor(v);
                            // redraw
                            const postColor: HTMLElement | null = document.getElementById("score-post");
                            if (postColor) { postColor.style.background = v; }
                            this.draw(players);
                        }
                    });
                }))
            );

            return row;
        }

        private createPlayerRows(players: Player[]): HTMLTableRowElement[] {
            // create lists for home and away players which are not on the field (isActive() == false)
            const awaySubstitutes: Player[] = players.filter((p) => p.getTeam() == 2 && !p.isActive());
            const homeSubstitutes: Player[] = players.filter((p) => p.getTeam() == 1 && !p.isActive());
            const homeTeam: Player[] = players.filter((p) => p.getTeam() == 1);
            const awayTeam: Player[] = players.filter((p) => p.getTeam() == 2);

            // get max row count
            const rowCount: number = Math.max(awaySubstitutes.length, homeSubstitutes.length);
            const rows: HTMLTableRowElement[] = [];

            // creates a rows for all players
            for (let i: number = 0; i < rowCount; i++) {
                const row: HTMLTableRowElement = UIHelper.createRow(
                    UIHelper.createCell(this.createDraggableElement(homeTeam, homeSubstitutes[i], () => this.draw(players))),
                    UIHelper.createCell(this.createDraggableElement(awayTeam, awaySubstitutes[i], () => this.draw(players)))
                );
                rows.push(row);
            }

            // creates title cell and set rowspan to number of max rows
            rows[0].insertBefore(UIHelper.createCell(UIHelper.createSpan("l", "Spieler"), {
                rowspan: rowCount,
                th: true
            }),                  rows[0].children[0]);

            return rows;
        }

        private createDraggableElement(players: Player[], player: Player, cb: () => void): HTMLSpanElement {
            const s: HTMLSpanElement = document.createElement("span");
            if (!player) {
                return s;
            }

            // enable dragability
            s.setAttribute("draggable", "true");

            function checkDrag(e: DragEvent): void {
                players.filter((p) => p.isActive()).forEach((p) => {
                    const v: Vector = new Vector(
                        canvas.getBoundingClientRect().x + p.getPosition().X,
                        canvas.getBoundingClientRect().y + p.getPosition().Y
                    );
                    // dehighlight player
                    p.dehighlight();

                    // if player is hovered highlight it
                    if (distance(v, new Vector(e.clientX, e.clientY)) - player.getRadius() * 2 <= 0) {
                        if (e.dataTransfer) {
                            e.dataTransfer.effectAllowed = "copyMove";
                        }
                        p.highlight();
                    }
                });

            }

            // add listener for drag events to highlight hovered players
            s.addEventListener("drag", checkDrag);

            function dragEnd(e: DragEvent): void {
                // get player directly under the mouse
                const p: Player | undefined = players.filter((p) => p.isActive()).find((p) => {
                    const v: Vector = new Vector(
                        canvas.getBoundingClientRect().x + p.getPosition().X,
                        canvas.getBoundingClientRect().y + p.getPosition().Y
                    );
                    return distance(v, new Vector(e.clientX, e.clientY)) - player.getRadius() * 2;
                });

                // if there was a player on dragend swap both
                if (p) {
                    // set current active player to inactive
                    p.setActive(false);
                    player.setActive(true);

                    // swap subsitutes origin with players origin
                    player.setOrigin(new Vector(p.getOrigin().X, p.getOrigin().Y));

                    // swap subsitutes position with players position
                    player.setPosition(new Vector(p.getPosition().X, p.getPosition().Y));

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
}