export default class Neuron {
    private value: number
    private delta: number
    public deltaModifier: number

    constructor(value: number = 0) {
        this.value = value
        this.delta = 0
        this.deltaModifier = 0
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

    setDeltaModifier(weight: number, delta: number) {
        this.deltaModifier += weight * delta
    }

    computeDelta() {
        this.delta *= this.deltaModifier
    }

    reset() {
        this.delta = 0
        this.deltaModifier = 0
    }

    hardReset() {
        this.reset()
        this.value = 0
    }
}