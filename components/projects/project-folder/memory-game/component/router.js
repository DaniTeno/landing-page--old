import { backBtn } from "./backBtn.js";
import { gameM } from "./game2.js";
import { menu } from "./menu.js";
import { optionsPage } from "./option-page.js";

export function routerMemoryGame(){
     const d = document,
          $gameScreen = d.querySelector('.game-screen')

     $gameScreen.insertAdjacentElement('beforeend', menu());

     $gameScreen.addEventListener('click', e=>{
          if(e.target.matches('#game-options')){
               $gameScreen.innerHTML= null;
               $gameScreen.insertAdjacentElement('beforeend',optionsPage())
          } 
          if(e.target.matches('#game-start')){
               $gameScreen.innerHTML= null;
               $gameScreen.insertAdjacentElement('beforeend',gameM())

          }
     })
}