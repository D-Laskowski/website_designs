let nav = document.querySelector('.nav');
let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header .nav a');

window.onscroll = () =>{
    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });
}


gsap.registerPlugin(ScrollTrigger);

const a = document.querySelectorAll(".about");
a.forEach(a => {
  gsap.fromTo(a.children, {x: "-=300", opacity: 0}, {x: 0, opacity: 1, stagger: 0.8, duration: 1, ease: "easeInOut",
  scrollTrigger: {
  trigger: a,
  start: "top 70%",
}});  
});


const b = document.querySelectorAll(".prevent");
b.forEach(b => {
  gsap.fromTo(b.children, {x: "+=300", opacity: 0}, {x: 0, opacity: 1, stagger: 0.8, duration: 1, ease: "easeInOut",
  scrollTrigger: {
  trigger: b,
  start: "top 70%",
}});  
});

const c = document.querySelectorAll(".contact");
c.forEach(c => {
  gsap.fromTo(c.children, {y: "+=300", opacity: 0}, {y: 0, opacity: 1, stagger: 0.8, duration: 1, ease: "easeInOut",
  scrollTrigger: {
  trigger: c,
  start: "top 70%",
}});  
});
