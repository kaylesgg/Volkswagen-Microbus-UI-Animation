
import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// import {DrawSVGplugin} from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGplugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(GSDevTools);

GSDevTools.create();

import {logoMorphAnimation} from "./logoMorph";
// import {waveAnimation} from "./logoMorph"
// import {gearAnimation} from "./dashAnimation"
// import {musicAnimation} from "./dashAnimation"
// import {batteryAnimation} from "./dashAnimation"
// import {secondaryAnimation} from "./dashAnimation"


const MainTL = gsap.timeline();
    
    MainTL
        .add(logoMorphAnimation());
        // .add(gearAnimation());
        // .add (musicAnimation(),"-=4");
        // .add (batteryAnimation());
        // .add(secondaryAnimation());
        // .play()


       