var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
if(h>11){
    var s = "pm";
}
else{
    var s = "am";
}

document.getElementsByClassName(s)[0].classList.add("changeColor");

h = h - 12;

document.getElementsByClassName("h"+h)[0].classList.add("changeColor");

if(m>19){
    var m2 = m%10;
    var m = m-m2;

    if(m2 != 0){
        document.getElementsByClassName("m"+m)[0].classList.add("changeColor");
        document.getElementsByClassName("m"+m2)[0].classList.add("changeColor");
    }
    else{
        document.getElementsByClassName("m"+m)[0].classList.add("changeColor");
    }
}

else if(m!=0){
    document.getElementsByClassName("m"+m)[0].classList.add("changeColor");
}

function refresh(){
    window.location = window.location.href;
}

setInterval(refresh,1000);


