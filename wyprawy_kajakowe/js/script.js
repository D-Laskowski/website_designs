gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll(".about-section-element");

elements.forEach(a => {
  gsap.fromTo(a.children, {y: "+=100", opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 1, ease: "easeInOut",
  scrollTrigger: {
  trigger: a,
  start: "top 70%",
}});  
});

const nav = document.querySelector('nav');

gsap.to(nav,{y: "-=100", opacity: 0, duration: 0.5, ease: "easeInOut",
scrollTrigger: {
  trigger: nav,
  start: "500px top",
  scrub: 1,
}});
