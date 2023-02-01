import { gsap } from "http://mywebsite.com/static/gsap.min.js";
console.clear();

const svg = document.querySelector('svg');
const surface = document.querySelectorAll('.surface path');
const radius = 48;
const pt = svg.createSVGPoint();

gsap.timeline({repeat:-1}.from('.redGlow', {opacity: 0, ease: 'circ'}, 0).from('.red', {attr:{r: '-=2'}, ease: 'circ'}, 0).to('.red', {duration: 0.9, ease:'power1.inOut', attr:{cy:340}, onComplete:()=>gsap.set('.redG',{attr:{mask:'url(#m2)'}}), onUpdate:()=>checkPaths('rgb(50,9,9)','.red')}, 0).to('.red', {attr:{r:'-=2'}, ease:'circ.in'}, 0.45).to('.redGlow', {opacity:0, ease:'circ.in'}, 0.45).to('.red', {duration:0.9, ease:'power1.inOut', attr:{cy:-30}, onComplete:()=>gsap.set('.redG',{attr:{mask:'none'}})}, 1).play(1.2));

gsap.timeline({repeat:-1}).from('.greenGlow', {opacity:0, ease:'circ'}, 0).from('.green', {attr:{r:'-=2'}, ease:'circ'}, 0).to('.green', {duration:0.9, ease:'power1.inOut', attr:{cx:25, cy:260}, onComplete:()=>gsap.set('.greenG',{attr:{mask:'url(#m2)'}}), onUpdate:()=>checkPaths('rgb(0,35,0)','.green')}, 0).to('.green', {attr:{r:'-=2'}, ease:'circ.in'}, 0.45).to('.greenGlow', {opacity:0, ease:'circ.in'}, 0.45).to('.green', {duration:0.9, ease:'power1.inOut', attr:{cx:335, cy:60}, onComplete:()=>gsap.set('.greenG',{attr:{mask:'none'}})}, 1).play(0.6)

gsap.timeline({repeat:-1}).from('.blueGlow', {opacity:0, ease:'circ'}, 0).from('.blue', {attr:{r:'-=2'}, ease:'circ'}, 0).to('.blue', {duration:0.9, ease:'power1.inOut', attr:{cx:10, cy:50}, onComplete:()=>gsap.set('.blueG',{attr:{mask:'url(#m2)'}}), onUpdate:()=>checkPaths('rgb(15,15,90)','.blue')}, 0).to('.blue', {attr:{r:'-=2'}, ease:'circ.in'}, 0.45).to('.blueGlow', {opacity:0, ease:'circ.in'}, 0.45).to('.blue', {duration:0.9, ease:'power1.inOut', attr:{cx:300, cy:280}, onComplete:()=>gsap.set('.blueG',{attr:{mask:'none'}})}, 1)

function checkPaths(color,t){
  for (let i=0; i<6; i++){
    const angle = (i/6 * Math.PI*2)- Math.PI/2
    pt.x = gsap.getProperty(t,'cx')+Math.round(Math.cos(angle)*radius)
    pt.y = gsap.getProperty(t,'cy')+Math.round(Math.sin(angle)*radius)
    for (let ii=0; ii<surface.length; ii++){
      if (surface[ii].isPointInFill(pt)) gsap.fromTo(surface[ii], {attr:{fill:color}}, {duration:0.2, attr:{fill:'rgb(11,11,11)'}, ease:'sine.inOut', overwrite:true})
    }
  }   
}
