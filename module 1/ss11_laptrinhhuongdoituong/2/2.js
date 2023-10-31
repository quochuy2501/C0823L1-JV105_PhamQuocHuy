class temperature {
    constructor(C) {
        this.C = C
        this.F = (C*1.8)+32
        this.K = C+273.15
    }
}
let C = +prompt("nhap nhiet do")
document.writeln("nhiet do da nhap : "+C+" do C"+"<br>")
let result= new temperature(C)
document.writeln("nhiet do do F: "+result.F+"<br>")
document.write("nhiet do do K: "+result.K)