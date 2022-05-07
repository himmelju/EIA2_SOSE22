"use strict";
var eventInspector;
(function (eventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        let body = document.querySelector("body");
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        let spanForMouseCursor = document.querySelector("span");
        spanForMouseCursor.style.left = x + "px";
        spanForMouseCursor.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    // define a custom event that bubbles and carries some information
    //let event: CustomEvent = new CustomEvent("someSpecialType", {bubbles: true, detail: {someKey: someData}});
    // send the event from some dispatcher
    //someEventTarget.dispatchEvent(event);
})(eventInspector || (eventInspector = {}));
//# sourceMappingURL=eventInspector.js.map