import Neuron from './Neuron'

export default class Layer {
    
    private neurons: Neuron[]

    constructor(neurons: Neuron[]) {
        this.neurons = neurons
    }
}