
     
export function home(){
     
     const d = document,
     $home = document.createElement('section');
     
     $home.classList.add('home-screen')
     
     $home.innerHTML = `
          <div class="title">Inicio</div>
          <img src="../../assets/gif1.gif" class="head-banner-gif">
          
          <p>Tecnologías usadas</p>
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
               <img>
               <div id="basic-info">
                    <p>Nombre: Daniel</p>
                    <p>Apellido: Tenorio</p>
                    <p>Edad: 24 años</p>
                    <p>Idiomas: Español (materno), Inglés (avanzado)</p>
                    <p>Nacionalidad: Venezolano</p>
               </div>
               <div id="resume">
                    <p>Resumen:<p>
                    <p>Me considero una persona curiosa por naturaleza y siempre con ganas de aprender. Me gusta mucho la cocina, la fotografía y los videojuegos, además de la programación. Esta página es mi demostración de lo aprendido en pocos meses de aprendizaje, mi objetivo es profesionalizarme en la programación. Mi enfoque actual es la programación Front-End en JavaScript... Pero no será el único lenguaje en el que me enfoque de cara al futuro<p>
               </div>
          </div>
          </section>
     `;
     
     return $home;
}