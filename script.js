var i1,i2,i3,i4
var created = false

function eventHandler(event){
    if(event.key == " "){

        var b1 = document.createElement("div");
        b1.className = "d1";
        b1.id = "box1";
        
            
        var b2 = document.createElement("div");
        b2.className = "d2";
        b2.id = "box2";

        var b3 = document.createElement("div");
        b3.className = "d3";
        b3.id = "box3";


        if(!created){
            document.body.appendChild(b1);
            document.body.appendChild(b2);
            document.body.appendChild(b3);
            created = true;
        }

        

        i1 = setInterval(n1,50,50);
        i2 = setInterval(n2,150,150);
        i3 = setInterval(n3,500,500);
    }
}


function n1(speed){
    var x = parseInt(getComputedStyle(document.getElementById("box1")).marginLeft);
    if(x <= 10)
    clearInterval(i1)
    x-=10;
    speed/=1000;
    document.getElementById("box1").style.marginLeft = x +"px";
    document.getElementById("box1").style.transition = "all linear "+speed+"s";
}

function n2(speed){
    var y = parseInt(getComputedStyle(document.getElementById("box2")).marginLeft);
    if(y <= 10)
    clearInterval(i2)
    y-=10;
    speed/=1000;
    document.getElementById("box2").style.marginLeft = y +"px";
    document.getElementById("box2").style.transition = "all linear "+speed+"s";
}
function n3(speed){
    var z = parseInt(getComputedStyle(document.getElementById("box3")).marginLeft);
    if(z <= 10)
    clearInterval(i3)
    z-=10;
    speed/=1000;
    document.getElementById("box3").style.marginLeft = z +"px";
    document.getElementById("box3").style.transition = "all linear "+speed+"s";
}
