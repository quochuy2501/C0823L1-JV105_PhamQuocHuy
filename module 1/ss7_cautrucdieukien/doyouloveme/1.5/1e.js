function checkhocluc() {
    let kt= +document.getElementById("kt").value
    let gk= +document.getElementById("gk").value
    let ck= +document.getElementById("ck").value
    let tb = (kt+gk+(ck*2))/3
    if (tb>=8.0 && tb<=10.0) {
        alert("học giỏi: khen thưởng")
    }else if (tb<8.0 && tb>=6.5) {
        alert("học khá: khen thưởng")
    }else if (tb>=5.0 && tb<6.5) {
        alert("học trung bình: viết kiểm điểm,mời phụ huynh lên")
    }else {
        alert("học dốt: ở lại lớp k nói nhiều")
    }
}