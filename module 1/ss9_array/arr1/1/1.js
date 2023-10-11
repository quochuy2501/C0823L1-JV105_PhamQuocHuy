let i = 0;
let array = [];
function nhapso() {
    if (i<10) {
        array[i] = parseInt(prompt("hãy nhập số nguyên"))
        i++
        document.getElementById("num").innerHTML = array.join()
    }
}
function hienthiso(){
    let count=0;
    // let e="<hr/>"
    for(let i=0 ;i<10;i++){
        if (array[i]>=10) {
            // e += "Element " + i + " = " + array[i] + "<br/>";
            count++
        }
    }
    // document.getElementById("Result").innerHTML =e;
    document.getElementById("display").innerHTML = count
}
