export function homeLogic(){
     const d = document,
          $home = d.querySelector('.home-screen'),
          $clock = d.createElement('div'),
          jsConceptEs = 'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).',
          cssConceptEs = 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
          htmlConceptEs = 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
          pageInfoEs = 'Esta es mi página de presentación, por ahora solo uso las 3 tecnologías base de la programación web, sin uso de frameworks o librerías externas, pero empleo técnicas de recorrido del DOM y el BOM, así como la consulta a API en alguna de las secciones. Siéntete libre de explorar.',
          jsConceptEn = 'JavaScript (JS) is a lightweight, interpreted, or compiled just-in-time (just-in-time) programming language with first-class functions. While it is best known as a scripting language for web pages, and is used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat, JavaScript is a prototype-based programming language, multi-paradigm, single-threaded, dynamic, with support for object-oriented, imperative and declarative programming (eg functional programming).',
          cssConceptEn = 'CSS, in Spanish «Cascading Style Sheets», is a graphic design language to define and create the presentation of a structured document written in a markup language.',
          htmlConceptEn = 'HTML, short for HyperText Markup Language, refers to the markup language used to create web pages.',
          pageInfoEn = 'This is my presentation page, for now I only use the 3 base technologies of web programming, without the use of external frameworks or libraries, but I use BOM and DOM traversal techniques, as well as API queries in some of the sections. Feel free to explore.',
          $about = d.querySelector('.personal-info')
     
     $home.querySelector('.title').style.background = 'linear-gradient(to bottom, rgb(120, 30, 70), rgb(100, 10, 50)';
     d.querySelector('.principal-band').style.background = 'linear-gradient(to bottom, rgb(50, 6, 85), rgb(13, 3, 43)';

     $home.appendChild($clock);
     $clock.classList.add('clock') 
     
     $clock.innerHTML = `<p id="hour"></p><p id="blink">:</p><p id="minute"></p>`;
     
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
               scrollTopPercentaje = dElement.scrollTop*100/dElement.scrollHeight,
               scrollBottomPercentage = (dElement.scrollTop+dElement.clientHeight)*100/dElement.scrollHeight,
               $gifBanner = $home.querySelector('.head-banner-gif'),
               $text = $home.querySelector('#text'),
               $techUsedSection = $home.querySelector('.tech-used'),
               $b1 = $about.querySelector('.b1').classList,
               $b2 = $about.querySelector('.b2').classList,
               $b3 = $about.querySelector('.b3').classList,
               $b4 = $about.querySelector('.b4').classList,
               $b5 = $about.querySelector('.b5').classList,
               $resume = $about.querySelector('#resume').classList,
               $techUsedFig = $techUsedSection.querySelectorAll('.hidden'),
               $fig = document.querySelectorAll('.show'),
               $img = $about.querySelector('img').classList,
               $basicInfoDivs = $about.querySelectorAll('.slidein-from-right')


          if(scrollBottomPercentage > 30){
               $gifBanner.style.top = `${dElement.clientHeight*0.36}px`;
               $gifBanner.style.position = 'absolute';
               $clock.style.top = `${dElement.clientHeight*0.66}px`;
               $clock.style.position = 'absolute';

               $techUsedSection.classList.remove('hidden')
               $text.classList.remove('hidden')
               $text.classList.add('show')

               $techUsedFig.forEach(figure => {
                    figure.classList.toggle('hidden')
                    figure.classList.toggle('show')
               });
          }

          if(scrollBottomPercentage >= 130){
               $text.classList.remove('hidden')
               $text.classList.add('show')
          }

          if(scrollTopPercentaje < 11) {
               $gifBanner.style.position = 'fixed';
               $gifBanner.style.top = '0';
               $clock.style.position = 'fixed'
               $clock.style.top = '30vh'
          }
          if(scrollBottomPercentage < 30) {              
               $fig.forEach(figure => {
                    figure.classList.add('hidden')
                    figure.classList.toggle('show')
               })
               $text.classList.add('hidden')
               $text.classList.remove('show')
          }

          
          if(scrollBottomPercentage > 78){   
               setTimeout(()=>{
                    $b1.remove('hidden')
                    $b1.add('slidein-from-right')
               },600);
               setTimeout(()=>{
                    $b2.remove('hidden')
                    $b2.add('slidein-from-right')
               },800);
               setTimeout(()=>{
                    $b3.remove('hidden')
                    $b3.add('slidein-from-right')
               },1000);
               setTimeout(()=>{
                    $b4.remove('hidden')
                    $b4.add('slidein-from-right')
               },1200);
               setTimeout(()=>{
                    $b5.remove('hidden')
                    $b5.add('slidein-from-right')
               },1400);

               setTimeout(()=>{
                    $resume.remove('hidden')
                    $resume.add('slidedown')
                    $img.add('colors');
               }, 2200);             
          }

          if(scrollBottomPercentage < 65){
                    $basicInfoDivs.forEach(div =>{
                         div.classList.add('hidden')
                         div.classList.remove('slidein-from-right')
                    })
               $img.remove('colors')
               
          }

          if(scrollBottomPercentage < 65){
               $resume.add('hidden')
               $resume.remove('slidedown')
          }
          // console.log(scrollBottomPercentage,scrollTopPercentaje)
     });

     $home.addEventListener('mouseover', e=>{
          const $text = d.querySelector('#text'),
               $js = d.querySelector('#js img'),
               $css = d.querySelector('#css img'),
               $html = d.querySelector('#html img');
          if(localStorage.getItem('lang').includes('es')){
               if(e.target == $js) $text.textContent = jsConceptEs;
               else if(e.target == $css) $text.textContent = cssConceptEs;
               else if(e.target == $html) $text.textContent = htmlConceptEs;
               else if(e.target.matches('.tech-used')) return
               else $text.textContent = pageInfoEs;
          } else {
               if(e.target == $js) $text.textContent = jsConceptEn;
               else if(e.target == $css) $text.textContent = cssConceptEn;
               else if(e.target == $html) $text.textContent = htmlConceptEn;
               else if(e.target.matches('.tech-used')) return
               else $text.textContent = pageInfoEn;
          }
     });

}