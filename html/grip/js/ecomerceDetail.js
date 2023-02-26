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
            { x: 300, autoAlpha: 0 },
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
            { x: 300, autoAlpha: 0 },
            {
            duration: 1.25,
            x: 0,
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
