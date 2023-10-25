function checkcharacters(a) {
    Number.isFinite(a)
    return a
}
let input = prompt("Nhập ký tự ")
let result = checkcharacters(input)
document.write(result)
