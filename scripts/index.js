// new neural network using the library
const network = new brain.NeuralNetwork();

// the model needs inputs and resp. outputs in order to be trained
//  we are training for input the R G B values of color
// 0<=r,g,b values<=1, i.e., not 0-255
const inputData = ([
    {
        input:{r:1,g:1,b:1},
        output: [0]
    },
    {
        input:{r:0,g:0,b:0},
        output: [1]
    },
]);
// train the network
network.train(inputData);

// dom elements
const colorBg = document.getElementById('color-box');
const whiteText = document.getElementById('white');
const blackText = document.getElementById('black');
const guessText = document.getElementById('ai-guess');

const whiteBtn = document.getElementById('white-btn');
const blackBtn = document.getElementById('black-btn');
const changeBtn = document.getElementById('change-btn');

let color; // random color var
setRandomColorBg();

function setRandomColorBg(){
    color = {
        r: Math.random(1),
        g: Math.random(1),
        b: Math.random(1),
    }
    const guessFromAI = network.run(color)[0]; // first el of arr from trained model 
    // if model returns value > 0.5, it means bg is dark, text must be white and vice versa
    guessText.style.color = guessFromAI > 0.5 ? "rgb(255,255,255)" : "rgb(0,0,0)";
    colorBg.style.backgroundColor = `rgb(${color.r * 255}, ${color.g*255}, ${color.b*255})`;
}

changeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    setRandomColorBg();
});

