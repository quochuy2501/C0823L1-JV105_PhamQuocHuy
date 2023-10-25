function findminnumber(number1,number2,number3){
    return Math.min(number1,number2,number3);
}
let num1=parseInt(prompt("nhap vao so thu nhat: "));
let num2=parseInt(prompt("nhap vao so thu hai: "));
let num3=parseInt(prompt("nhap vao so thu ba: "));
let result=findminnumber(num1,num2,num3);
document.write("so be nhat trong 3 so la: "+ result)