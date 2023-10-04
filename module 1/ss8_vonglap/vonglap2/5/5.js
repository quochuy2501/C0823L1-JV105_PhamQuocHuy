let tiengoc = prompt("Nhập số tiền bạn muốn cho vay")
let laisuathangnam = prompt("nhập lãi suất mong muốn")
let somamchovay = parseInt(prompt("Hãy nhập vào số năm bạn muốn cho vay"));
let laiphaitra
let tienlaithuve
for (let i = 1; i<=somamchovay; i++) {
    laiphaitra = tiengoc * (Math.pow((1 + laisuathangnam), i))
    tienlaithuve = parseInt(laiphaitra - tiengoc)
    document.write("Tiền lãi thu về năm thứ " + " " + i + " " + "là" + " " + tienlaithuve + "<br>")
}