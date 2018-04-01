import Network from './models/Network'
import Layer from './models/Layer'
import InputLayer from './models/Layers/InputLayer'
import HiddenLayer from './models/Layers/HiddenLayer'
import OutputLayer from './models/Layers/OutputLayer'
import Neuron from './models/Neuron'

let inputLayer = new InputLayer([new Neuron(1), new Neuron(2)])

let outputLayer = new OutputLayer(1.5)

let network = new Network()
network.setInputLayer(inputLayer)
network.setHiddenLayers(1, 2)
network.setOutputLayer(outputLayer)
network.initializeWeight()

network.train(2)

network.predict(new InputLayer([new Neuron(2), new Neuron(2)]))