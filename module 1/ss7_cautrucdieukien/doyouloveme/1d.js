function timgiatrilonnhat() {
    let a= +document.getElementById("a").value
    let b= +document.getElementById("b").value
    let c= +document.getElementById("c").value
    if (a>b && a>c) {
        alert(a + " la so lon nhat")
    }else if (b>c && b>a) {
        alert(b + " la so lon nhat")
    }else {
        alert(c + " la so lon nhat")
    }
}