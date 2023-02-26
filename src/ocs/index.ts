import { greetUser } from '$utils/greet';
import { raf } from '$utils/lenis';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'One City Schools';

  greetUser(name);

  requestAnimationFrame(raf);
});
