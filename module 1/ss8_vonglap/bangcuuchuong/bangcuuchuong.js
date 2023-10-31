let i
let j
let k = "<table border='1px'>"
for (i = 1; i < 10; i++) {
    //k+="<tr> tương đương với k= k + "<tr>"
    k += "<tr>"
    for (j = 2; j <= 10; j++) {
        k = (k + "<td>" + j + "*" + i + "=" + i * j + "</td>")
    }
    k += "</tr>"
}
k += "</table>"
console.log(k);
document.getElementById("table").innerHTML = k;