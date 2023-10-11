// Kích thước của bàn cờ
let numRows = 4
let numCols = 4
// Lấy thẻ div của bàn cờ
let caroBoard = document.getElementById("caro-board");
// Tạo bàn cờ bằng vòng lặp for
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        // Tạo một ô mới
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-row", i);
        cell.setAttribute("data-col", j);

        // Bắt sự kiện click cho ô
        cell.addEventListener("click", function() {
            // Xử lý khi ô được click
            var row = this.getAttribute("data-row");
            var col = this.getAttribute("data-col");
            console.log("Clicked on Row " + row + ", Col " + col);
        });

        // Thêm ô vào bàn cờ
        caroBoard.appendChild(cell);
    }
}