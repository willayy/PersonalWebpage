
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
        typeText("mainPageHeaderLogo", "William Norland", 50, 0);
    }, 1000);
    setTimeout(function () {
        typeText("mainPageHeaderSmallerText", "Software engineer", 50, 0);
    }, 2000);
    setTimeout(function () {
        blinkingUnderScoreAfter("mainPageHeaderBlinkingUnderscore", 500)
    }, 3000)
}