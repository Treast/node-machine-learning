export default class Neuron {
    private value: number

    constructor(value: number = 0) {
        this.value = value
    }

    sigmoid(x: number) {
        return 1 / (1 + Math.exp(-1 * x))
    }

    calculateActivation(input: number, weight: number) {
        this.value += input * weight
    }

    getValue() {
        return this.value
    }

    postActivation() {
        this.value = this.sigmoid(this.value)
    }


}