

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