const container = document.querySelector(".container")
const text = document.querySelector("#text")

const totalTime = 7500;
const breathTime = (totalTime / 6) * 2;
const holdTime = totalTime / 3;

breathanimation();

function breathanimation() {
    text.style.fontFamily = "'Bungee Hairline', sans-serif";
    text.innerHTML = "Breath In!"
    container.className = "container grow";

    setTimeout(() => {

        text.innerText = "Hold..."

        setTimeout(() => {
            text.innerText = "Breath Out!"
            container.className = "container shrink"
        }, holdTime);
    }, breathTime)
}

setInterval(breathanimation, totalTime)