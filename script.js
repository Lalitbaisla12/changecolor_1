var color = ["red", "blue", "violet", "purple", "pink", "cyan", "black", "green", "blue"];
var index = 0;
var cChangeColor = document.getElementById("btn");

cChangeColor.addEventListener("click", changecolor);

function changecolor() {
    if (index === color.length) {
        index = 0;
    }
    document.getElementById("mainContainer").style.backgroundColor = color[index]; 
    index++;
}

// var scale = 1;

// function increaseSize() {
//     var button = document.getElementById('btn');
//     scale += 0.1; 
//     button.style.transform = 'scale(' + scale + ')';
// }




