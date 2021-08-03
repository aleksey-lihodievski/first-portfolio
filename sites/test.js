var obj = {};
var a=1;
var day=1;
var s="11";
var k=45.5;
obj.name = "abr";
obj.surname = "val";
console.log(obj.name + " " + obj.surname);
var arr1 = [ "html", "css" ]; 
var arr2 = [ "js", "c++" ];
var courses = arr2.concat(arr1); 
console.log(courses);
var r = Math.random()*10;
console.log(Math.round(r)); //вывод рандомного число от 1 до 10
window.onload = function main(){ 
    var h = window.innerHeight;
    var w = window.innerWidth;
    var burg = document.getElementById('burger');
    var modal = document.getElementById('modal');
    var area = document.getElementById('main');
    var item = document.getElementById('abs');
    burg.onclick = function mod(){
        document.getElementById('spisok').style.display="block";
    }

    function repeat(){
        var px=0;
        var py=0;
        px+=10;
        py+=2;
        if (px == 1000 || py == 200 ){
            clearInterval(t);
        };
        item.style.left = px + "px";
        item.style.top = py + "px";

    };
    this.addEventListener(click, move(), true);
    };