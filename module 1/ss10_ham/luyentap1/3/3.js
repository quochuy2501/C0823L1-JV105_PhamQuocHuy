 function alertsum(num1,num2){
    if (num1>num2){
    alert("so thu 1 lon hon so thu 2")
}else {
    return num1+num2;
}
}
let num1= parseInt(prompt("nhap so thu 1"))
let num2 = parseInt(prompt("nhap so thu 2"))
let result = alertsum(num1,num2)
    document.writeln(result)