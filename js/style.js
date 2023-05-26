  $(".hexagon").css("overflow","hidden");
  
  // responsive navbar 
  $(".menu-btn").on("click",function(){
    $('.menu').toggleClass("show");
  });
  
  // for Navbar separate 2 type on scroll
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var headerCard = document.querySelector(".header-card");
var h_card = document.querySelector(".h-card");
var menubar = document.querySelector(".menubar");
var sticky = navbar.offsetTop +1;
var firstCard = document.querySelector(".first-card")
function myFunction() {
  if (window.pageYOffset >= sticky) {
    headerCard.classList.add("sticky-top");
    menubar.classList.remove("col-10");
    headerCard.style.width = "100vw";
    h_card.style.marginTop = '40px';
    h_card.style.borderRadius = '10px';
    h_card.style.height = "550px"; 
    menubar.style.width = "100vw";
    menubar.style.transition = "1s";
    menubar.style.borderRadius = 0;
    firstCard.style.marginTop = '100px'
    document.body.style.width = "100%";
    document.body.style.overflowX = "hidden";
    headerCard.style.paddingTop = 0;
    navbar.classList.add("container");
  } else {
    navbar.classList.remove("container");
    firstCard.style.marginTop = 0;
    menubar.classList.add("col-10")
    menubar.style.borderRadius = "10px 10px 0 0" ;
    headerCard.classList.remove("sticky-top");
    headerCard.style.paddingTop = "70px";
    headerCard.style.width = "100%";
    h_card.style.marginTop = 0;
    h_card.style.borderRadius = '0 0 10px 10px';
    h_card.style.height = "476px"; 
  }
}

// date
document.getElementById("year").innerHTML = new Date().getFullYear();

// skill exp edu 
$('.tag-proj').hide();
$(document).ready(function(){
  $(".skill").click(function(){
    $(".tag-skills").slideDown();
    $("#about").css("height","fit-content");  
    $(".skill-extra").slideDown();
    $(".tag-edu").hide();
    $(".tag-proj").hide();
  })
  $(".edu").click(function(){
    $(".tag-skills").hide();
    $("#about").css("height","fit-content");  
    $(".skill-extra").hide();
    $(".tag-proj").hide();
    $(".tag-edu").slideDown();
  })
  $(".project").click(function(){
    $(".tag-skills").hide();
    $("#about").css("height","fit-content");  
    $(".skill-extra").hide();
    $(".tag-edu").hide();
    $(".tag-proj").slideDown();
  })
})


// scroll trigger
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (e) 
{
ScrollTrigger.create({
    trigger: e,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
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
    onLeave: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
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
    onLeaveBack: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
});
});
gsap.utils.toArray(".revealUp2").forEach(function (e) 
{
ScrollTrigger.create({
    trigger: e,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
    gsap.fromTo(
        e,
        { y: 100, autoAlpha: 0 },
        {
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeave: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
    gsap.fromTo(
        e,
        { y: -100, autoAlpha: 0 },
        {
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeaveBack: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
});
});
gsap.utils.toArray(".slide").forEach(function (e) 
{
ScrollTrigger.create({
    trigger: e,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
    gsap.fromTo(
        e,
        { x: 100, autoAlpha: 0 },
        {
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeave: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
    gsap.fromTo(
        e,
        { x: -100, autoAlpha: 0 },
        {
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeaveBack: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
});
});
gsap.utils.toArray(".slide-alt").forEach(function (e) 
{
ScrollTrigger.create({
    trigger: e,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
    gsap.fromTo(
        e,
        { x: -100, autoAlpha: 0 },
        {
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeave: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
    gsap.fromTo(
        e,
        { x: 100, autoAlpha: 0 },
        {
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeaveBack: function () {
    gsap.fromTo(e, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
});
});

// footer media query
$(document).ready(function(){
  if(window.innerWidth < 420){
    $('.footer-profile').removeClass('col-2.5');
    $('.footer-content').removeClass('col');
    $('.footer-contact').removeClass('col');
    $('.footer-contact').css('padding','20px')
    $('.footer-contact').css('width','100%')
  }
});

// for project detail
$(document).ready(function() {
  $('.eco-btn').click(function(){
    $('.header-card').fadeToggle();
    $('.ecom').toggle('slide', {direction:'right'});
  });
  $('.bcm-btn').click(function(){
    $('.header-card').fadeToggle();
    $('.bcm').toggle('slide', {direction:'right'});
  });


  $('.rounded-list li').hover(
    function() {
      $(this).find('.child-list').fadeIn(500);
    },
    function() {
      $(this).find('.child-list').fadeOut(500);
    }
  );
  
  $('.child-list li').hover(
    function() {
      $(this).find('.grandchild-list').fadeIn(500);
    },
    function() {
      $(this).find('.grandchild-list').fadeOut(500);
    }  
  );

  $('.rectangle-list li').hover(
    function() {
      $(this).find('.child-list').fadeIn(500);
    },
    function() {
      $(this).find('.child-list').fadeOut(500);
    }
  );


});