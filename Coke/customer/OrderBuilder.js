import {Order} from "./Order.js"

export class OrderBuilder {
    constructor(name, goods, address) {
        this.name = name;
        this.goods = goods;
        this.address = address;
    }

    create() {
        return new Order(this);
    }

    getName() {
        return this.name;
    }

    getGoods() {
        return this.goods;
    }

    getAddress() {
        return this.address;
    }

}
