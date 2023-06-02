export class Order {
    constructor(builder) {
        this.name = builder.getName();
        this.goods = builder.getGoods();
        this.address = builder.getAddress();
    }

    createOrder() {
        console.log("----订单已生成----");
        if (this.name != null) {
            console.log("顾客姓名：" + this.name);
        }
        console.log("购买的商品：" + this.goods);
        console.log("地址" + this.address);
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
