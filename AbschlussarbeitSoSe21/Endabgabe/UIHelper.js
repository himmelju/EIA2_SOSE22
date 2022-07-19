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
    //static class for help creating ui elements
    class UIHelper {
        //updates ui element by its id
        static updateById(id, text) {
            const el = document.getElementById(id);
            if (!el) {
                return;
            }
            el.innerHTML = text;
        }
        //creates span element
        static createSpan(id, text) {
            const s = document.createElement("span");
            s.setAttribute("id", id);
            s.innerHTML = text;
            return s;
        }
        //creates input element
        static createInput(id, text, cb) {
            const i = document.createElement("input");
            i.setAttribute("id", id);
            i.value = text;
            i.addEventListener("change", (e) => cb(e.target.value));
            return i;
        }
        //creates a table
        static createTable(...rows) {
            const table = document.createElement("table");
            table.setAttribute("id", "player-table");
            rows.forEach((r) => {
                table.appendChild(r);
            });
            return table;
        }
        //creates a row
        static createRow(...cells) {
            const tr = document.createElement("tr");
            cells.forEach((c) => {
                tr.appendChild(c);
            });
            return tr;
        }
        //creates a cell
        static createCell(element, options = {
            rowspan: 1,
            th: false
        }) {
            let booleanVal = optionsBoolean();
            function optionsBoolean() {
                if (options.th == true) {
                    return "th";
                }
                else {
                    return "td";
                }
            }
            const td = document.createElement(booleanVal);
            td.appendChild(element);
            if (options) {
                const r = options.rowspan || "";
                td.setAttribute("rowspan", r.toString());
            }
            return td;
        }
    }
    Endabgabe.UIHelper = UIHelper;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=UIHelper.js.map