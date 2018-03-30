export default class Neuron {
    private value: number
    private weight?: number

    constructor(value: number = null) {
        this.value = value
    }

    sigmoid(x: number) {
        return 1 / (1 + Math.exp(-1 * x))
    }
}