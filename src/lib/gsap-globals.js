import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let gsapRegistered = false;

export function ensureGsapGlobals() {
  if (!gsapRegistered) {
    gsap.registerPlugin(Observer, ScrollSmoother, ScrollTrigger);
    gsapRegistered = true;
  }

  globalThis.gsap = gsap;
  globalThis.Observer = Observer;
  globalThis.ScrollSmoother = ScrollSmoother;
  globalThis.ScrollTrigger = ScrollTrigger;
}
