const btn = document.querySelector(".container button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "gray";

    setTimeout(function () {
        btn.style.backgroundColor = "beige";
    }, 2000);
});