import { changeLang } from "./components/head-lateral-band/change-lang.js";
import { disclaimer } from "./components/head-lateral-band/disclaimer-logic.js";
import { lateralBand } from "./components/head-lateral-band/lateral-band.js"
import { principalScreen } from "./components/principal-screen/principal-screen.js";

const d = document,
     $main = document.querySelector('main')

// alert('Este sitio aún está en construcción')
if(!localStorage.getItem('lang')) localStorage.setItem('lang', navigator.language)

d.addEventListener('DOMContentLoaded', e=>{
     scrollTo(0,0)
     $main.insertAdjacentElement('beforebegin', lateralBand());
     principalScreen();
     disclaimer();
     changeLang();
})

window.addEventListener('hashchange', e=>{
     let hash = location.hash;
     console.log(hash)
     scrollTo(0,0)
     principalScreen();
})