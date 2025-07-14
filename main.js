const bodybg = document.getElementById("bodybg");
const name = document.getElementById("colorname");

colors = ["red", "green", "lightblue", "blue", "darkblue", "dodgerblue", "powderblue", "cornflowerblue", "coral", "cornsilk", "violet", "orange", "firebrick", "cyan", "darkcyan", "goldenrod", "gold", "maroon", "pink", "black", "white", "moccasin", "mediumorchid", "salmon", "aliceblue", "aqua", "aquamarine", "brown", "gray", "blue", "yellow", "purple", "fuchsia", "forestgreen", "peachpuff", "lemonchiffon", "navajowhite", "beige", "darkkhaki", "khaki", "yellowgreen", "tomato", "saddlebrown", "burlywood"];


function changebg(){
  
  randcolors = colors[Math.floor(Math.random()*colors.length)];
  
  name.innerHTML = bodybg.style.backgroundColor = randcolors;
  
  
  switch(randcolors){
    case "white":
      name.style.color = "black";
     break;
     
    case "black":
      name.style.color = "white";
     break;
     
    default:
    name.style.color = "black";
    break;
  }
}