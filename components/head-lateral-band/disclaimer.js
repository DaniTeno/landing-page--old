export function disclaimer(){
     const d = document,
          $discl = d.createElement('p')

     $discl.classList.add('disclaimer-ad')

     $discl.textContent = 'disclaimer'

     return $discl
}