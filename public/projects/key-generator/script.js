function generate() {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    let length = 0;
    for (let x = 0; x < 4; x++) {
        for (let i = 0; i < 4; i++) {
            result += character.charAt(Math.floor(Math.random() * character.length));
            length++;
        }
        if (length < 19) {
            result += "-";
            length++;
        }
    }
    document.getElementById("key").innerHTML = result;

    let timeleft = 5;
    let countdown = document.createElement("p");
    document.getElementById("c").appendChild(countdown);
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            countdown.textContent = "";
            document.getElementById("key").innerHTML = "xxxx-xxxx-xxxx-xxxx";
            document.getElementById("generate").disabled = false;
            document.getElementById("clipboard").disabled = true;
        } else {
            countdown.textContent = timeleft + " mp múlva törlődik a kulcs!";
            document.getElementById("generate").disabled = true;
            document.getElementById("clipboard").disabled = false;
        }
        timeleft -= 1;
    }, 1000);
}

function clipboard() {
    let key = document.getElementById("key").textContent
    navigator.clipboard.writeText(key);
    alert("The key " + key + "is copied!")
}   