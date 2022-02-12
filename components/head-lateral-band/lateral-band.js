export function lateralBand(){
     const d = document,
          $principalBand = document.createElement('aside');

     $principalBand.classList.add('principal-band')
     $principalBand.classList.add('slide-from-left')

     
     $principalBand.innerHTML = `
          <a href="#" id="logo">Logo</a>
          <a href="/#">Inicio</a>
          <a href="#about" id="about-lateral-btn">Acerca de mí</a>
          <a href="/#/projects">Proyectos</a>
          <a href="/#/social">Redes</a>
     `;

     return $principalBand
}