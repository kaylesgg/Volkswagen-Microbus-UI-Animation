import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const logoTL= gsap.timeline();

const waveTL= gsap.timeline();

gsap.set(".wave", {transformOrigin:"50%, 50%", xPercent: 0, yPercent: 0 });
export function logoMorphAnimation(){
// logoTL.to ("#peace", {duration: 2, morphSVG: "#logoPaths" });
    logoTL.to ("#peace", {duration: 4, alpha: 0})
    logoTL.from ("#logoPaths", {duration: 4, alpha: 0}, "-=2")
    logoTL.to ("#logoPaths", {duration: 1, alpha: 0})

return logoTL;   
 }

 export function waveAnimation (){
    
     waveTL.fromTo ("#red", { scale: 0}, {duration: 1, scale: 1})
     waveTL.fromTo ("#orange", {scale: 0}, {duration: 1 ,scale: 1})
     waveTL.fromTo ("#lightOrange", {scale: 0}, {duration: 1 ,scale: 1})
     waveTL.fromTo ("#yellow", { scale: 0}, {duration: 1, scale: 1})
     waveTL.fromTo ("#teal", {scale: 0}, {duration: 1, scale: 1})
     waveTL.fromTo ("#darkTeal", {scale: 0}, {duration: 1, scale: 1})
     waveTL.fromTo ("#blue", {scale: 0}, {duration: 1, scale: 1})
     waveTL.fromTo ("#white", {scale: 0}, {duration: 1, scale: 5})
     waveTL.to (".wave", {duration: 1, alpha: 0})
     waveTL.to (".wave.", {duration:})
     waveTL.to (".wave", {rotate: -360, repeat: 1, duration: 5, ease: "none"},"-=11" )


}