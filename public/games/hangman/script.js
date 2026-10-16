function Start() {
    let word = "";
    let known = [];
    let tips = [];
    let mistakes = 0;
    let score = 0;
    let length = 0;

    word = document.getElementById("word").value.toUpperCase().trim();
    if (word.length < 3) {
        alert("Word too short");
        return;
    };

    for (let i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            known[i] = ' ';
        } else {
            known[i] = false;
            length++;
        }
    }

    let charInput = document.createElement("input");
    charInput.id = "charInput";
    charInput.placeholder = "Type a character";
    charInput.maxLength = 1;
    charInput.minLength = 1;
    charInput.oninput = () => {
        if (charInput.value == ' ') charInput.value = '';
    }

    let tip = document.createElement("button");
    tip.id = "tip";
    tip.textContent = "Tip";
    tip.onclick = () => {
        let char = charInput.value.toUpperCase();
        let found = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] == char) {
                found = true;
                known[i] = true;
            }
        } 
        if (!found && char != '') {
            if (!tips.includes(char)) {
                mistakes++;
                tips.push(char)
            }
        }
        Update(word, known, tips, mistakes, length);
        if (mistakes == 12) setTimeout(() => {
            alert("Game over! The word was: " + word);
            location.reload();
        }, 100);
        
    }

    let restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.onclick = () => {
        location.reload();
    }

    let tipsString = document.createElement("p");
    tipsString.id = "tips";

    let img = document.createElement("img");
    img.id = "graphic";

    document.getElementById("word").remove();
    document.getElementById("start").remove();

    document.body.appendChild(charInput);
    document.body.appendChild(tip);
    document.body.appendChild(restart);
    document.body.appendChild(tipsString);
    document.body.appendChild(img);

    Update(word, known, tips, mistakes, length);
}

function Update(word, known, tips, mistakes, length) {
    let score = 0;
    document.getElementById("charInput").value = "";
    document.getElementById("charInput").focus();

    if (mistakes != 0) document.getElementById("graphic").src = "./img/" + mistakes + ".png";

    let string = "";
    for (let i = 0; i < known.length; i++) {
	if (known[i]) score++;
        switch (known[i]) {
            case true:
                string += ' ' + word[i];
                break;
            case false:
                string += " _";
                break;
            case ' ':
                string += " |";
                break;
        }
    }
    document.getElementById("sentence").textContent = "The word is" + string;

    let tipsString = "";
    tips.forEach(tip => {
        tipsString += tip + ' ';
    });
    document.getElementById("tips").textContent = tipsString;

    if (score == word.length) {
	setTimeout(() => {
	    alert("You win!");
	    location.reload();
	}, 10)
    }
}