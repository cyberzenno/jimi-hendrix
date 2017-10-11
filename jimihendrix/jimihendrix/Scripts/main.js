/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-1.9.1.intellisense.js" />

window.onload = function () {

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    setup();

    parallaxSetup(parallaxInstance);

    initEvents();

}


function setup() {

    centerElement("frame", "frame");
    centerElement("scene", "scene");
}

function initEvents() {
    $("body").click(function () {
        $("#feedback-container").toggle()
    })

    $(window).resize(function () {
        setup();
    })

}


//parallax
function parallaxSetup(parallaxInstance) {

    if (isMobile()) {

        if (isLandscape()) {
            parallaxInstance.invert(true, false);
        } else {
            parallaxInstance.invert(false, false);
        }

    } else {
        parallaxInstance.invert(true, true);
    }

}



//display
function centerElement(id, referenceId) {

    var rel = document.getElementById(referenceId);

    var x = (window.innerWidth / 2) - (rel.offsetWidth / 2);
    var y = (window.innerHeight / 2) - (rel.offsetHeight / 2);

    var el = document.getElementById(id);
    el.style.position = "absolute";
    el.style.left = x + "px";
    el.style.top = y + "px";
}

function isLandscape() {
    return window.innerWidth > window.innerHeight;
}

function isMobile() {
    return typeof window.orientation !== 'undefined';
}


//feedback
function frameFeedback() {
    var frame = document.getElementById("frame")

    addFeedback("frame.offsetWidth", frame.offsetWidth)
    addFeedback("frame.offsetHeight", frame.offsetHeight)
    addFeedback("frame.offsetTop", frame.offsetTop)
    addFeedback("frame.offsetLeft", frame.offsetLeft)
}

function displayFeedback() {

    cleanFeedback();

    frameFeedback();

    addFeedback("window.innerWidth", window.innerWidth)
    addFeedback("window.innerWidth", window.innerHeight)
}

function addFeedback(name, value) {
    $("#feedback").append("<tr><td>" + name + "</td><td>" + value + "</td></tr>");
}

function cleanFeedback() {
    $("#feedback").html("");
}