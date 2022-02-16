import { appMemoryGame } from "./app.js";

export function title(){
     const d = document,
          $title = d.createElement('span');
     
     $title.classList.add('memory-game-title')

     $title.innerHTML = `Poke-Memory`;

     $title.addEventListener('click', e=>{
          appMemoryGame();
     })

     return $title
}