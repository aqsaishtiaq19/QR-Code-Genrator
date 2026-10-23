let imgBox=document.getElementById("imgBox");
let qrImg= document.getElementById("qrImg");
let qrText= document.getElementById("qrText");
function genrator()
{
 qrImg.src   = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
imgBox.classList.add("show-img")}
const btn = document.querySelector(".container button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "gray";

    setTimeout(function () {
        btn.style.backgroundColor = "beige";
    }, 2000);
});