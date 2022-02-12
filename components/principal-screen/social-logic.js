export function socialLogic(){
     const d = document,
          $social = d.querySelector('.social'),
          $form = $social.querySelector('form'),
          $gmail = $social.querySelector('#gmail img'),
          $socialName = $social.querySelector('#social-name')

     
     $social.querySelector('.title').style.background = 'linear-gradient(to bottom, rgb(202, 125, 151), rgb(232, 125, 151))';
     d.querySelector('.principal-band').style.background = 'linear-gradient(to bottom, rgb(255, 118, 76), rgb(255, 118, 125))';

     
     $social.addEventListener('click', e=>{
          if(e.target == $gmail){
               $form.classList.toggle('hidden')
               $form.classList.toggle('slidein-from-right')
          } 
     });

     $social.addEventListener('mouseover', e=>{
          if(e.target.matches('.social-direct img')){
               $socialName.classList.toggle('hidden')
               $socialName.textContent = e.target.parentNode.parentNode.id
          } else {
               $socialName.classList.add('hidden')
          }
     })
}