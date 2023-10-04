let n=100
for (let i=1 ;i<=n;i++) {
    if (i%3===0 && i%5!==0) {
        document.write("Fizz" + "<br>");
    } else if (i%5===0 && i%3!==0) {
        document.write("buzz" + "<br>") ;
    } else if (i%3===0 && i%5===0) {
        document.write("fizzbuzz" + "<br>") ;
    } else document.write(i + "<br>") ;
}