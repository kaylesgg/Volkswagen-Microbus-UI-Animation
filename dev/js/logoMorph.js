import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const logoTL= gsap.timeline();

//const waveTL= gsap.timeline();

//gsap.set("#peace", {transformOrigin:"50%, 50%", xPecent: -50, yPercent: -50});
export function logoMorphAnimation(){
    //logoTL.to ("#peace", {duration: 2, morphSVG: "#logoPaths" });
    return logoTL;   
 }

//  export function waveAnimation (){
//  // waveTL.fromTo ()

// }