let foot = parseInt(prompt("Nhap so foot"))
let meter = parseInt(prompt("Nhap so meter"))

function footToMeter(foot) {
    meter = 0.305 * foot
    return meter
}

function meterToFoot(meter) {
    foot = 3.279 * meter
    return foot
}

let resultmeter = footToMeter(foot)
document.write(resultmeter + "<br>")
let resultfoot = meterToFoot(meter)
document.write(resultfoot)