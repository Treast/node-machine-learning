import Network from './models/Network'
import Layer from './models/Layer'
import Neuron from './models/Neuron'

let inputLayer = new Layer([new Neuron(0), new Neuron(0)])
let hiddenLayer = new Layer([new Neuron(), new Neuron()])
let outputLayer = new Layer([new Neuron(1)])

let network = new Network([
    inputLayer,
    hiddenLayer,
    outputLayer
])

