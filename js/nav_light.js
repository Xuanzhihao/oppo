

window.onload = function(){
    let nav = document.getElementById("nav");
    let navTop = nav.offsetTop;

    window.onscroll = function () {
        let backTop = document.documentElement.scrollTop || document.body.scrollTop;

        if(backTop>navTop){
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.zIndex = "100";
        }else{
            nav.style.position = "";
        }
    }
}
