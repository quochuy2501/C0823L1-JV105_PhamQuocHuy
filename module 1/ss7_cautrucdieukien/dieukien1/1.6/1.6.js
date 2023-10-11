let i = +prompt("Nhập doanh số bán hàng của bạn")
let giasanpham = 1000
let hoahong
    switch (i) {
        case (i<1000):
            hoahong =  giasanpham*i*(5/100)
            break
        case (i>=1000):
            hoahong = giasanpham*i*(8/100)
            break
    }
    alert(hoahong)