function first() {
    const a = document.querySelector(".firstBox");
    const b = document.querySelector(".answer1");
    const c = document.querySelector(".p1");
    const minus1 = document.querySelector(".minus1");
    const plus1 = document.querySelector(".plus1");

    minus1.style.display = "flex";
    plus1.style.display = "none";
    b.style.display = "flex";
    c.style.display = "flex";
    a.style.height = "40%";

    hideBox("secondBox", "answer2", "p2", "plus2", "minus2");
    hideBox("thirdBox", "answer3", "p3", "plus3", "minus3");
}

function second() {
    const a = document.querySelector(".secondBox");
    const b = document.querySelector(".answer2");
    const c = document.querySelector(".p2");
    const minus2 = document.querySelector(".minus2");
    const plus2 = document.querySelector(".plus2");

    minus2.style.display = "flex";
    plus2.style.display = "none";
    b.style.display = "flex";
    c.style.display = "flex";
    a.style.height = "40%";

    hideBox("firstBox", "answer1", "p1", "plus1", "minus1");
    hideBox("thirdBox", "answer3", "p3", "plus3", "minus3");
}

function third() {
    const a = document.querySelector(".thirdBox");
    const b = document.querySelector(".answer3");
    const c = document.querySelector(".p3");
    const minus3 = document.querySelector(".minus3");
    const plus3 = document.querySelector(".plus3");

    minus3.style.display = "flex";
    plus3.style.display = "none";
    b.style.display = "flex";
    c.style.display = "flex";
    a.style.height = "40%";

    hideBox("firstBox", "answer1", "p1", "plus1", "minus1");
    hideBox("secondBox", "answer2", "p2", "plus2", "minus2");
}

function hideBox(boxClass, answerClass, pClass, plusClass, minusClass) {
    const box = document.querySelector(`.${boxClass}`);
    const answer = document.querySelector(`.${answerClass}`);
    const paragraph = document.querySelector(`.${pClass}`);
    const plus = document.querySelector(`.${plusClass}`);
    const minus = document.querySelector(`.${minusClass}`);

    box.style.height = "17%";
    answer.style.display = "none";
    paragraph.style.display = "none";
    plus.style.display = "flex";
    minus.style.display = "none";
}


function firstMinus() {
    const a = document.querySelector(".firstBox");
    const b = document.querySelector(".answer1");
    const c = document.querySelector(".p1");
    const minus1 = document.querySelector(".minus1");
    const plus1 = document.querySelector(".plus1");

    hideBox("firstBox", "answer1", "p1", "plus1", "minus1");

}

function secondMinus() {
    hideBox("secondBox", "answer2", "p2", "plus2", "minus2");
    
}

function thirdMinus() {
    hideBox("thirdBox", "answer3", "p3", "plus3", "minus3");

}