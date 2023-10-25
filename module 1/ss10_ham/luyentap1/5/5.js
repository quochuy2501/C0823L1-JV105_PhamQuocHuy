let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

function duyetStart(star){
    for (let i=0;i<star.length;i++){
        if (star1[i]===star){
            return star2[i];
        }
    }return "khong tim thay ngoi sao"
}
let star=prompt("nhap ten ngoi sao: ")
let result=duyetStart(star);
document.write(result)