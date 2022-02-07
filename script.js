var i1,i2,i3,i4
var created = false
var runSpeed = 100;
function eventHandler(event){
    if(event.key == " "){

        // var b1 = document.createElement("div");
        // b1.className = "d1";
        // b1.id = "box1";
        // b1.onclick = function (){alert(1)}
            
        // var b2 = document.createElement("div");
        // b2.className = "d2";
        // b2.id = "box2";
        // b2.onclick = function (){alert(1)}

        // var b3 = document.createElement("div");
        // b3.className = "d3";
        // b3.id = "box3";
        // b3.onclick = function (){alert(1)}


        // if(!created){
        //     document.body.appendChild(b1);
        //     document.body.appendChild(b2);
        //     document.body.appendChild(b3);
        //     created = true;
        // }

        // i1 = setInterval(n1,50,50);
        // i2 = setInterval(n2,150,150);
        // i3 = setInterval(n3,500,500);

        setInterval(f,500);
    }
}


// function n1(speed){
//     var x = parseInt(getComputedStyle(document.getElementById("box1")).marginLeft);
//     if(x <= 10)
//     clearInterval(i1)
//     x-=10;
//     speed/=1000;
//     document.getElementById("box1").style.marginLeft = x +"px";
//     document.getElementById("box1").style.transition = "all linear "+speed+"s";
// }

// function n2(speed){
//     var y = parseInt(getComputedStyle(document.getElementById("box2")).marginLeft);
//     if(y <= 10)
//     clearInterval(i2)
//     y-=10;
//     speed/=1000;
//     document.getElementById("box2").style.marginLeft = y +"px";
//     document.getElementById("box2").style.transition = "all linear "+speed+"s";
// }
marks = 0;
function n3(speed,id){
    var z = parseInt(getComputedStyle(document.getElementById(id)).marginLeft);

    z-=10;
    if(z<0){
        if(document.getElementById(id).style.visibility != "hidden"){
            alert("Your Marks : "+marks);
            window.location.reload();
        }
    }
    speed/=1000;
    document.getElementById(id).style.marginLeft = z +"px";
    document.getElementById(id).style.transition = "all linear "+speed+"s";
}

var i = 0;

function f(){
    var x = Math.floor(Math.random()*document.documentElement.clientWidth);
    var y = Math.floor(Math.random()*document.documentElement.clientHeight-100);
    if(y < 100)
    y+=120

    if(x<500)
    x+=500

    var b1 = document.createElement("div");
    b1.className = "d1";
    b1.id = "box"+i;
    b1.style.backgroundColor = "rgb("+x%200+","+y%105+","+y%100+")"
    b1.style.marginLeft = x+"px";
    b1.style.marginTop = y+"px";
    b1.onclick = function (){
        b1.style.visibility = "hidden";
        marks += 10;
        runSpeed-=2;
        document.getElementById('marks').innerText = marks;
    }
    document.body.appendChild(b1);
    setInterval(n3,runSpeed,runSpeed,"box"+i);
    i++;
}