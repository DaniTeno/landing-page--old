import { home } from "./home.js";
import { social } from "./social.js";
import { homeLogic } from "./home-logic.js";
import { socialLogic } from "./social-logic.js";



export function router(){
     const d = document,
          $main = d.querySelector('main')
          
     let hash = location.hash;

     if(hash == '#/about'){
          $main.innerHTML = 'holas'
     }else if(hash == '#/projects'){
          
     }else if(hash == '#/social'){
          $main.appendChild(social())
          socialLogic();
     } else{
          $main.appendChild(home())
          homeLogic(); 
     }
}