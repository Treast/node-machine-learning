import Layer from './Layer'
import HiddenLayer from './Layers/HiddenLayer';
import InputLayer from './Layers/InputLayer';
import OutputLayer from './Layers/OutputLayer';

export default class Network {

    private layers: Layer[]
    private hiddenLayers: HiddenLayer[]
    private iteration: number
    private weight: number[][][]

    constructor() {
        this.iteration = 0
        this.hiddenLayers = []
        this.layers = []
        this.weight = [[[]]]
    }

    setHiddenLayers(numberOfHiddenLayers: number = 1, numberOfNeuronsOnAHiddenLayer: number = 1) {
        for(let i = 0; i < numberOfHiddenLayers; i++) {
            this.layers.push(new HiddenLayer(numberOfNeuronsOnAHiddenLayer))
        }
    }

    setInputLayer(inputLayer: InputLayer) {
        this.layers[0] = inputLayer
    }

    setOutputLayer(outputLayer: OutputLayer) {
        this.layers.push(outputLayer)
    }

    initializeWeight() {
        for(let i = 0; i < this.layers.length - 1; i++) {
            let layer = this.layers[i]
            let connectedLayer = this.layers[i+1]
            this.weight[i] = [[]]
            for(let j = 0; j < layer.getNumberOfNeurons(); j++) {
                this.weight[i][j] = []
                for(let k = 0; k < connectedLayer.getNumberOfNeurons(); k++) {
                    this.weight[i][j][k] = Math.random()
                }
            }
        }
    }

    getInputLayer(): Layer {
        return this.layers[0]
    }

    getOutputLayer(): Layer {
        return this.layers[this.layers.length - 1]
    }

    activate() {
        for(let i = 0; i < this.layers.length - 1; i++) {
            let layer = this.layers[i]
            let connectedLayer = this.layers[i + 1]

            for(let j = 0; j < layer.getNumberOfNeurons(); j++) {
                for(let k = 0; k < connectedLayer.getNumberOfNeurons(); k++) {
                    let weight = this.weight[i][j][k]
                    let neuron = layer.getNeuron(j)
                    let connectedNeuron = connectedLayer.getNeuron(k)

                    connectedNeuron.calculateActivation(neuron.getValue(), this.weight[i][j][k])
                }
            }
        }
        this.postActivating()
    }

    private postActivating() {
        for(let i = 1; i < this.layers.length; i++) {
            let layer = this.layers[i]
            for(let j = 0; j < layer.getNumberOfNeurons(); j++) {
                let neuron = layer.getNeuron(j)
                neuron.postActivation()
                console.log(neuron.getValue())
            }
        }
    }

    backPropagate() {
        // TODO: Implementation
    }

    reassignWeight() {
        // TODO: Implementation
    }
}