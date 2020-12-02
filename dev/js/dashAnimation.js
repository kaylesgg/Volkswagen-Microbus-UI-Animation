import { gsap } from "gsap";
// import {DrawSVGplugin} from "gsap/DrawSVGPlugin";
//  gsap.registerPlugin(DrawSVGplugin);

const gearTL= gsap.timeline();

const musicTL= gsap.timeline();

const batteryTL= gsap.timeline();

const secondaryTL= gsap.timeline();

const speedometerTL= gsap.timeline();







export function gearAnimation(){
gearTL.from ("#gearShift", {alpha: 0, duration:.5}, "+=10.5")
 gearTL.fromTo ("#gearContainer", {y:600, alpha: 0}, {y:0, alpha:1, duration: 4});
 gearTL.from ("#Pg",{alpha:0, y:-60}) ;
 gearTL.from ("#Rg",{alpha:0, y:-90},"-=.4");
 gearTL.from ("#Dg",{alpha:0, y:-120},"-=.4");
 gearTL.from ("#Ng",{alpha:0, y:-180},"-=.4");
 gearTL.from ("#Tg",{alpha:0, y:-240},"-=.4");
 gearTL.from ("#Lg",{alpha:0, y:-300},"-=.4");
//  gearTL.to ("#gearStroke", {drawSVG:"100%", duration:2});
 gearTL.from ("#blueFill", {alpha: 0, duration: 2}, "-=2");



}

export function musicAnimation(){
 musicTL.from ("#leftContainer", {alpha: 0, duration:.5}, "+=10.5")
 musicTL.fromTo ("#leftContainer",{scale: .5},{scale: 1, duration: 2}); 
 musicTL.from ("#nav",{alpha:0, x:-90});
 musicTL.from ("#phone",{alpha:0, x:-90});
 musicTL.from ("#blueMusic",{alpha:0, x:-90});
 musicTL.from ("#settings",{alpha:0, x:-90});
 musicTL.from ("#musicSelector", {x:-130, duration:1, alpha:0});
 musicTL.to ("#blueMusic", {alpha:0})
 musicTL.from ("#musicOp",{alpha:0, duration:2},"-=1")
 musicTL.from ("#album",{alpha:0},"-=1")
 musicTL.to ("#song",{duration: 3, ease: "none"}, "-=2")
}

export function batteryAnimation(){ 
    batteryTL.from ("#iconColors", {alpha: 0, duration:.5}, "+=10.5")
}

export function secondaryAnimation(){
    secondaryTL.from("#weather", {alpha: 0, duration:.5}, "+=10.5")
    secondaryTL.from("#time", {alpha: 0, duration:.5}, "-=10.5")
    secondaryTL.from("#logoConst", {alpha: 0, duration:.5}, "-=10.5")
    // secondaryTL.from("#MPH", {alpha: 0, duration:.5}, "-=10.5")
}

export function speedometerAnimation(){
    speedometerTL.from ("#speedometer", {alpha: 0, duration:.5}, "+=10.5")
}
