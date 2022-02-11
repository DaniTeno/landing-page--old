import { home } from "./home.js";
import { social } from "./social.js";
import { homeLogic } from "./home-logic.js";
import { socialLogic } from "./social-logic.js";
import { formLogic } from "./form-logic.js";


export function router(){
     const d = document,
          $main = d.querySelector('main'),
          dElement = document.documentElement
          
     let hash = location.hash;

     if(hash == '#about'){
          $main.appendChild(home()) 
          homeLogic(); 
          scrollTo(0,dElement.clientHeight*2)
          d.addEventListener('click', e=>{
               if(e.target.matches('#about-lateral-btn')) scrollTo(0,dElement.clientHeight*2)
          })
     }
     else if(hash == '#/projects'){
          
     }
     else if(hash == '#/social'){
          $main.appendChild(social())
          socialLogic();
          formLogic();
     } 
     else{
          $main.appendChild(home())
          homeLogic(); 
     }
}