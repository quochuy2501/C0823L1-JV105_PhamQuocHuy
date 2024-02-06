let array = ['2','3','4','1','4','6']
let n = +prompt("nhập số nguyên n")
let count=0
for (let i=0;i<array.length;i++) {
    for (let j=1;j<array.length;j++) {
        if(array[i]-array[j]===0){
            array.splice(i,0,'')
        }
        if(array[i]%n===0) {
            count++
        }
    }
document.write(count)
