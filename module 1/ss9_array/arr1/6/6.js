let arr=[]
for (let i=0;i<10;i++){
    debugger
    arr[i]=parseInt(prompt("nhap so phan tu thu "+i))
}
let nhapso = parseInt( prompt("Nhập số cần kiểm tra :") );
if (arr.includes(nhapso)){
    document.writeln("V is in the array")
}else {
    document.write("V is not in the array")
}

