let i = 0
let arr = []
let count=0
let result=""
function nhap() {
    arr[i]=document.getElementById("num").value
    i++
    document.getElementById("num").value=""
}
function hienthiketqua(){
    for(let i=0 ;i<=arr.length-1;i++){
        if (arr[i]<0) {
            result += "vị trí " + i + " trong mảng" +" : " + arr[i] + "<br/>"
            count++
        }
    }
    document.getElementById("ketqua").innerHTML = result
    alert("Số nguyên âm có trong mảng là: "+ count)
}