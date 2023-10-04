 let number = +prompt("Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?")
    let random = Math.floor(Math.random() * number)
    let check = +prompt ("Nhập số bạn đoán")
    let count = 0
    while (check!==random) {
        count++;
        if (count===3) {
            alert("Bạn hết số lần đoán")
            break;
        } else if (check<random) {
            alert("Số bạn đoán bé hơn");
        } else {
            alert ("Số bạn đoán lớn hơn")
        }
        check = +prompt ("Nhập số bạn đoán");
    }
    if (count === 3) {
        document.write("Bạn hết số lần đoán")
    } else {
        document.write("Bạn đã đoán đúng số. Chúc mừng bạn!")
    }

    