import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const gearTL= gsap.timeline();

const musicTL= gsap.timeline();

const batteryTL= gsap.timeline();

const secondaryTL= gsap.timeline();

const speedometerTL= gsap.timeline();







export function gearAnimation(){
 gearTL.from ("#gearShift", {alpha: 0, duration:1}, "+=5.5");
 gearTL.fromTo ("#gearContainer", {y:600, alpha: 0}, {y:0, alpha:1, duration: 2});
 gearTL.from ("#Pg",{alpha:0, y:-60}) ;
 gearTL.from ("#Rg",{alpha:0, y:-90},"-=.4");
 gearTL.from ("#Dg",{alpha:0, y:-120},"-=.4");
 gearTL.from ("#Ng",{alpha:0, y:-180},"-=.4");
 gearTL.from ("#Tg",{alpha:0, y:-240},"-=.4");
 gearTL.from ("#Lg",{alpha:0, y:-300},"-=.4");
 gearTL.fromTo ("#gearStroke",{drawSVG:"0%"},{duration: 1.5, drawSVG: "100%"});
 gearTL.from ("#gearSelect", {alpha: 0, duration: 1});



}

export function musicAnimation(){
 musicTL.from ("#leftContainer", {alpha: 0, duration:.5}, "+=5.5")
 musicTL.fromTo ("#leftContainer",{scale: .5},{scale: 1, duration: 2}); 
 musicTL.from ("#nav",{alpha:0, x:-90});
 musicTL.from ("#phone",{alpha:0, x:-90});
 musicTL.from ("#blueMusic",{alpha:0, x:-90});
 musicTL.from ("#settings",{alpha:0, x:-90});
 musicTL.from ("#musicSelector", {x:-130, duration:1, alpha:0});
 musicTL.to ("#blueMusic", {alpha:0});
 musicTL.from ("#musicOp",{alpha:0, duration:2},"-=1");
 musicTL.from ("#album",{alpha:0},"-=1");
 musicTL.to ("#song",{duration: 3, ease: "none"}, "-=2");
}

export function batteryAnimation(){ 
    batteryTL.from ("#f1", {alpha: 0, duration: .5, ease:"bounce"}, "+=5.5");
    batteryTL.from ("#f2", {alpha: 0, duration: .5, ease:"bounce"});
    batteryTL.from ("#f3", {alpha: 0, duration: .5, ease:"bounce"});
    batteryTL.from ("#f4", {alpha: 0, duration: .6, ease:"bounce"});
    batteryTL.from ("#f5", {alpha: 0, duration: .6, ease:"bounce"});
    batteryTL.from ("#f6", {alpha: 0, duration: .7, ease:"bounce"});
    batteryTL.from ("#f7", {alpha: 0, duration: .8, ease:"bounce"});
    batteryTL.from ("#f8", {alpha: 0, duration: .9, ease:"bounce"});
}

export function secondaryAnimation(){
    secondaryTL.from ("#logoConst", {alpha: 0, duration:2, ease: "bounce"}, "+=7");
    secondaryTL.from ("#weather", {alpha: 0, duration:1},"-=1");
    secondaryTL.from ("#time", {alpha: 0, duration:1}, "-=1");

}

export function speedometerAnimation(){
    speedometerTL.fromTo ("#orangeStroke",{drawSVG:"0%"},{duration: 1.5, drawSVG: "100%"}, "+=3");
    speedometerTL.from ("#orangeSpeed", {alpha: 0, duration:.6});
    speedometerTL.fromTo ("#whiteInsideStroke",{drawSVG:"0%"},{duration: .8, drawSVG: "100%"});
    speedometerTL.from (".txt", {alpha: 0, duration:.8, ease: "bounce"});


    
    return speedometerTL;
}
