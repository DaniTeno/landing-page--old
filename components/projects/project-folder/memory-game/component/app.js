import { Options } from "./OPTIONS.js";
import { routerMemoryGame } from "./router.js";
import { title } from "./title.js";


export function appMemoryGame(){
     const d = document,
          $projectOnDisplay = d.querySelector('.project-on-display'),
          $gameScreen = d.createElement('section')
     $projectOnDisplay.innerHTML= null;
     
     $gameScreen.classList.add('game-screen');

     if(!localStorage.getItem('game-option')){
          const gameOptions = new Options ("3", "8");
          localStorage.setItem('game-option', JSON.stringify(gameOptions));
     }
          
     $projectOnDisplay.appendChild(title());
     $projectOnDisplay.insertAdjacentElement('beforeend', $gameScreen);

     routerMemoryGame();
}