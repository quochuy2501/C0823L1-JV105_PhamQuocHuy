// cách 1 này e chạy k dc nên e làm cách 2 ở dưới, a coi thử cách này của e sao nó k chạy dc mà cách 2 ở dưới lại chạy dc vậy a

// let i=0
// let array = []
// let max =array[i]
// let index= 0
// function nhapso() {
//     if (i<10) {
//         array[i] = parseInt(prompt("hãy nhập số nguyên"))
//         i++
//         document.getElementById("num").innerHTML = array.join()
//     }
// }
// function timgiatrilonnhat() {
//     for (;i<array.length;i++){
//         if (array[i]>max){
//             max=array[i]
//             index=i
//         }
//     }
//     document.getElementById("display").innerHTML= max
//     document.getElementById("display2").innerHTML= index
// }
let array=[1,2,3,4,5,6,7,8,9,0];
let max=array[0];
let index=0;
let i= 0
for (;i<array.length;i++){
    if (array[i]>max){
        max=array[i];
        index=i;
    }
}
document.writeln("giá trị lớn nhất: "+max+ "<br/>"  +" tại vị trí thứ " + index+   " trong mảng")
