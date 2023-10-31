let salary= +prompt("nhap luong cua nhan vien")
let netsalary
    if(salary>=15000000) {
        netsalary= salary-(salary*20/100)
        document.write("salary: "+salary+"VND"+"<br>")
        document.write("net salary: "+netsalary+"VND"+"<br>" )
        document.write("tax is 20%")
    }else if (salary>=7000000 && salary<15000000) {
        netsalary= salary-(salary*10/100)
        document.write("salary: "+salary+"VND"+"<br>")
        document.write("net salary: "+netsalary+"VND"+"<br>" )
        document.write("tax is 10%")
    }else {
        netsalary= salary-(salary*5/100)
        document.write("salary: "+salary+"VND"+"<br>")
        document.write("net salary: "+netsalary+"VND"+"<br>" )
        document.write("tax is 5%")
    }