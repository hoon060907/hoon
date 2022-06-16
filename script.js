document.addEventListener('DOMContentLoaded', function(){
    let bodycolor = document.querySelector("body");
    let themechange = document.querySelector(".themecolor");
    themechange.addEventListener('click', function(){
        if(bodycolor.style.backgroundColor == "rgb(49, 49, 49)"){
            bodycolor.style.backgroundColor = "white";
        }
        else if(bodycolor.style.backgroundColor == "white"){
            bodycolor.style.backgroundColor = "skyblue";
        }
        else{
            bodycolor.style.backgroundColor = "rgb(49, 49, 49)";
        }
    });
});