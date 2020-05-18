// let nav = document.getElementById("nav");
// let navTop = nav.offsetTop;


$(window).scroll(function () {
    let scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    let backTop = $("#world").offset().top - $(window).height();
    // console.log(backTop);
    if(scrollT +500 > backTop){
        $("#accessory .container .acc_main .fadeL").addClass("animated fadeInLeft").removeClass("fade");
        $("#accessory .container .acc_main .fadeR").addClass("animated fadeInRight").removeClass("fade");
        $("#accessory .container .acc_main .fadeD").addClass("animated fadeInDown").removeClass("fade");
        $("#accessory .container .acc_main .fadeU").addClass("animated fadeInDown").removeClass("fade");
    }


})

// window.onscroll = function () {
//     let backTop = document.documentElement.scrollTop || document.body.scrollTop;
//
//     if(backTop>navTop){
//         nav.style.position = "fixed";
//         nav.style.top = "0";
//         nav.style.left = "0";
//         nav.style.zIndex = "100";
//     }else{
//         nav.style.position = "";
//     }
// }




