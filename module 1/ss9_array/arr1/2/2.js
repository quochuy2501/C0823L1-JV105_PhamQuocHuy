// cach 1
let i = 0
let array = []

function nhapso() {
    if (i < 10) {
        array[i] = parseInt(prompt("hãy nhập số nguyên"))
        i++
        document.getElementById("num").innerHTML = array.join()
    }
}
function timgiatrilonnhat() {
    let max = array[0]
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            index = i
        }
    }
    console.log(max, index)
    document.getElementById("display").innerHTML = `Max: ${max}`
    document.getElementById("display2").innerHTML = `Index: ${index}`
}

// cach 2
// let soLuongPT = +prompt("Nhap so luong pt");


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let max = array[0]
// let index = 0
// let i = 0
// for (; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//         index = i
//     }
// }
// document.writeln("giá trị lớn nhất: " + max + "<br/>" + " tại vị trí thứ " + index + " trong mảng")
