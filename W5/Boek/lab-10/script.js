let bal = function (id, color, width, height) {
    let right = true;
    let down = true;
    this.element = document.getElementById(id);
    this.element.style.width = width;
    this.element.style.height = height;
    this.element.style.backgroundColor = color;

    this.getX = function () {
        this.x = this.element.style.left;
        return (this.x.substring(0, this.x.length - 2))
    };

    this.getY = function () {
        this.y = this.element.style.top;
        return (this.y.substring(0, this.y.length - 2))
    };

    this.setX = function (pos) {
        this.element.style.left = pos + "px";
    }

    this.setY = function (pos) {
        this.element.style.top = pos + "px";
    }
}

let playIt = function (obj) {
    let xx = obj.getX();
    console.log(xx)

    if (obj.right){
        xx++;
        if (xx >= 350) obj.right = false;
    }
    if (!obj.right){
        xx--;
        if (xx <= 0) obj.right = true;
    }
    obj.setX(xx);

    let yy = obj.getY();
    console.log(yy)

    if (obj.down){
        yy++;
        if (yy >= 150) obj.down = false;
    }
    if (!obj.down){
        yy--;
        if (yy <= 0) obj.down = true;
    }
    obj.setY(xx);
}

bal1 = new bal('1', 'red', '50px', '50px');
bal2 = new bal('2', 'blue', '35px', '35px');
bal3 = new bal('3', 'green', '35px', '35px');

//setInterval
setInterval("playIt(bal1)", 10);
setInterval("playIt(bal2)", 3);
setInterval("playIt(bal3)", 8);