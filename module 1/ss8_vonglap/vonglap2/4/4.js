for (let i = 1; i <=10 ; i++) {
    for (let j = 1; j <= 20 ; j++) {
        if(i===1 || j===1 || i===10 || j===20){
            document.write("*");
        }else {
            document.write("&nbsp&nbsp");
        }
    }
    document.write("<br>");
}