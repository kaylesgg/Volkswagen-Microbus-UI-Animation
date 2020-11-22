import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const logoTL= gsap.timeline();

const waveTL= gsap.timeline();


export function logoMorphAnimation(){
    logoTL.to ("#peace",{duration: 2, morphSVG: "#logoPaths" });




    
}

export function waveAnimation (){
  waveTL.fromTo

}