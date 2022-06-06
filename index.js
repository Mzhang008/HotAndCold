

let forms = document.querySelector('form');
let resultText = document.getElementById("result");

function updateTemp() {
        let baseTemp = parseInt(document.querySelector('input[name=baseTemp]:checked').value);
        let brand = parseInt(document.querySelector('input[name=brand]:checked').value);

        resultText.innerText = tempSolve(baseTemp, brand);
};

formArray = Array.from(forms);
formArray.forEach(element => {
    element.addEventListener('click', updateTemp); 
});
updateTemp();

function tempSolve(baseTemp, brand) {
    let totalTemp = baseTemp + brand;
    if (totalTemp === 0) { 
        return "Total Temp: 0\nQuickmarch to/stand in empty spot";
    } else if (totalTemp === 4) {
        return ("Total Temp: +4 hot\n\
            Swords:\n\
            Step 1: Stand in -2 cold slash in cardinal direction of safe spot\n\
            Step 2: Stand in -2 cold slash in cardinal direction of safe spot");
    } else if (totalTemp === 3) {
        return ("Total Temp: +3 hot (steps interchangeable)\n\
            Swords:\n\
            Step 1: Stand in -2 cold slash in cardinal direction of safe spot\n\
            Step 2: Stand in -1 cold slash in cardinal direction of safe spot");
    } else if (totalTemp === 2) {
        return ("Total Temp: +2 hot\n\
            Swords:\n\
            Step 1: Stand in -2 cold slash in cardinal direction of safe spot\n\
            Step 2: Stand in safe spot\n\n\
            Arrows/Meteors:\nQuickmarch to -2 cold arrow/meteor");
    } else if (totalTemp === 1) {
        return ("Total Temp: +1 hot\n\
            Swords:\n\
            Step 1: Stand in -1 cold slash in cardinal direction of safe spot\n\
            Step 2: Stand in safe spot\n\n\
            Arrows/Meteors:\nQuickmarch to -1 cold arrow");        
    } else if (totalTemp === -4) {
        return ("Total Temp: -4 cold\n\
            Swords:\n\
            Step 1: Stand in +2 hot slash in cardinal direction of safe spot\n\
            Step 2: Stand in +2 hot slash in cardinal direction of safe spot");
    } else if (totalTemp === -3) {
        return ("Total Temp: -3 cold (steps interchangeable)\n\
            Swords:\n\
            Step 1: Stand in +2 hot slash in cardinal direction of safe spot\n\
            Step 2: Stand in +1 hot slash in cardinal direction of safe spot");
    } else if (totalTemp === -2) {
        return ("Total Temp: -2 cold\n\
            Swords:\n\
            Step 1: Stand in +2 hot slash in cardinal direction of safe spot\n\
            Step 2: Stand in safe spot\n\n\
            Arrow:\nQuickmarch to +2 hot arrow");
    } else if (totalTemp === -1) {
            return ("Total Temp: -1 cold\n\
            Step 1: Stand in +1 hot slash in cardinal direction of safe spot\n\
            Step 2: Stand in safe spot\n\n\
            Arrow:\nQuickmarch to +1 hot arrow");        
}
};