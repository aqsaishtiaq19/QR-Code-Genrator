const api_url = "https://quickchart.io/qr?text=Hello%20World&size=300";
const btn = document.querySelector(".container button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "gray";

    setTimeout(function () {
        btn.style.backgroundColor = "beige";
    }, 2000);
});