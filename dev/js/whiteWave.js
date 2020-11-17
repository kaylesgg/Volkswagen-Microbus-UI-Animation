import {gsap} from "gsap";


export function whiteWaveAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#white",{scale: 0}, {scale: 8, duration:2, rotation: 360, ease: ".easeNone", repeat: -1, paused: false, transformOrigin: "center"})
 }