function qty() {
    var x = document.getElementById("itm-price").innerText;
    var y = document.getElementById("qty-num").value;
    var z = parseFloat(x) * parseFloat(y);
    document.getElementById("gross").innerHTML = "LKR  " + parseFloat(z) + ".00";
}