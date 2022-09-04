var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var divs = document.querySelectorAll(".gridPart");
var classGridPart = document.getElementsByClassName("gridPart");
let inputNum = slider.value;
let size = inputNum * inputNum;
gridMaker(size, inputNum);
gridColorChange();

slider.oninput = function () {
  removeElementsByClass("gridPart");
    output.innerHTML = this.value;
    inputNum = output.innerHTML;
    size = inputNum * inputNum;
    gridMaker(size, inputNum);
    gridColorChange();
  }

  function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function gridMaker(gridSize,gridColumns){
    for(i = 0; i < gridSize; i++){
    var gridPart = document.createElement('div');
    gridPart.className = "gridPart";
    gridPart.id = i;
    document.getElementById('grid').appendChild(gridPart)
    document.getElementById("grid").style = ' grid-template-columns: repeat(' + gridColumns + ', auto); ';
    };
    divs = document.querySelectorAll("gridPart")
    classGridPart = document.getElementsByClassName("gridPart")
  }

  function gridColorChange(){
  for (i = 0; i < classGridPart.length; i++) {
    classGridPart[i].addEventListener("mouseover", changeColor);
  }
  }
function changeColor(e){
  document.getElementById(this.id).style = ' background-color: black;';
  e.stopPropagation();
}