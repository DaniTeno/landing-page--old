import { home } from "./home.js";
import { social } from "./social.js";
import { homeLogic } from "./home-logic.js";
import { socialLogic } from "./social-logic.js";
import { formLogic } from "./form-logic.js";
import { mobileHome } from "../../mobile/components/mobile-home.js";
import { mobileHomeLogic } from "../../mobile/components/mobile-home-logic.js";
import { mobileSocial } from "../../mobile/components/mobile-social.js";
import { mobileSocialLogic } from "../../mobile/components/mobile-social-logic.js";
import { projectsSection } from "../projects/projects-section.js";
import { projectsLogic } from "../projects/projects-logic.js";
import { projectsMenu } from "../projects/projects-menu.js";


export function router(){
     const d = document,
          $main = d.querySelector('main'),
          dElement = document.documentElement
    
     d.querySelector('aside').classList.remove('projects-aside')    
     d.querySelector('main').classList.remove('main-projects')  

          
     let hash = location.hash;
     if(dElement.clientWidth > 420){
          if(hash == '#about'){
               $main.appendChild(home());
               homeLogic(); 
               scrollTo(0,dElement.scrollHeight*0.76-dElement.clientHeight);
               d.addEventListener('click', e=>{
                    if(e.target.matches('#about-lateral-btn')) scrollTo(0,dElement.scrollHeight*0.76-dElement.clientHeight);
               });
          }
          else if(hash == '#/projects'){
               d.querySelector('aside').classList.add('projects-aside');
               d.querySelector('aside').classList.remove('slide-from-left');
               d.querySelector('.principal-band').style.background = 'linear-gradient(to bottom, rgb(167, 167, 167), #bbb)';
               $main.appendChild(projectsSection());
               projectsLogic();
               projectsMenu();
          }
          else if(hash == '#/social'){
               $main.appendChild(social());
               socialLogic();
               formLogic();
          } 
          else{
               $main.appendChild(home());
               homeLogic(); 
          }
     } else {       
          if(hash == '#about'){
               $main.appendChild(mobileHome());
               mobileHomeLogic();
               scrollTo(0,dElement.scrollHeight);
               d.addEventListener('click', e=>{
                    if(e.target.matches('#about-lateral-btn')) scrollTo(0,dElement.scrollHeight)
               });
          }
          else if(hash == '#/projects'){
               
          }
          else if(hash == '#/social'){
               $main.appendChild(mobileSocial());
               mobileSocialLogic();
               formLogic();
          } 
          else{
               $main.appendChild(mobileHome());
               mobileHomeLogic();
               d.addEventListener('click', e=>{
                    if(e.target.matches('#home-lateral-btn')) scrollTo(0,0)
               })
          }
     }
}