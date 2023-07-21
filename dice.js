const diceGrid = document.querySelector("#dice-grid")

let diceValues = []

const Pip = () => {
    const span = document.createElement('span');
    span.className = 'pip';
    return span;
};
  
const Face = ({ children }) => {
    const div = document.createElement('div');
    div.className = 'face';
    if (children) {
        children.forEach((child) => {
            div.appendChild(child);
        });
    }
    return div;
};
  
const Die = ({ value }) => {
    let pips = Number.isInteger(value)
        ? Array(value)
            .fill(0)
            .map((_, i) => Pip())
        : null;
    let face = Face({ children: pips });
    face.className += ' die';
    return face;
};

function init() {
    for (let i = 0; i < 5; i++) {
        diceValues.push(0)
    }

    rollDice()
    drawDice()
}
init()

function drawDice() {
    diceGrid.innerHTML = ""
    for (let i = 0; i < diceValues.length; i++) {
        diceGrid.appendChild(Die({ value: diceValues[i] }))
    }
}

function rollDice() {
    for (let i = 0; i < diceValues.length; i++) {
        diceValues[i] = Math.floor(Math.random() * 6) + 1
    }
    drawDice()
}

function addDie() {
    diceValues.push(1)
    drawDice()
}

function removeDie() {
    diceValues.pop()
    drawDice()
}

document.body.onkeyup = function(e) {
    if (e.key == " ") {
        rollDice()
    } else if (e.key == "+") {
        addDie()
    } else if (e.key == "-") {
        removeDie()
    }
}