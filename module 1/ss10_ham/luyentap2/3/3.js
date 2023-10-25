function tinhGiaiThua(a){
    if (a===1 || a===0){
        return 1
    }else {
        let x=1
        for (let i=2;i<=a;i++){
            x=x*i
        }
        return x
    }

}
let input= parseInt(prompt("nhập số cần tính giai thừa"))
let result=tinhGiaiThua(input)
document.write("giai thua cua "+input+" la: "+result)