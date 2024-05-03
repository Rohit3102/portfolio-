gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



const box2 = document.querySelector('#sidebar');
const menu = document.querySelector('.menu');
let flag = 0;
menu.addEventListener('click', () => {


    if (flag == 0) {
        box2.style.right = '-0vw'
        box2.style.display = 'flex'
        menu.innerHTML = '<i class="ri-close-line"></i>'

        flag = 1;
    } else {
        box2.style.right = '-20vw';
        box2.style.display = 'none';
        menu.innerHTML = '<i class="ri-menu-line"></i>'

        flag = 0;
    }

})