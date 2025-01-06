let heading = document.getElementById("heading");
heading.innerHTML = 'INDIA'

const random_color = function(){
  const hex = '0123456789ABCDEF';
  let  color = '#'
  for(let i=0;i<6;i++)
  {
    color += hex[(Math.floor(Math.random() * 16))];
  }
  return color;
}

const button = document.getElementById('button').onclick = function(){
  const textElement = document.getElementById('text');
  textElement.style.color = random_color();
}