export class PopUpMessage {
     constructor(title, message){
          this.title = title+'-msg';
          this.message = message;   
     }
     createHTML(top = false, right = false, bottom = false, left = false) {
          const $element = document.createElement('div')
          
          $element.setAttribute('id', this.title);
          $element.innerHTML = this.message;

          $element.style.position = 'absolute';
          $element.style.backgroundColor = 'rgba(200, 200, 200, 0.6)';
          $element.style.color = '#fff'
          $element.style.top = top;
          $element.style.right = right;
          $element.style.bottom = bottom;
          $element.style.left = left;
          $element.style.visibility = 'hidden'
          $element.style.opacity = '0';
          $element.style.transition = 'ease .2s'

          return $element
     }
}