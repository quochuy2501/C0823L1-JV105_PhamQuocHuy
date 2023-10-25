function tinhbinhphuong(a) {
    a = a*a
    return a
}
let x= parseInt(prompt("Nhap 1 so bat ky"))
let result = tinhbinhphuong(x)
document.write("binh phuong cua " + x + " la: " + result)
