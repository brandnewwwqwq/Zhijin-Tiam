Homeworks.aufgabe = 1;

  let hugo = "Hello World!";
  let gelb = "#FFFF00";



function init() {
  console.log(hugo);
  document.addEventListener('click', onMouseClick);

}

function onMouseClick() {
  let lampe = document.getElementById('lightbulb');
  if(lampe.getAttribute('fill') == gelb){
      lampe.setAttribute('fill', '#000000');
  }else{
      lampe.setAttribute('fill', gelb);
  }

}
