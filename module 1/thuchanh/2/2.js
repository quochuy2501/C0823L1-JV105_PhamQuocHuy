
let i = 0
let array = [];
let arr =[1,3,4,5,6]

function nhapso() {
    if (i < 1000000000000) {
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

function timgiatribenhat() {
    let min = array[0]
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            index = i
        }
    }
    console.log(min, index)
    document.getElementById("display3").innerHTML = `min: ${min}`
    document.getElementById("display4").innerHTML = `Index: ${index}`
}
