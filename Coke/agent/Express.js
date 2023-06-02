import { DeliverGoods } from "./DeliverGoods.js"
export class Express extends DeliverGoods{

    constructor(flag) {
        super();
        this.flag = flag;
        this.m = null
    }

    sendCoke(method) {
        if(this.flag === true){
            this.m = method;
        }
        return "您的订单已生成，已经通过" + this.m + "方式为您发货，请注意查收！";
    }
    selectMethod() {
        return null;
    }

}
