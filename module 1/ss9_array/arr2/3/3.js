let arr=["a","b","c","d",-1,0,1,2,3,4,5,6]
let count=0
let a = parseInt(arr.length)
for (let i=0;i<arr.length;i++){
    if (!isNaN(arr[i])){
        count++
    }
}
document.writeln("số ký tự số trong mảng: " + count + "<br>")
document.write("kích thước của mảng: " + a)