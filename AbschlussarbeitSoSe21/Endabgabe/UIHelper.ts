/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export interface ICellOptions {
        rowspan?: number;
        th?: boolean;
    }

    //static class for help creating ui elements
    export class UIHelper {
        //updates ui element by its id
        public static updateById(id: string, text: string): void {
            const el: HTMLElement | null = document.getElementById(id);
            if (!el) { return; }
            el.innerHTML = text;
        }

        //creates span element
        public static createSpan(id: string, text: string): HTMLSpanElement {
            const s: HTMLSpanElement = document.createElement("span");
            s.setAttribute("id", id);
            s.innerHTML = text;
            return s;
        }

        //creates input element
        public static createInput(id: string, text: string, cb: (val: string) => void): HTMLInputElement {
            const i: HTMLInputElement = document.createElement("input");
            i.setAttribute("id", id);
            i.value = text;
            i.addEventListener("change", (e: Event) => cb((e.target as HTMLInputElement).value));
            return i;
        }

        //creates a table
        public static createTable(...rows: HTMLTableRowElement[]): HTMLTableElement {
            const table: HTMLTableElement = document.createElement("table");
            table.setAttribute("id", "player-table");
            rows.forEach((r) => {
                table.appendChild(r);
            });
            return table;
        }

        //creates a row
        public static createRow(...cells: HTMLTableCellElement[]): HTMLTableRowElement {
            const tr: HTMLTableRowElement = document.createElement("tr");
            cells.forEach((c) => {
                tr.appendChild(c);
            });
            return tr;
        }

        //creates a cell
        public static createCell(element: HTMLElement, options: ICellOptions = {
            rowspan: 1,
            th: false
        }): HTMLTableCellElement {
            let booleanVal: string = optionsBoolean();
            function optionsBoolean(): string {
                if (options.th == true) {
                    return "th";
                } else {
                    return "td";
                }
            }
            const td: HTMLTableCellElement = <HTMLTableCellElement> document.createElement(booleanVal);
            td.appendChild(element);
            if (options) {
                const r: number | string = options.rowspan || "";
                td.setAttribute("rowspan", r.toString());
            }
            return td;
        }
    }
}