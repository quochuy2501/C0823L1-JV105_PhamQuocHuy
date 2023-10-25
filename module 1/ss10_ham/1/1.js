// let num = prompt("nhap so ban muon kiem tra")
// function isPrime(number) {
//     for (;num<10000;) {
//         if (num===0 && num===1) {
//             return num
//             // elert("so " + num + "khong phai la so nguyen to")
//         }else if (num%1===0 && num%num===0) {
//             return num
//             // elert("so " + num + "la so nguyen to")
//         }
//     }
// }
// isPrime(number)
// elert("so " + num + "khong phai la so nguyen to")
// elert("so " + num + "la so nguyen to")

function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false

        }
    }
    return true
}

for (let i = 0; i < 10000; i++) {
    if (isPrime(i)) {
        console.log(`${i} la so nguyen to`)
    }
}
