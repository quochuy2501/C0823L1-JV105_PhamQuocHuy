// let numbers = prompt("nhập n số nguyên tố đầu tiên")
let numbers = 5
let count = 0
let countsnt = 0
for (let i = 2; i < 1000; i++) {
    if (countsnt<numbers) {
        for (let j = 1; j <=i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(i)
            document.write(i + "<br>")
            countsnt++;
        }
        count=0
    }else {
        break
    }
}



