function swapnumber(a, b) {
    let temp = a
    a = b
    b = temp
    return [a, b]
}
let num1 = parseInt(prompt("nhập số thứ 1"))
let num2 = parseInt(prompt("nhập số thứ 2"))
let result = swapnumber(num1, num2)
num1 = result[0]
num2 = result[1]
document.write("hoán đổi vị trí: " + num1 + "," + num2)