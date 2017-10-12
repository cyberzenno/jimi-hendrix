/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-1.9.1.intellisense.js" />
/// <reference path="parallax.min.js" />

window.onload = function () {

    setup();

    var pxBgScene = new Parallax(document.getElementById('bgScene'));
    var pxScene = new Parallax(document.getElementById('scene'));

    pxSetup(pxBgScene, pxScene);
}


function setup() {

    centerElement("frame", "frame");
    centerElement("bgScene", "bgScene");
    centerElement("scene", "scene");
}

function initEvents(px1, px2) {

    window.onresize = function () {

        setup();

        pxInvertAxisForMobile(px1);
        pxInvertAxisForMobile(px2);
    }
}


//parallax
function pxSetup(px1, px2) {

    pxInvertAxisForMobile(px1);
    pxInvertAxisForMobile(px2);

    pxScalar(px1);
    pxScalar(px2);
}

function pxInvertAxisForMobile(px) {

    if (isMobile()) {

        if (isLandscape()) {
            px.invert(true, false);
        } else {
            px.invert(false, false);
        }

    } else {
        px.invert(true, true);
    }

}

function pxScalar(px) {
    px.scalar(30, 30);
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
//function frameFeedback() {
//    var frame = document.getElementById("frame")

//    addFeedback("frame.offsetWidth", frame.offsetWidth)
//    addFeedback("frame.offsetHeight", frame.offsetHeight)
//    addFeedback("frame.offsetTop", frame.offsetTop)
//    addFeedback("frame.offsetLeft", frame.offsetLeft)
//}

//function displayFeedback() {

//    cleanFeedback();

//    frameFeedback();

//    addFeedback("window.innerWidth", window.innerWidth)
//    addFeedback("window.innerWidth", window.innerHeight)
//}

//function addFeedback(name, value) {
//    $("#feedback").append("<tr><td>" + name + "</td><td>" + value + "</td></tr>");
//}

//function cleanFeedback() {
//    $("#feedback").html("");
//}