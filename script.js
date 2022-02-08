var vw = document.documentElement.clientWidth
var vh = document.documentElement.clientHeight
var firstRun = true

var marks = 0;
var runSpeed = 100;

if(vw < vh){
    alert("Not Supported For Mobile Phones...")
}

function eventHandler(event){
    if(firstRun){
        setInterval(f,500);
        firstRun = false;
    }
}

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
    var x = Math.floor(Math.random()*vw);
    var y = Math.floor(Math.random()*vh-100);
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