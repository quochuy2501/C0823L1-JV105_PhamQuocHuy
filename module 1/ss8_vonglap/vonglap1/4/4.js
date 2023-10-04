let c
let a=1
let b =1
for (;a<=b && a<1000 && b<1000 ;) {
        c=a+b
        // console.log(c)
        a=b
        b=c
    if (c%5===0) {
        document.write(c + " là số đầu tiên trong dãy số fibonacci chia hết cho 5 ")
        break
    }
}