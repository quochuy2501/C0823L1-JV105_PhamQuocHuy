function prefix_sums(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = 0;
        for (var j = 0; j < i + 1; j++) {
            new_arr[i] += arr[j];
        }
    }
    return new_arr;
}

// console.log(prefix_sums([1, 2, 3, 4, 5]));
//
// console.log(prefix_sums([1, 2, -3, 4, 5]));
let arr=[];
let n=parseInt(prompt("nhap so luong phan tu cua mang: "))
for (let i=0;i<n;i++){
    arr[i]=parseInt(prompt("nhap so phan tu thu "+i+":"))
}
let result=prefix_sums(arr);
document.write("mang b la: "+result);