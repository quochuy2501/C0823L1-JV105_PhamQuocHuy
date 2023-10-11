function trans() {
    let arr1 = ["banana", "apple", "orange", "pen", "pencil", "book"]
    let arr2 = ["chuối", "táo", "cam", "bút", "bút chì", "sách"]
    let string = document.getElementById("nhap").value
    let index_arr1 = 0
    let index_arr2 = 0
    let result = ""
    for (let i = 0; i < arr1.length; i++) {
        if (string == arr1[i]) {
            index_arr1 = i
            for (let j = 0; j < arr2.length; j++) {
                if (index_arr1 == j) {
                    result = arr2[j]
                }
            }
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (string == arr2[i]) {
            index_arr2 = i
            for (let j = 0; j < arr1.length; j++) {
                if (index_arr2 == j) {
                    result = arr1[j]
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result
}


// function trans2() {
//     let arr1 = ["banana", "apple", "orange", "pen", "pencil", "book"]
//     let arr2 = ["chuối", "táo", "cam", "bút", "bút chì", "sách"]
//     let string = document.getElementById("nhap").value
//     let index_arr2 = 0
//     let result = ""
//     for (let i = 0; i < arr2.length; i++) {
//         if (string == arr2[i]) {
//             index_arr2 = i
//             for (let j = 0; j < arr1.length; j++) {
//                 if (index_arr2 == j) {
//                     result = arr1[j]
//                 }
//             }
//         }
//     }
//     document.getElementById("result").innerHTML = result
// }
