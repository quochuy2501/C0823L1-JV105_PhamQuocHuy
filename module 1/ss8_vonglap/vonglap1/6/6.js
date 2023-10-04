let numbers = 30;
let count=0
let total=0
    for (let a=0;count<numbers;a++) {
            if (a%7===0) {
                total = total + a
                count++
            }
        }document.write(total)

