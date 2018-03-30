import Network from './models/Network'
import Layer from './models/Layer'
import InputLayer from './models/Layers/InputLayer'
import HiddenLayer from './models/Layers/HiddenLayer'
import OutputLayer from './models/Layers/OutputLayer'
import Neuron from './models/Neuron'

let inputLayer = new InputLayer([new Neuron(0), new Neuron(0)])

let outputLayer = new OutputLayer([new Neuron(1)])

let network = new Network()
network.setInputLayer(inputLayer)
network.setHiddenLayers(1, 2)
network.setOutputLayer(outputLayer)
network.initializeWeight()

network.activate()