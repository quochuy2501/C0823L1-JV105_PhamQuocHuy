let productList = [];

function displayProductList() {
    let productListHTML = "";
    for (let i = 0; i < productList.length; i++) {
        productListHTML += `
                    <tr>
                        <td>${productList[i]}</td>
                        <td>
                            <button class="custom-button" onclick="deleteProduct(${i})">Delete</button>
                            <button class="custom-button" onclick="editProduct(${i})">Edit</button>
                        </td>
                    </tr>
                `;
    }
    document.getElementById("productList").innerHTML = productListHTML;
}

function addProduct() {
    let productName = document.getElementById("productName").value;
    if (productName) {
        productList.push(productName);
        document.getElementById("productName").value = "";
        displayProductList();
    }
}

function editProduct(index) {
    let newProductName = prompt("Nhập tên mới cho sản phẩm:", productList[index]);
    if (newProductName !== null) {
        productList[index] = newProductName;
        displayProductList();
    }
}

function deleteProduct(index) {
    let confirmation = confirm("Bạn có muốn xoá sản phẩm này?");
    if (confirmation) {
        productList.splice(index, 1);
        displayProductList();
    }
}

displayProductList();