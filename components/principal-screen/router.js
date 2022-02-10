import { home } from "./home.js";
import { social } from "./social.js";

export function router(){
     const d = document,
          $main = d.querySelector('main')
          
     let hash = location.hash;

     if(!hash || hash == '#/'){
          $main.appendChild(home())
     } else if(hash == '#/about'){
          $main.innerHTML = 'holas'
     }else if(hash == '#/projects'){
          
     }else if(hash == '#/social'){
          $main.appendChild(social())
     }
}