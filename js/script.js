let letters = Array.from(document.querySelectorAll(".letters"));
letters.forEach((a) => {
    a.innerHTML = a.textContent
        .split(" ")
        .map((word) => {
            if (word[0] != "&") {
                return `<span class="sp">${word[0]}</span>${word.substring(1)}`;
            } else {
                return word;
            }
        })
        .join(" ");
});

let btn = document.querySelector(".icon");
let span = document.querySelectorAll(".letters span");
let border = document.querySelector(".borderBottom");

let flag = true;

btn.addEventListener("click", function () {
    flag = !flag;

    if (flag == false) {
        border.classList.remove("borderBottomAnimOut");
        border.classList.add("borderBottomAnimIn");

        letters.forEach((a) => {
            a.classList.remove("lettersOff");
        });
        letters.forEach((a) => {
            a.classList.add("lettersOn");
        });

        span.forEach(function (x, index) {
            // Foreach with delay
            setTimeout(function () {
                x.classList.remove("fallDown");
            }, 100 * index);
        });

        span.forEach(function (x, index) {
            setTimeout(function () {
                x.classList.add("fallUp");
            }, 100 * index);
        });
    } else {
        border.classList.remove("borderBottomAnimIn");
        border.classList.add("borderBottomAnimOut");

        letters.forEach((a) => {
            a.classList.remove("lettersOn");
        });
        letters.forEach((a) => {
            a.classList.add("lettersOff");
        });

        span.forEach((x) => {
            x.classList.remove("fallUp");
        });
        span.forEach(function (x, index) {
            // Foreach with delay
            setTimeout(function () {
                x.classList.add("fallDown");
            }, 50 * index);
        });
    }
});