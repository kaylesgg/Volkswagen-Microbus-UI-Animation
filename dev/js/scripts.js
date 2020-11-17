
import {gsap} from "gsap";


import {blueWaveAnimation} from "./blueWave";
import {darkTealWaveAnimation} from "./darktealWave";
import {tealWaveAnimation} from "./tealWave";
import {yellowWaveAnimation} from "./yellowWave";
import {lightOrangeWaveAnimation} from "./lightOrangeWave";
import {orangeWaveAnimation} from "./orangeWave";
import {redWaveAnimation} from "./redWave.js";
import { whiteWaveAnimation } from "./whiteWave";



const MainTL = gsap.timeline({paused: true})
    
    MainTL
        .add (redWaveAnimation())
        .add (orangeWaveAnimation())
        .add (lightOrangeWaveAnimation())
        .add (yellowWaveAnimation())
        .add (tealWaveAnimation())
        .add (darkTealWaveAnimation())
        .add (blueWaveAnimation())
        .add (whiteWaveAnimation())

        .play();