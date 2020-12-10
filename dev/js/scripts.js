
import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin); 
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(GSDevTools);
GSDevTools.create();

import {logoMorphAnimation} from "./logoMorph";
import {waveAnimation} from "./logoMorph";
import {gearAnimation} from "./dashAnimation";
import {musicAnimation} from "./dashAnimation";
import {batteryAnimation} from "./dashAnimation";
import {secondaryAnimation} from "./dashAnimation";
import {speedometerAnimation} from "./dashAnimation";


const MainTL = gsap.timeline();
    
    MainTL
        .add(logoMorphAnimation())
        .add(waveAnimation())
        .add(gearAnimation())
        .add(musicAnimation())
        .add(batteryAnimation())
        .add(secondaryAnimation())
        .add(speedometerAnimation());
        // .play()


       