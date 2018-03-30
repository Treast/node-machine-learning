import Neuron from './Neuron'

export default class Layer {
    protected neurons: Neuron[]

    constructor(neurons: Neuron[] = []) {
        this.neurons = neurons
    }

    getNumberOfNeurons(): number {
        return this.neurons.length
    }

    getNeuron(index: number) {
        return this.neurons[index]
    }
}