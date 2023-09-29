function switchcase() {
    let month = +document.getElementById("month").value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("display").innerText = "tháng "+month+" có 31 ngày";
            break;
        case 2:
            document.getElementById("display").innerText = "tháng 2 có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("display").innerText = "tháng "+month+" có 30 ngày";
            break;
        // case 4:
        //     document.getElementById("display").innerText = "tháng 4 có 30 ngày";
        //     break;
        // case 5:
        //     document.getElementById("display").innerText = "tháng 5 có 31 ngày";
        //     break;
        // case 6:
        //     document.getElementById("display").innerText = "tháng 6 có 30 ngày";
        //     break;
        // case 7:
        //     document.getElementById("display").innerText = "tháng 7 có 31 ngày";
        //     break;
        // case 8:
        //     document.getElementById("display").innerText = "tháng 8 có 31 ngày";
        //     break;
        // case 9:
        //     document.getElementById("display").innerText = "tháng 9 có 30 ngày";
        //     break;
        // case 10:
        //     document.getElementById("display").innerText = "tháng 10 có 31 ngày";
        //     break;
        // case 11:
        //     document.getElementById("display").innerText = "tháng 2 có 28 hoặc 29 ngày";
        //     break;
        // case 12:
        //     document.getElementById("display").innerText = "tháng 2 có 28 hoặc 29 ngày";
        //     break;

    }
}