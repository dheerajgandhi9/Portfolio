// gsap code
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".landing", { y: "-100%", duration: 1 }, "-=1.1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }), "1";
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=1.4");
tl.fromTo(".scrolldown", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=1");
tl.fromTo(
  ".intro hr",
  { width: "1vw" },
  { width: "clamp(4.5rem, 8vw, 100px)", duration: 1 },
  "-=1.4"
);
tl.to(".sm", { x: "0%", duration: 0.8, stagger: 0.2 }, "-=1.2");

// navbar
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li ");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav-active");
    const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl1.fromTo(
      "nav ul li",
      { opacity: 0, marginLeft: "100px" },
      { marginLeft: "0%", opacity: 0.7, duration: 0.5, stagger: 0.2 }
    );
  });
};
navSlide();
