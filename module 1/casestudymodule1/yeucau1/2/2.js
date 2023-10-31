let Array = ["o","u","i","a","e","O","U","I","A","E"]
let input = prompt('Nhập ký tự cần kiểm tra:')
let check= Array.includes(input)
if (check) {
    document.write(`Ký tự ${input} là ký tự nguyên âm.`)
} else {
    document.write(`Ký tự ${input} là các ký tự phụ âm`)
}