export function formLogic(){
     const d = document,
          $social = d.querySelector('.social'),
          $form = $social.querySelector('form'),
          $modalLoading = $social.querySelector('.loading-modal')
     
     $social.addEventListener("submit", e=>{
          e.preventDefault();
          $modalLoading.classList.remove("nodisplay");

          fetch("https://ormsubmit.co/ajax/564ea8fced75a99de24c55ebd6d78043", {
               method: "POST",
               body: new FormData(e.target) //el FormData esta recibiendo el formulario entero atravez de el botón submit (que esta asociado al e.target en esta funcion)
          })
          .then(res => res.ok ? res.json() : Promise.reject())
          .then(json => {
               console.log(json);
               $modalLoading.innerHTML = `<p id="sended-msg">Enviado<p>`;                         
               setTimeout(()=>{
                    $modalLoading.classList.add("nodisplay");
               }, 2000)
          })
          .catch(err =>{
               console.log(err)
               $modalLoading.innerHTML = `<p id="sended-msg">Ocurrió un error :(<p>`;
               setTimeout(()=>{
                    $modalLoading.classList.add("nodisplay");
               }, 2000);  
          });
          $form.reset();
     });
     
}