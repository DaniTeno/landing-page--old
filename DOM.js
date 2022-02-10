import { lateralBand } from "./components/head-lateral-band/lateral-band.js"
import { principalScreen } from "./components/principal-screen/principal-screen.js";

const d = document,
     $main = document.querySelector('main')

// alert('Este sitio aún está en construcción')

d.addEventListener('DOMContentLoaded', e=>{
     $main.insertAdjacentElement('beforebegin', lateralBand());
     principalScreen();
})

window.addEventListener('hashchange', e=>{
     let hash = location.hash;
     console.log(hash)
     // location.reload();
     scrollTo(0,0)
     principalScreen();
})