function check() {
    let a= +document.getElementById("a").value
    let b = +document.getElementById("b").value
    if (a%b === 0) {
        alert("a chia het cho b")
    }
    else {
        alert("a khong chia het cho b")
    }
}