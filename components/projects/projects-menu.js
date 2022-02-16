import { ProjectCard } from "./Project-Card-Obj.js"

export function projectsMenu(){
     const d = document,
          $projectsMenu = d.querySelector('.projects-menu')

     const projectsArray = [];

     function insertCardDOM(projectCard){
          const $card = d.createElement('div');
          $card.setAttribute('id', projectCard.id)
          $card.classList.add('project-card')
          $card.innerHTML = `
               <p class="card-title">${projectCard.title}<p>
               <p class="card-desc">${projectCard.description}<p>
          `;
          return $card
     }

     if(localStorage.getItem('lang').includes('es')){
          const MemoryGame = new ProjectCard('memory-game', 'Juego de Memoria', 'Un juego sencillo de memoria que está hecho bajo el consumo de una API REST del sitio pokeapi.co');
          projectsArray.push(MemoryGame);

          const CartaParaPau = new ProjectCard('carta-pau', 'Carta hecha para Pau <3', 'Si eres Paulina puedes ingresar a esta sección');
          projectsArray.push(CartaParaPau)

          const NoteApp = new ProjectCard('block-app', 'Block App', 'Un bloc de notas sencillo que usa el "localStorage" para guardar las notas, y asi disponer de ellas localmente')
          projectsArray.push(NoteApp);
          
     } else {
          const MemoryGame = new ProjectCard('memory-game', 'Memory Game', 'A simple memory game made using the API REST from the site pokeapi.co');
          projectsArray.push(MemoryGame);

          const NoteApp = new ProjectCard('block-app', 'Block App', 'A simple note-block app using the local storage to save the notes')
          projectsArray.push(NoteApp);

     }

     for (let i = 0; i < projectsArray.length; i++) {
          $projectsMenu.insertAdjacentElement('beforeend', insertCardDOM(projectsArray[i]))
     }

}