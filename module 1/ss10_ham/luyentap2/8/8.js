
function reversearray(arr) {
    //hàm đảo ngược bằng sort
    debugger
   arr.sort(function (){
       return -1
   })
    return arr
}
let arr=[0,1,2,3,4,5,6,7,8,9,10]
let result=reversearray(arr)
document.write("mảng đảo sau khi đảo ngược là: " +result)