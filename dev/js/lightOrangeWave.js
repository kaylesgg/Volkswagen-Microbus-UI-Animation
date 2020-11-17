import {gsap} from "gsap";


export function lightOrangeWaveAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#yOrange",{scale: 0}, {scale: 4, duration:2, rotation: 360, ease: ".easeNone", repeat: -1, paused: false, transformOrigin: "center"})
 }