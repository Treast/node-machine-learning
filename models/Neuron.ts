export default class Neuron {
    private value: number
    private delta: number

    constructor(value: number = 0) {
        this.value = value
        this.delta = 0
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

    setDelta(delta: number) {
        this.delta = delta
    }
    
    getDelta() {
        return this.delta
    }
}