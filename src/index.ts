import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Yesid Perea Martinez';
  greetUser(name);
});
