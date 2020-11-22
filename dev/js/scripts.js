import { GSDevTools } from "gsap/GSDevTools";
import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(GSDevTools);

GSDevTools.create();

import {logoMorphAnimation} from "./logoMorph";
import {waveAnimation} from "./logoMorph"


const MainTL = gsap.timeline({paused: true});
    
    MainTL.add(logoMorphAnimation());
        


       