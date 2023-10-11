let arr=[]
for (let i=0;i<10;i++){
    arr[i]=parseInt(prompt("nhap so phan tu thu "+i))
}
let nhapso = parseInt( prompt("Nhập số cần kiểm tra :") );
if (arr.includes(nhapso)){
    document.writeln("V is in the array")
}else {
    document.writeln("V is not in the array")
}

