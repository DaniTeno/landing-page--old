import { PopUpMessage } from "./popup-msg-obj.js"

export function disclaimer(){
     const d = document,
          $disclBtn = d.getElementById('disclaimer-btn'),
          disclaimerMsgObjEs = new PopUpMessage('disclaimer', 'Disclaimer: ninguno de los GIFs o imágenes son de mi autoría, son solo para uso académico.'),
          disclaimerMsgObjEn = new PopUpMessage('disclaimer', 'Disclaimer: none of the GIFs or images are my own, they are for academic use only.')
     
     if(localStorage.getItem('lang').includes('es')){
          $disclBtn.insertAdjacentElement('beforebegin', disclaimerMsgObjEs.createHTML(false, false, '3rem', false))
     }else{
          $disclBtn.insertAdjacentElement('beforebegin', disclaimerMsgObjEn.createHTML(false, false, '3rem', false))
     }
     d.addEventListener('mouseover', e=>{
          const $disc = d.querySelector(`#disclaimer-msg`)
          if(e.target == $disclBtn){
               $disc.style.visibility = 'visible'
               $disc.style.opacity = '1'
          }
          else{
               $disc.style.opacity = '0'
               $disc.style.visibility = 'hidden'
          }
     })
          

}