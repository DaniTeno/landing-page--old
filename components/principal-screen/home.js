
     
export function home(){
     
     const d = document,
     $home = document.createElement('section');
     
     $home.classList.add('home-screen')
     
     $home.innerHTML = `
          <div class="title">Inicio</div>
          <img src="../../assets/gif1.gif" class="head-banner-gif">
          
          <p>Tecnologías</p>
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

          <section id="about-me">
          <div class="about">SOBRE MI</div>
          <div class="personal-info">
               <img src="../../assets/me-ico.jpeg">
               <div>
                    <div id="basic-info">
                         <div class="b1 hidden"> 
                              <p>Nombre</p>
                              <p>Daniel</p>
                         </div>
                         <div class="b2 hidden"> 
                              <p>Apellido</p>
                              <p>Tenorio</p>
                         </div>
                         <div class="b3 hidden"> 
                              <p>Edad</p>
                              <p> 24 años</p>
                         </div>
                         <div class="b4 hidden"> 
                              <p>Idiomas</p>
                              <p>Español (materno) / Inglés (avanzado)</p>
                         </div>
                         <div class="b5 hidden"> 
                              <p>Nacionalidad</p>
                              <p>Venezolano</p>
                         </div>                         
                    </div>

                    <div id="resume" class="hidden">
                         <p>Resumen</p>
                         <p>Me considero una persona curiosa por naturaleza, y siempre con ganas de aprender. Me gusta mucho la cocina, la fotografía y los videojuegos, además de la programación. Esta página es mi demostración de lo aprendido en pocos meses, mi objetivo es profesionalizarme en la programación. Mi enfoque actual es la programación Front-End en JavaScript... Pero no será el único lenguaje en el que me enfoque de cara al futuro</p>
                    </div>
               </div>
          </div>
          <img src="../../assets/about-me-bckgr.jpg" id="about-me-backg">
          </section>
     `;
     
     return $home;
}