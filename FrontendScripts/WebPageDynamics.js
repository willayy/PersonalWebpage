
function typeText(id, text, delay, start) {

    let element = document.getElementById(id);
    let textToType = text;
    let currentIndex = start;

    if (currentIndex < text.length) {
        element.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, delay, id, text, delay, start+1);
    }

}

function blinkingUnderScoreAfter(id, delay) {
    let element = document.getElementById(id);
    let lastIndex = element.textContent.length - 1

    if (element.textContent.charAt(lastIndex) != "_") {
        element.textContent += "_"
        setTimeout(blinkingUnderScoreAfter, delay, id, delay)
    } 
    else {
        element.textContent = element.textContent.slice(0, -1);
        setTimeout(blinkingUnderScoreAfter, delay, id, delay)
    }
}

function initLogoAnimation() {
    setTimeout(function () {
        typeText("promptArrow", "> ", 50, 0);
    }, 1000);
    setTimeout(function () {
        typeText("nameVar", "name", 50, 0);
    }, 2000);
    setTimeout(function () {
        typeText("eqSign", " = ", 50, 0);
    }, 3000);
    setTimeout(function () {
        typeText("nameStr", "\"William Norland\"", 50, 0);
    }, 4000);
    setTimeout(function () {
        typeText("semiCol", ";", 50, 0);
    }, 5000);

    setTimeout(function () {
        typeText("promptArrow2", "> ", 50, 0);
    }, 6000);
    setTimeout(function () {
        typeText("typeVar", "Type", 50, 0);
    }, 7000);
    setTimeout(function () {
        typeText("colon", ": ", 50, 0);
    }, 8000);
    setTimeout(function () {
        typeText("type", "Software engineer", 50, 0);
    }, 9000);
    setTimeout(function () {
        typeText("semiCol2", ";", 50, 0);
    }, 10000);

}