import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { greetUser } from '$utils/greet';
import { lenis, raf } from '$utils/lenis';

gsap.registerPlugin(ScrollTrigger);

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'One City Schools';

  greetUser(name);

  //get scroll value
  /*
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress });
  });
  */

  requestAnimationFrame(raf);

  // gsap.from('.section_home-ceo-message', { opacity: 0 });
  // console.log(gsap);

  const bigSquare = document.querySelector<HTMLDivElement>('[ic-element="big-square"]');
  const smallSquare = document.querySelector<HTMLDivElement>('[ic-element="small-square"]');

  /*
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-ceo-message',
      markers: true,
      start: 'top 20%',
      end: 'bottom 50%',
      scrub: 1,
    },
  });

  tl.from(bigSquare, { x: '-10rem', duration: 0.5 })
    .to(bigSquare, { y: '5rem', duration: 0.5 })
    .from(smallSquare, { x: '10rem', duration: 0.5 });
  */
  /*
  ScrollTrigger.create({
    trigger: '.section_home-ceo-message',
    markers: true,
    start: 'top 50%',
    end: 'top 20%',
    scrub: 1,
  });
  */

  ScrollTrigger.defaults({
    markers: false,
  });
  /*
  ScrollTrigger.create({
    start: 'top 80%',
    end: 'top bottom',
    trigger: '.nav',
    toggleClass: { targets: '.nav', className: 'is-active' },
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    scrub: true,
  });
  */

  /*
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-hero',
      start: 'top top',
      end: 'bottom 50%',
      scrub: true,
    },
  });

  tl.to('.nav', {
    backgroundColor: '#fff',
    color: '#000',
    duration: 1,
  });
*/

  const pageWrapperHeight = document.querySelector<HTMLDivElement>('.page-wrapper')?.offsetHeight;

  /*
  const changeColor = gsap.to('.nav', {
    backgroundColor: '#fff',
    color: '#000',
    duration: 0.5,
  });
  */

  const showAnim = gsap
    .from('.nav', {
      yPercent: -100,
      paused: true,
      duration: 0.5,
      color: '#000',
    })
    .progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: pageWrapperHeight,
    onUpdate: (self) => {
      console.log(self.direction);
      console.log(`Height ${pageWrapperHeight}`);
      if (self.direction === -1) {
        showAnim.play();
        // changeColor.play();
      } else {
        showAnim.reverse();
        // changeColor.reverse();
      }
    },
  });

  /*
  ScrollTrigger.create({
    start: 'top top',
    end: window.innerHeight,
    onUpdate: (self) => {
      console.log(self.progress);
      console.log(`Height ${window.innerHeight}`);
      if (self.progress > 0.2) {
        changeColor.play();
      } else {
        changeColor.reverse();
      }
    },
  });
*/

  console.log(`Height ${pageWrapperHeight}`);
  console.log(`Hero ${window.innerHeight / 2}`);

  ScrollTrigger.create({
    id: 'nav-bar',
    trigger: '.nav',
    start: '344',
    end: pageWrapperHeight,
    toggleClass: 'is-active',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    scrub: true,
    duration: 1,
  });

  /*
  ScrollTrigger.create({
    trigger: '.section_home-hero',
    start: 'bottom 50%',
    end: 'bottom 50%',
    onEnter: () => console.log('enter'),
    onLeave: () => console.log('leave'),
    onEnterBack: () => console.log('enterBack'),
    onLeaveBack: () => console.log('leaveBack'),
    scrub: true,
  });
*/
  // const triggerNavbar = ScrollTrigger.getById('navbar');
});
