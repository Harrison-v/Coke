import { DeliverGoods } from "./DeliverGoods.js"
export class Tradition extends DeliverGoods {
    constructor(flag) {
        super();
        this.flag = flag;
        this.m = null
    }
    sendCoke(method) {
        if (this.flag === false) {
            this.m = method;
        }
        return "您的订单已生成，请持订单到线下各大" +  this.m + "，谢谢！"
    }
    selectMethod() {
        return null;
    }
}
