function eventHandler(event){
    if(event.key == " "){
        // n();
        setInterval(n,100);
    }
}


var x = parseInt(getComputedStyle(document.getElementById("box1")).marginLeft);
var y = parseInt(getComputedStyle(document.getElementById("box2")).marginLeft);
var z = parseInt(getComputedStyle(document.getElementById("box3")).marginLeft);

function n(){
    x-=10;
    y-=10;
    z-=10;
    document.getElementById("box1").style.marginLeft = x +"px";
    document.getElementById("box2").style.marginLeft = y +"px";
    document.getElementById("box3").style.marginLeft = z +"px";
}