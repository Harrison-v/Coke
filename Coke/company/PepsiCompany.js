export class PepsiCompany {
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
        return "百事可乐公司";
    }
}
