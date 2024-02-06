<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
crossorigin="anonymous"
    />
    <title>Title</title>
<style>
    table {
    /*border-collapse: collapse;*/
    width: 100%;
}

    th, td {
    /*border: 1px solid #ccc;*/
    /*text-align: left;*/
}
    th {
    background-color: #333;

}
</style>
</head>
<body>
<div class="container m-2">
    <button onclick="handleAddNewStudent()">Thêm mới học viên</button>
    <button onclick="handleShowEditStudent()">Sửa thông tin học viên</button>
    <button onclick="handleDeleteStudent()">Xóa học viên</button>
    <br>
        <br>
</div>
<div id="root" class="container m-2"></div>
<script>
    class Student {
    constructor(maHV, ten, lop,email,ngaySinh,module) {
    this.maHV = maHV;
    this.ten = ten;
    this.lop = lop;
    this.email=email;
    this.ngaySinh=ngaySinh;
    this.module=module;
}

    getmaHV() {
    return this.maHV;
}

    setmaHV(maHV) {
    this.maHV = maHV;
}

    getten() {
    return this.ten;
}

    setten(ten) {
    this.ten = ten;
}

    getlop() {
    return this.lop;
}

    setlop(lop) {
    this.lop = lop;
} getemail() {
    return this.email;
}

    setemail(email) {
    this.email = email;
} getngaySinh() {
    return this.ngaySinh;
}

    setngaySinh(ngaySinh) {
    this.ngaySinh = ngaySinh;
}
    getmodule() {
    return this.module;
}

    setmodule(module) {
    this.module = module;
}
}
    let students = [];

    let phuongTD = new Student( "HV-123", "PhuongTD","C1022G1","nguyendinhhauace@gmail.com","01/01/2004","module 1");
    let phuongTG = new Student( "HV-345", "PhuongTD","C1022G1","phamquochuy@gmail.com","02/09/2003","module 2");
    let phuongTH = new Student( "HV-678", "PhuongTD","C1022G1","nguyendinhhauace@gmail.com","01/01/2002","module 3");
    // let chanhTV = new Student();
    // chanhTV.setId(2);
    // chanhTV.setCode("HV-456");
    // chanhTV.setName("ChanhTV");
    // let haiTT = new Student(3, "HV-789", "HaiTT");

    students.push(phuongTD);
    students.push(phuongTH);
    students.push(phuongTG);
    // students.push(chanhTV);
    // students.push(haiTT);
    function displayStudents() {
    let studentData = `<table  class="table table-bordered">
        <thead>
          <tr>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Ngày sinh</th>
            <th>Module</th>
          </tr>
        </thead>
        <tbody>`;
    for (let i = 0; i < students.length; i++) {
    const student = students[i];
    studentData += `<tr>
            <td>${student.getmaHV()}</td>
            <td>${student.getten()}</td>
            <td>${student.getlop()}</td>
            <td>${student.getemail()}</td>
            <td>${student.getngaySinh()}</td>
            <td>${student.getmodule()}</td>

          </tr>`;
}
    studentData += `</tbody>
    </table>`;
    document.getElementById("root").innerHTML = studentData;
}
    displayStudents();
    //thêm mới
    function handleAddNewStudent() {
    let maHV = prompt('Nhập mã học vien: ');
    let ten = prompt('Nhập tên học viên: ');
    let lop = prompt('Nhập lớp');
    let email = prompt('Nhập email: ');
    let ngaySinh = prompt("Nhập ngày sinh: ");
    let module=prompt("nhập module: ")
    let student = new Student(maHV,ten,lop,email,ngaySinh,module);
    console.log(student);
    students.push(student);
    displayStudents();
}
    //sửa thông tin
    function handleShowEditStudent() {
    // Nhập mã học viên cần sửa thông tin
    const maHocVienCanSua = prompt("Nhập mã học viên cần sửa thông tin:");

    // Tìm học viên có mã tương ứng trong danh sách
    const studentToEdit = students.find(student => student.getmaHV() === maHocVienCanSua);

    if (studentToEdit) {
    // Nếu học viên tồn tại, cho phép người dùng chỉnh sửa thông tin
    const tenMoi = prompt("Nhập tên mới:");
    const lopMoi = prompt("Nhập lớp mới:");
    const emailMoi = prompt("Nhập email mới:");
    const ngaySinhMoi = prompt("Nhập ngày sinh mới:");
    const moduleMoi = prompt("Nhập module mới:");

    studentToEdit.setten(tenMoi);
    studentToEdit.setlop(lopMoi);
    studentToEdit.setemail(emailMoi);
    studentToEdit.setngaySinh(ngaySinhMoi);
    studentToEdit.setmodule(moduleMoi);

    // Cập nhật danh sách học viên hiển thị
    displayStudents();
} else {
    alert("Mã học viên không tồn tại");
}
}
    //xóa
    function handleDeleteStudent() {
    const maHocVienCanXoa = prompt("Nhập mã học viên cần xóa thông tin:");

    // Tìm học viên có mã tương ứng trong danh sách
    const studentToDelete = students.find(student => student.getmaHV() === maHocVienCanXoa);

    if (studentToDelete) {
    let confirmDelete = confirm(
    `Ban co muon xoa sinh vien này khong?`
    );
    if (confirmDelete) {
    let index = students.indexOf(studentToDelete);
    students.splice(index, 1);
    displayStudents();
}
}else {
    alert("khong tim thay")
}
}
</script>
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>