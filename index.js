let imgbox=document.getElementById("img.box");
let qrImg= document.getElementById("qrImg");
let qrText= document.getElementById("qrText");
function genrator()
{
 qrImg.src   = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;}
const btn = document.querySelector(".container button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "gray";

    setTimeout(function () {
        btn.style.backgroundColor = "beige";
    }, 2000);
});