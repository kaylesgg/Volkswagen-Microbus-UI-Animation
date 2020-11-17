import {gsap} from "gsap";


export function darkTealWaveAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#dTeal",{scale: 0}, {scale: 4, duration:2, rotation: 360, ease: ".easeNone", repeat: -1, paused: false, transformOrigin: "center"})
 }