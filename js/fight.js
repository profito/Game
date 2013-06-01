var roller = document.getElementById("roller"),
    i=0;
var route= 'bottom';
setInterval(function(){
    if(route == 'bottom'){
        (i<=190)? roller.style.top=i+++'px' : route = 'top';
    }else{
        (i>0)? roller.style.top=i--+'px' : route ='bottom';
    }
},0.1);