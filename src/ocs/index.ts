import { greetUser } from '$utils/greet';
import { lenis, raf } from '$utils/lenis';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'One City Schools';

  greetUser(name);

  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress });
  });

  requestAnimationFrame(raf);
});
