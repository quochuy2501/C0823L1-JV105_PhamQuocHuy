let numbers = 20;
let count=0
let c
let a=1
let b =1
let total=0
for (;a<=b && a<1000 && b<1000 ;) {
    for (;count<numbers;count++){
        c=a+b
        // console.log(c)
        a=b
        b=c
        total = total + c
    }
    document.write(total)
}
