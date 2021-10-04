obj = {
    kleur: 'red',
    cirkel: document.getElementById('1')
}

//BIND
let verplaats = function (posX, posY, kleur) {
    this.cirkel.style.left = posX + "px";
    this.cirkel.style.top = posY + "px";
    this.cirkel.style.backgroundColor = kleur;
}
let mijnCirkel = verplaats.bind(obj);
mijnCirkel(160,20,"blue")


//APPLY
/*let setting = [50,100,'green'];
let verplaats = function (posX, posY, kleur){
    this.cirkel.style.left = posX + "px";
    this.cirkel.style.top = posY + "px";
    this.cirkel.style.backgroundColor = kleur;
}

verplaats.apply(obj, setting);*/


//CALL
/*let horizontaal = function (posX) {
    this.cirkel.style.left = posX + "px";
}
let verticaal = function (posY) {
    this.cirkel.style.top = posY + "px";
}
horizontaal.call(obj, 300);
verticaal.call(obj, 100);*/
