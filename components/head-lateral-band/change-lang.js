export function changeLang(){
     const d = document,
          $en = d.getElementById('lang-en'),
          $es = d.getElementById('lang-es')

     d.addEventListener('click', e=>{
          if(e.target == $en && localStorage.getItem('lang').includes('es')){
               localStorage.setItem('lang', 'en')
               location.reload()
          } 
          if(e.target == $es && !localStorage.getItem('lang').includes('es')){
               localStorage.setItem('lang', 'es')
               location.reload()
          } 
     })
}