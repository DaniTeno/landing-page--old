
export function mobileSocial(){
     const d = document,
          $social = d.createElement('section')

     $social.classList.add('mobile-social')

     if(localStorage.getItem('lang').includes('es')){
          $social.innerHTML = `
               <div class="mobile-social-links">    
                    <div class="separator">
                         <div class="mobile-title">
                              Redes
                         </div>
                         <div class="social-direct">
                              <div id="icons">
                                   <figure id="Linkedin">
                                        <a href="https://www.linkedin.com/in/daniel-tenorio-sotillet-79b484216/" target="_blank" rel="noopener">
                                             <img  src="../../assets/icons8-linkedin-100.png">
                                        </a>
                                   </figure>

                                   <figure id="Github">
                                        <a href="https://github.com/Wukongsito/landing-page" target="_blank" rel="noopener">
                                             <img  src="../../assets/icons8-github-100.png">
                                        </a>
                                   </figure>

                                   <figure id="Facebook">
                                        <a href="https://www.facebook.com/dterror0011/" target="_blank" rel="noopener">
                                             <img src="../../assets/icons8-facebook-90.png">
                                        </a>
                                   </figure>

                                   <figure id="Instagram">
                                        <a href="https://www.instagram.com/phantasma.cam/" target="_blank" rel="noopener">
                                        <img  src="../../assets/icons8-instagram-100.png">
                                        </a>
                                   </figure>
                              </div>
                              <p id="social-name" class="hidden">-</p>
                         </div>
                    </div>
                    <div id="email">
                         <figure id="gmail">
                              <p>Déjame un mensaje</p>
                              <br>
                              <img src="../../assets/icons8-gmail-login-96.png">
                         </figure>
                         <form class="hidden">
                              <input type="text" name="name" placeholder="*Nombre" required autocomplete="off">
                              <input type="text" name="email" placeholder="Email" autocomplete="off">
                              <input type="text" name="subject" placeholder="Asunto" autocomplete="off">
                              <textarea name="msg-content" cols="60" rows="6" placeholder="*Deja tu mensaje aquí" required></textarea>
                              <input type="submit" value="Enviar" id="submit-btn">                       
                              <div class="loading-modal nodisplay">
                                   <img src="../../assets/oval.svg" alt="loading-img" id="loader-svg">
                              </div>
                         </form>
                    </div>                  
               </div>
               <img src="../../assets/mobile/social-bg.jpg" class="mobile-social-banner">       
          `;
     } else {
          $social.innerHTML = `
               <div class="mobile-social-links">    
                    <div class="separator">
                         <div class="mobile-title">
                              Networks
                         </div>
                         <div class="social-direct">
                              <div id="icons">
                                   <figure id="Linkedin">
                                        <a href="https://www.linkedin.com/in/daniel-tenorio-sotillet-79b484216/" target="_blank" rel="noopener">
                                             <img  src="../../assets/icons8-linkedin-100.png">
                                        </a>
                                   </figure>
                                   <figure id="Github">
                                        <a href="https://github.com/Wukongsito/landing-page" target="_blank" rel="noopener">
                                             <img  src="../../assets/icons8-github-100.png">
                                        </a>
                                   </figure>
                                   <figure id="Facebook">
                                        <a href="https://www.facebook.com/dterror0011/" target="_blank" rel="noopener">
                                             <img src="../../assets/icons8-facebook-90.png">
                                        </a>
                                   </figure>
                                   <figure id="Instagram">
                                        <a href="https://www.instagram.com/phantasma.cam/" target="_blank" rel="noopener">
                                        <img  src="../../assets/icons8-instagram-100.png">
                                        </a>
                                   </figure>
                              </div>
                              <p id="social-name" class="hidden">-</p>
                         </div>
                    </div>
                    <div id="email">
                         <figure id="gmail">
                              <p>Leave me a message</p>
                              <br>
                              <img src="../../assets/icons8-gmail-login-96.png">
                         </figure>
                         <form class="hidden">
                              <input type="text" name="name" placeholder="*Name" required autocomplete="off">
                              <input type="text" name="email" placeholder="Email" autocomplete="off">
                              <input type="text" name="subject" placeholder="Subject" autocomplete="off">
                              <textarea name="msg-content" cols="60" rows="6" placeholder="*Write your message here" required></textarea>
                              <input type="submit" value="Send" id="submit-btn">                       
                              <div class="loading-modal nodisplay">
                                   <img src="../../assets/oval.svg" alt="loading-img" id="loader-svg">
                              </div>
                         </form>
                    </div>                  
               </div>
               <img src="../../assets/mobile/social-bg.jpg" class="mobile-social-banner">       
          `;
     }
     return $social
}