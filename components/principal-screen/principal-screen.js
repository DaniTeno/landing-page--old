import { router } from "./router.js"

export function principalScreen(){
     const d = document,
          $main = d.querySelector('main')
     $main.innerHTML = null;

     router();
}