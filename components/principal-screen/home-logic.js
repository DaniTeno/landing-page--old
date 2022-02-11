export function homeLogic(){
     const d = document,
          $home = d.querySelector('.home-screen'),
          $clock = d.createElement('div'),
          jsConcept = 'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).',
          cssConcept = 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
          htmlConcept = 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
          pageInfo = 'Esta es mi página de presentación, por ahora solo uso las 3 tecnologías base de la programación web, sin uso de frameworks o librerías externas, pero empleo técnicas de recorrido del DOM y el BOM, así como la consulta a API REST en alguna de las secciones. Siéntete libre de explorar.';
     
     $home.appendChild($clock);
     $clock.classList.add('clock') 
     
     $clock.innerHTML = `
     <p id="hour"></p> 
     <p id="blink">:</p> 
     <p id="minute"></p>
     `;
     
     let $minute = $home.querySelector('#minute'),
          $hour = $home.querySelector('#hour'),
          $blink = $home.querySelector('#blink')

     setInterval(()=>{
          let date = new Date(),
               hours = date.getHours(),
               minutes = date.getMinutes();
          $minute.textContent = `${minutes}`;
          $hour.textContent = `${hours}`;
          $blink.classList.toggle('blink')

          if(date.getHours() < 10) $hour.textContent = `0${date.getHours()}`;
          if(date.getMinutes()<10) $minute.textContent = `0${date.getMinutes()}`;
     }, 1000)

     d.addEventListener('scroll', e =>{       
          const dElement = document.documentElement,
               scrolled = dElement.scrollTop,
               $gifBanner = $home.querySelector('.head-banner-gif'),
               $test = $home.querySelector('#text');

          if(scrolled > dElement.clientHeight*0.3){
               $gifBanner.style.top = `${dElement.clientHeight*0.3}px`;
               $gifBanner.style.position = 'absolute';
               $clock.style.top = `${dElement.clientHeight*0.60}px`;
               $clock.style.position = 'absolute';

               let $fig = document.querySelectorAll('.hidden');
               $fig.forEach(figure => {
                    figure.classList.toggle('hidden')
                    figure.classList.toggle('show')
               });
          }

          if(scrolled > dElement.clientHeight*1.3){
               $test.classList.remove('hidden')
               $test.classList.add('show')
          }

          if(scrolled < dElement.clientHeight*0.3) {
               $gifBanner.style.position = 'fixed';
               $gifBanner.style.top = '0';
               $clock.style.position = 'fixed'
               $clock.style.top = '30vh'
               

               let $fig = document.querySelectorAll('.show')
               $fig.forEach(figure => {
                    figure.classList.add('hidden')
                    figure.classList.toggle('show')
               })
               $test.classList.add('hidden')
               $test.classList.remove('show')
          }
     });

     $home.addEventListener('mouseover', e=>{
          const $test = d.querySelector('#text'),
               $js = d.querySelector('#js img'),
               $css = d.querySelector('#css img'),
               $html = d.querySelector('#html img');

          if(e.target == $js) $test.textContent = jsConcept;
          else if(e.target == $css) $test.textContent = cssConcept;
          else if(e.target == $html) $test.textContent = htmlConcept;
          else if(e.target.matches('.tech-used')) return
          else $test.textContent = pageInfo;
     });
}