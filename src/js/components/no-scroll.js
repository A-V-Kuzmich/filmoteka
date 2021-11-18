import { refs } from '../refs/refs';
export function noScrollBody() {
  refs.bodySwitch.classList.toggle('no-scroll'); 
}