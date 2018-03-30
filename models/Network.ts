import Layer from './Layer'

export default class Network {

    private layers: Layer[]
    private iteration: number

    constructor(layers: Layer[]) {
        this.iteration = 0
        this.layers = layers
    }

    getInputLayer(): Layer {
        return this.layers[0]
    }

    getOutputLayer(): Layer {
        return this.layers[this.layers.length - 1]
    }

    activate() {
        // TODO: Implementation
    }

    backPropagate() {
        // TODO: Implementation
    }

    reassignWeight() {
        // TODO: Implementation
    }
}