export function formLogic(){
     const d = document,
          $main = d.querySelector('main'),
          $form = $main.querySelector('form'),
          $modalLoading = $main.querySelector('.loading-modal')
     
          $main.addEventListener("submit", e=>{
          e.preventDefault();
          $modalLoading.classList.remove("nodisplay");
          $modalLoading.innerHTML = '<img src="../../assets/oval.svg" alt="loading-img" id="loader-svg">'
          fetch("https://formsubmit.co/ajax/564ea8fced75a99de24c55ebd6d78043", {
               method: "POST",
               body: new FormData(e.target)
          })
          .then(res => res.ok ? res.json() : Promise.reject())
          .then(json => {
               console.log(json);
               (localStorage.getItem('lang').includes('es'))
                    ? $modalLoading.innerHTML = `<p id="sended-msg">Enviado</p>`                   
                    : $modalLoading.innerHTML = `<p id="sended-msg">Delivered</p>`;                         
               
               setTimeout(()=>{
                    $modalLoading.classList.add("nodisplay");
               }, 2000)
          })
          .catch(err =>{
               console.log(err);
               (localStorage.getItem('lang').includes('es'))
                    ? $modalLoading.innerHTML = `<p id="sended-msg">Ocurrió un error :(</p>`
                    : $modalLoading.innerHTML = `<p id="sended-msg">Something went wrong :(</p>`
               setTimeout(()=>{
                    $modalLoading.classList.add("nodisplay");
               }, 2000);  
          });
          $form.reset();
     });
     
}