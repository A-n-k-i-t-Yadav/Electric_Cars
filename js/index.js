//for laoder
window.addEventListener('load', addloadpage);
function addloadpage()
{
  let preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
}
//text-typing animation

const texts= ['ELECTRIC CARS'];
let count=0;
let index=0;
let currentText='';
let letter = '';

(function type(){
  if(count===texts.length){
    count=0;
  }
  currentText = texts[count];
  letter=currentText.slice(0,++index);


  document.querySelector('.cars').textContent=letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
  }
  setTimeout(type,300)
})();
