namespace randompoem {


    let subject: string[] = [
            "Harry", "Hermine", "Dumbledore", "Ron", "Snape", "Draco"
    ];

    let verb: string[] = [
            "braut", "studiert", "zaubert", "hasst", "liebt", "zerstört"
    ];

    let object: string[] = [
        "Zaubertränke", "die Karte des Rumtreibers", "Dementoren", "Verteidigung gegen die dunklen Künste", "Butterbier", "Elderstab"

    ];

    //console.log(subject);
    //console.log(verb);
    //console.log(object);

    for (let index: number = 6; index >= 1; index--) {
        //console.log(index);
        //getVerse(subject, verb, object);
        //console.log(getVerse);
        let finalSentence: string = getVerse(subject, verb, object);
        console.log(finalSentence);
        
    }
    
    function getVerse(_subject: string[], _verb: string[], _object: string[]): string {
        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomVerb: number = Math.floor(Math.random() * _subject.length);
        let randomObject: number = Math.floor(Math.random() * _subject.length);

        let verse: string = _subject[randomSubject] + " " + _verb[randomVerb] + " " + _object[randomObject] + ".";

        _subject.splice(randomSubject, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);

        return verse;
        
    }


}



