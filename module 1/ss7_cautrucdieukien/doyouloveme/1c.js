function checksonguyen() {
    let a = +document.getElementById("a").value;
    if (a>0) {
        alert("so " + a + " lon hon 0")
    }else if (a<0) {
        alert("so " + a + " be hon 0")
    }else {
        alert("xin moi nhap lai")
    }
}
