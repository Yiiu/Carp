export default class Hello {
    constructor (hello) {
        this.hello = hello

        this.init()
    }

    init () {
        console.log(this.hello)
    }
}