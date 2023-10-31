class Rectangle {
    constructor(width,height) {
    this.width = width
    this.height = height
    this.C = (width+height)*2
    this.S = width*height
    }
}
let width= +prompt("nhap chieu rong")
    document.write("<br>"+"chieu rong la: "+width+"<br>")
let height= +prompt("nhap chieu cao")
    document.write("chieu cao la: "+height+"<br>")
let result=new Rectangle(width,height)
document.write("C= "+result.C+"<br>")
document.write("S= "+result.S)
let c = document.getElementById("MyRectangle");
let ctx = c.getContext("2d")
ctx.fillStyle="red"
ctx.fillRect(50,35,result.width,result.height)



