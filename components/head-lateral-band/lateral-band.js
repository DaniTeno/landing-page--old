export function lateralBand(){
     const d = document,
          $principalBand = document.createElement('aside')

     $principalBand.classList.add('principal-band')
     $principalBand.classList.add('slide-from-left')

     if(localStorage.getItem('lang').includes('es')){
          $principalBand.innerHTML = `
               <a href="#" id="logo">Logo</a>
               <nav>
                    <a href="/#">Inicio</a>
                    <a href="#about" id="about-lateral-btn">Acerca de mí</a>
                    <a href="/#/projects">Proyectos</a>
                    <a href="/#/social">Redes</a>
               </nav>
               <div id="lateral-bottom">
                    <p id="disclaimer-btn">i</p>
                    <p id="lang-es">ES</p>
                    <p id="lang-en">EN</p>
               </div>
          `;   
     }else {
          $principalBand.innerHTML = `
               <a href="#" id="logo">Logo</a>
               <nav>
                    <a href="/#">Home</a>
                    <a href="#about" id="about-lateral-btn">About Me</a>
                    <a href="/#/projects">Projects</a>
                    <a href="/#/social">Networks</a>
               </nav>
               <div id="lateral-bottom">
                    <p id="disclaimer-btn">i</p>
                    <p id="lang-es">ES</p>
                    <p id="lang-en">EN</p>
               </div>
          `;
     }
     
     


     return $principalBand
}