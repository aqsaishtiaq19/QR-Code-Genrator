let imgbox=document.getElementById("img.box");
let qrImg= document.getElementById("qrImg");
let qrText= document.getElementById("qrText");
function genrator()
{
 qrImg   = "https://quickchart.io/qr?text=Hello%20World&size=300" + qrText.value;}
const btn = document.querySelector(".container button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "gray";

    setTimeout(function () {
        btn.style.backgroundColor = "beige";
    }, 2000);
});