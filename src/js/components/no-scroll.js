import { refs } from '../refs/refs';
const { bodySwitch } = refs;
export function noScrollBody() {
  bodySwitch.classList.toggle('no-scroll');
}
