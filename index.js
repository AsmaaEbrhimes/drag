
let title = document.querySelector('.content h2')
let targets;
title.addEventListener('click', () => {
  let input=document.querySelector('.input')
  input.style.display='block'
  let text_area_sahape = document.querySelector('.text-area-sahape')
  let shapes = document.querySelector('.shapes')
  shapes.classList.add('shapes-width')
  text_area_sahape.classList.add('top')
})
let chooseelement ;
const move = () => {
  document.querySelectorAll('.shape').forEach((ele) => {
    ele.addEventListener('mousedown', () => {
      targets=ele
      chooseelement = ele;
      document.onmousemove = (e) => {
        if (chooseelement) {
          let x = e.pageX;
          let y = e.pageY;
          chooseelement.style.left = x - 50 + "px";
          chooseelement.style.top = y - 50 + "px";
        }
      };
    });
  });

  document.onmouseup = (e) => {
    chooseelement = null;
  };
};
move()


const getValueRange=(input)=>{
let value=+input.value
targets.style.width = value + 'px';
}

const getvaluenumber=(input)=>{
let number= +input.value
targets.style.width = number + 'px';
}


