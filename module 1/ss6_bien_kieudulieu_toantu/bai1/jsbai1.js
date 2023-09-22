
function tinhDiemTrungBinh() {
  let physics = +document.getElementById("physics").value;
  let chemistry = +document.getElementById("chemistry").value;
  let biology = +document.getElementById("biology").value;
  let average = (physics + chemistry + biology)/3;
  alert(average)
}
