function qty() {
    var x = document.getElementById("itm-price").innerText;
    var y = document.getElementById("qty-num").value;
    var z = parseFloat(x) * parseFloat(y);
    document.getElementById("gross").innerHTML = "LKR  " + parseFloat(z) + ".00";
}
function qtys() {
    var x = document.getElementById("itm-price-1").innerText;
    var y = document.getElementById("qty-num-1").value;
    var z = parseFloat(x) * parseFloat(y);
    document.getElementById("gross-1").innerHTML = "LKR  " + parseFloat(z) + ".00";
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");

}