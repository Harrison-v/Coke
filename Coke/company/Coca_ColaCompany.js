export class Coca_ColaCompany {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;
    }

    getInstance() {
        return this.constructor.instance;
    }

    call() {
        return "可口可乐公司";
    }
}
