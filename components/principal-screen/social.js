export function social(){
     const d = document,
          $social = d.createElement('section')

     $social.classList.add('social')

     $social.innerHTML = `
          <div class="title">Redes</div>
          <img src="../../assets/social-banner.jpg" class="social-banner-gif">
          
          <div class="social-links">
               <figure id="linkedin">
                    <img src="../../assets/icons8-linkedin-100.png">
               </figure>

               <figure id="github">
                    <img src="../../assets/icons8-linkedin-100.png">
               </figure>

               <figure id="facebook">
                    <a href="https://www.facebook.com/dterror0011/" target="_blank" rel="noopener">
                         <img src="../../assets/icons8-facebook-90.png">
                    </a>
               </figure>

               <figure id="instagram">
                    <img src="../../assets/icons8-instagram-100.png">
               </figure>

               <figure id="gmail">
                    <img src="../../assets/icons8-gmail-login-96.png">
               </figure>
          </div>
     `;

     return $social
}