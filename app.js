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
	nav.addEventListener("click", () => {
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
// let t3 =gsap.timeline({
//   defaults: { ease: "power1.out" },
//   scrollTrigger:{
//          trigger:'.aboutus',
//          start:"center bottom"
//   }
// });
// let t4=gsap.timeline({
//   defaults: { ease: "power1.out" },
//   scrollTrigger:{
//          trigger:'.skills',
//          start:"center bottom"
//   }
// });
// t3.from(".a1", {y:20, opacity:0, duration:0.7, stagger:0.5});
// t3.from(".man",{x:-40, opacity:0, duration:1},"-=1");
// t4.from(".a2", {y:20, opacity:0, duration:0.7});
// let t5=gsap.timeline({
//   defaults: { ease: "power1.out" },
//   scrollTrigger:{
//          trigger:'.project',
//          start:"center bottom"
//   }
// });
// t5.from(".a3", {y:20, opacity:0, duration:0.5});

navSlide();

const boxes0 = gsap.utils.toArray(".scroll-animate0");
boxes0.forEach((box) => {
	gsap.fromTo(
		box,
		{ y: 50, opacity: 0 },
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes1 = gsap.utils.toArray(".scroll-animate1");
boxes1.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: -100, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes2 = gsap.utils.toArray(".scroll-animate2");
boxes2.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: 100, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes3 = gsap.utils.toArray(".scroll-animate3");
boxes3.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: -50, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes5 = gsap.utils.toArray(".scroll-animate5");
boxes5.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: 200, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes6 = gsap.utils.toArray(".scroll-animate6");
boxes6.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: -200, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});
const boxes4 = gsap.utils.toArray(".scroll-animate4");
boxes4.forEach((box) => {
	gsap.fromTo(
		box,
		{ x: 50, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: box,
				start: "top bottom",
				end: "center center",
				scrub: 1,
			},
		}
	);
});

//   gsap.fromTo(".skill1",
//     {, ,
//     scrollTrigger: {
// 	  trigger:".skill1",
// 	  start:"top bottom",
// 	  end:"center bottom",
//      scrub:1,
// 	}
//   }
//   );
