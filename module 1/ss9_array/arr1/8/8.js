let arr=[]
for (let i=0;i<10;i++){
    arr[i]=parseInt(prompt("nhap so phan tu thu "+i))
}
arr.sort(function (a, b) {
    return b - a
})
document.write(arr)