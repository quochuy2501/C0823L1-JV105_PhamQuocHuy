function xoa() {
 document.getElementById("result").value="" ;
}
function nhap(value) {
 document.getElementById("result").value+=value ;
}
function tinhToan() {
 let p = document.getElementById("result").value ;
 let q = eval(p);
 document.getElementById("result").value =q ;
}