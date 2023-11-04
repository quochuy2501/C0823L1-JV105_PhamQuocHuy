function Hero(image, top, left, size){
    this.image = image
    this.top = top
    this.left = left
    this.size = size

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />'
    }

    this.moveRight = function(){
        this.left += 200
    }
    this.moveDown = function() {

        this.top += 100// Điều chỉnh khoảng cách di chuyển xuống
    }
    this.moveLeft = function(){
        this.left -= 200
    }
    this.moveUp = function() {
        this.top -= 100; // Điều chỉnh khoảng cách di chuyển lên
    }
}

let hero = new Hero('doraemon.jpg', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
}
 function start2() {
     if (hero.left > window.innerWidth - hero.size){
         hero.moveLeft()
     }else
     if (hero.top > window.innerHeight - hero.size){
         hero.moveUp()
     }
     document.getElementById('game').innerHTML = hero.getHeroElement();
     setTimeout(start, 500)
 }



start()
start2()