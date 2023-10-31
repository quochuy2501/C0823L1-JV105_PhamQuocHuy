let foot = parseInt(prompt("Nhap so foot"))
let meter = parseInt(prompt("Nhap so meter"))

function footToMeter(foot) {
    let meter = 0.305 * foot
    return meter
}

let resultMeter = footToMeter(foot)
document.write(resultMeter + "<br>")

function meterToFoot(meter) {
    let foot = 3.279 * meter
    return foot
}

let resultFoot = meterToFoot(meter)
document.write(resultFoot)