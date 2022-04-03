"use strict";
var randompoem;
(function (randompoem) {
    let subject = [
        "Harry", "Hermine", "Dumbledore", "Ron", "Snape", "Draco"
    ];
    let verb = [
        "braut", "studiert", "zaubert", "hasst", "liebt", "zerstört"
    ];
    let object = [
        "Zaubertränke", "die Karte des Rumtreibers", "Dementoren", "Verteidigung gegen die dunklen Künste", "Butterbier", "Elderstab"
    ];
    //console.log(subject);
    //console.log(verb);
    //console.log(object);
    for (let index = 6; index >= 1; index--) {
        //console.log(index);
        //getVerse(subject, verb, object);
        //console.log(getVerse);
        let finalSentence = getVerse(subject, verb, object);
        console.log(finalSentence);
    }
    function getVerse(_subject, _verb, _object) {
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomVerb = Math.floor(Math.random() * _subject.length);
        let randomObject = Math.floor(Math.random() * _subject.length);
        let verse = _subject[randomSubject] + " " + _verb[randomVerb] + " " + _object[randomObject] + ".";
        _subject.splice(randomSubject, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);
        return verse;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=zufallsgedicht.js.map