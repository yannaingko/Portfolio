// for scroll on hide menu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

    // for scroll animation
   gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray(".text-scroll").forEach(function (e) 
    {
    ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 20%",
        onEnter: function () 
        {
            gsap.fromTo(
                e,
                { y: 100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
        },
        onLeave: function () 
        {
            gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () 
        {
            gsap.fromTo(
                e,
                { y: -100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () 
        {
            gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
    });
    gsap.utils.toArray(".myimg").forEach(function (e) 
    {
    ScrollTrigger.create({
        trigger: e,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () 
        {
            gsap.fromTo(
                e,
                { x: -300, autoAlpha: 0 },
                {
                duration: 1.25,
                x: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
        },
        onLeave: function () 
        {
            gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () 
        {
            gsap.fromTo(
                e,
                { y: -300, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () 
        {
            gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
    });

    // for navbar
    var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

    mediaButton.onclick = function () 
    {
        "use strict";
        mainListDiv.classList.toggle("show_list");
        mediaButton.classList.toggle("active");
    };

// for loading screen

$(window).on("load", () =>{
    $('.load-wrapper').fadeOut("slow");
});

// for slide in and out

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

function callbackFunc() {
for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
    if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
    }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
}
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


// for dynamin date

document.getElementById("year").innerHTML = new Date().getFullYear();

