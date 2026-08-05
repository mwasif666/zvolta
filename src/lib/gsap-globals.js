import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let gsapRegistered = false;

export function ensureGsapGlobals() {
  if (!gsapRegistered) {
    gsap.registerPlugin(Observer, ScrollTrigger);
    gsapRegistered = true;
  }

  globalThis.gsap = gsap;
  globalThis.Observer = Observer;
  globalThis.ScrollTrigger = ScrollTrigger;
}
