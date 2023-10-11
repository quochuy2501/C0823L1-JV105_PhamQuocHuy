let arr = ["1","4","2","7","9"]
let length = arr.length;
let reversedArray = [];
    for (let i = arr.length - 1; i>=0 ; i--) {
    reversedArray.push(arr[i]);
    }
document.write("Mảng cho sẵn: ",arr + "<br>");
document.write("Mảng đảo ngược: ",reversedArray.join());