let arr =[]
let i = 0
function nhapso() {
    arr[i]=parseInt(document.getElementById("num").value) ;
    i++
    document.getElementById("num").value="";
}
function hienthiso(){
    let max=arr[0]
    let avr=0
    for(let i=0;i<arr.length;i++){
        avr+=arr[i];
        if (max<arr[i]) {
            max=arr[i]
        }
    }
    document.getElementById("Result").innerHTML ="Số lớn nhất là: "+ max
    document.getElementById("kq").innerHTML ="Trung bình cộng là: "+ (avr/arr.length)

}
