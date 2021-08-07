function msg(){
    var con=document.getElementById("contact").value;
    var at=document.getElementById("mail").value.indexOf("@")
    if(at == -1){
        alert("not valid")
    }

}
