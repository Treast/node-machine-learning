import Layer from '../Layer'
import Neuron from '../Neuron'

export default class OutputLayer extends Layer {
    private expectedValue: number

    constructor( expectedValue: number) {
        super([new Neuron()])
        this.expectedValue = expectedValue
    }

    getExpectedValue() {
        return this.expectedValue
    }
}