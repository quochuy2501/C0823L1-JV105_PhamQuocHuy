let str = prompt(["nhập 1 mảng vào đây"])
let arr= str.split('')
document.writeln(arr+"<br>");
for (let i=0; i<arr.length;i++){
    if(arr[i]==="-"){
        arr.splice(i,1,"_")
    }
}
document.write(arr)