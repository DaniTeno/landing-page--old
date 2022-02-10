import { homeListeners } from "./home-listeners.js";

     
export function home(){
     
     const d = document,
     $home = document.createElement('section');
     
     $home.classList.add('home-screen')
     
     $home.innerHTML = `
          <div class="title">Inicio</div>
          <img src="../../assets/gif1.gif" class="head-banner-gif">
          
          <p>Tecnologías usadas</p>
          <div class="tech-used hidden">
               <figure id="html" class="hidden">
                    <img src="../../assets/htmlpng.png" style="padding: 15px">
               </figure>

               <figure id="css" class="hidden">
               <img src="../../assets/csspng.png">
               </figure>

               <figure id="js" class="hidden">
                    <img src="../../assets/jspng2.png">                    
               </figure>
          </div>

          <div id="text" class="hidden">
          </div>

          <p id="hi">-Te saluda Daniel Tenorio</p>
     `;
     
          homeListeners();     
     return $home;
}