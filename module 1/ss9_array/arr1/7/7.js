let arr=[]
for (let i=0;i<10;i++){
    arr[i]=parseInt(prompt("nhap so phan tu thu "+i))
}
let nhapso = parseInt( prompt("Nhập số cần kiểm tra :") );
let index = arr.indexOf(nhapso)
if (index!==-1) {
    for (let i= index;i<arr.length;i++) {
        arr[i] = arr[i+1]
    }
    arr.pop()
    arr.push(0)
    document.writeln(arr)
}
