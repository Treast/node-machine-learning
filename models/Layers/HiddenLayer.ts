import Layer from '../Layer'
import Neuron from '../Neuron'

export default class HiddenLayer extends Layer {
    constructor(numberOfNeurons: number = 1) {
        super()
        this.buildNeurons(numberOfNeurons)
    }

    private buildNeurons(numberOfNeurons: number) {
        for(let i = 0; i < numberOfNeurons; i++) {
            let weight = Math.random()
            this.neurons.push(new Neuron(weight))
        }
    }
}