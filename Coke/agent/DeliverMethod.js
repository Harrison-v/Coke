import { DeliverGoods } from "./DeliverGoods.js"
import { Express } from "./Express.js"
import { Tradition } from "./Tradition.js"
export class DeliverMethod extends DeliverGoods {
    constructor(flag) {
        super();
        this.flag = flag;
    }
    selectMethod() {
        if (this.flag) { //如果flag为true，则选择快递代理方式发货
            let express = new Express(this.flag);
            return express.sendCoke("快递公司代理");
        } else {//否则，门店自取
            let tradition = new Tradition(this.flag);
            return tradition.sendCoke("门店自取");
        }
    }
    sendCoke(method) {
        return null;
    }
}
