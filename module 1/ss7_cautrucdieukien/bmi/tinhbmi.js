function tinhchisobmi() {
    let height = +document.getElementById("height").value;
    let weight = +document.getElementById("weight").value;
    let bmi = weight/(height^2);
    if (bmi < 18)
        document.write("underweight");
    else if (bmi < 25)
        document.write("normal");
    else if (bmi < 30)
        document.write("overweight");
    else
        document.write("obese")
}