const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".landing", { y: "-100%", duration: 1 }, "-=1.1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }), "1";
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=1.4");
tl.fromTo(".scrolldown", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=1");
tl.fromTo(
  ".intro hr",
  { width: "20px" },
  { width: "100px", duration: 1 },
  "-=1.4"
);
tl.to(".sm", { x: "0%", duration: 0.8, stagger: 0.2 }, "-=1.2");
