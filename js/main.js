/*** Created by yizhen on 2017/4/1.*/

$(document).ready(function(){
});

function loadIndex() {
/* Toggle SideNav and trigger svg animation */
    var x = document.getElementById("toggle-bar");
    x.style.width = "54px";
    /*build toggle button rule*/
    var count = 0;
    $("#toggle-bar").click(function() {
        count++;
        //even odd click detect
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        // on odd clicks do this
        if (isEven(count) === false) {
            openNav();
        }
        // on even clicks do this
        else if (isEven(count) === true) {
            closeNav();
        }
    });
    /* Set the width of the side navigation*/
    function openNav() {
        document.getElementById("sidenav").style.width = "400px";
        document.getElementById("container").style.marginLeft = "346px";
        document.getElementById("toggle-bar").style.left = 0;
        // Hamburger Animation
        var pleft = $("#path-left"),
            pright = $("#path-right"),
            tl = new TimelineMax();
        tl.to(pleft, 0.2, {rotation:45, transformOrigin:"70% 50%",x:4,y:1});
        tl.to(pright,0.2,{rotation:-45,transformOrigin:"30% 50%",x:-4,y:-3});
        tl.timeScale(1);
    };
    /* Set the width of the side navigation to 0*/
    function closeNav() {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("container").style.marginLeft = "0";
        // Hamburger Animation
        var pleft = $("#path-left"),
            pright = $("#path-right"),
            tl = new TimelineMax();
        tl.to(pleft, 0.2, {rotation:0, transformOrigin:"70% 50%",x:0, y:0});
        tl.to(pright,0.2,{rotation:0,transformOrigin:"30% 50%",x:0, y:0});
        tl.timeScale(1);
    }
    
/* Fix Jumpy problems caused by scroll magic */
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

/* Scroll Effect for index page*/
// build Scene scroll effect
    var controller;
    controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "1", duration: "200%"}});
    new ScrollMagic.Scene({triggerElement: "#uv-slide", duration:"100%"})
        .setTween("#uv-slide > div", {y: "100%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#todo-slide", duration:"100%"})
        .setTween("#todo-slide > div", {y: "100%", ease: Linear.easeNone})
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#dmf-slide", duration:"100%"})
        .setTween("#dmf-slide > div", {y: "100%", ease: Linear.easeNone})
        .addTo(controller);

// Card Content scroll effect
    var controller2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement:"#uv-slide", duration:"60%"})
        .setClassToggle("#uv-card","card") // add class to fade-out card
        //.addIndicators()
        //.on('start', function () {})
        .addTo(controller2);
    new ScrollMagic.Scene({triggerElement:"#todo-slide",duration:"60%"})
        .setClassToggle("#todo-card","card")
        .addTo(controller2);
    new ScrollMagic.Scene({triggerElement:"#dmf-slide",duration:"60%"})
        .setClassToggle("#dmf-card","card")
        .addTo(controller2);
}

function loadProject(){
    var x = document.getElementsByClassName("toggle-bar-proj");
    x[0].style.width = "54px";
    var header = document.getElementById("header");
    header.style.left = "100px";
    header.style.opacity = "1";

    var window_width = $(window).width() - $('.container-proj').width();
    var document_height = $(document).height() - $(window).height();
    // mousewheel scroll to horizontal
    $(function () {
            $("body").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 1);
                event.preventDefault();
            });
    });

    //back to the top button
    $('#top-btn').click(function(){
        $('body').animate({
            scrollLeft: 0
        }, 600);
    });
    // back to top btn stands out
    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.body.scrollLeft > 150 || document.documentElement.scrollLeft > 150) {
            document.getElementById("top-btn").style.backgroundColor = "rgba(255,255,255,1)";
        } else {
            document.getElementById("top-btn").style.backgroundColor = "rgba(255,255,255,0.20)";
        }
    }
}
