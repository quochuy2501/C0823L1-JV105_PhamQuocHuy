function checknum(number){
    if(number>0 && Number.isInteger(number)){
        return true
    }else return false
}
let number=parseInt(prompt("nhap vao so can kiem tra: "))
let result=checknum(number)
document.write(result)