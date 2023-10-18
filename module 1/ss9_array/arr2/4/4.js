let str = prompt("Nhập chuỗi vào đây");
let a = countstring(str);
function countstring(str) {
    // Sử dụng phương thức split() để tách chuỗi thành các từ dựa trên khoảng trắng
    let b = str.split(" ")
    let a = b.length
    return a
}
document.writeln("Chuỗi đã cho là: ",str + "<br>")
document.writeln("Số từ trong chuỗi là: " + a)
