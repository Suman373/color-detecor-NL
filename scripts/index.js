// the neural network formed using the library
const net = new brain.NeuralNetwork();

// the model needs inputs and according outputs to be trained
//  we are training for XOR (exclusive OR)
net.train([
    {
        input:[0,0],
        output: [0]
    },
    {
        input:[0,1],
        output: [1]
    },
    {
        input:[1,0],
        output: [1]
    },
    {
        input:[1,1],
        output: [0]
    }
]);
const svgDiagram = document.getElementById("diagram");
svgDiagram.innerHTML = brain.utilities.toSVG(net);