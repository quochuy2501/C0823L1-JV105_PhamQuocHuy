let a=parseInt(prompt("nhap so phan tu cua mnag: "))
let arr=[]
for (let i=0;i<a;i++){
    arr[i]=prompt("nhap phan tu thu "+i)
}
let rv=arr.reverse()
let dislay =rv.join()
document.writeln(dislay)