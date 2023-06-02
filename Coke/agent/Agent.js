import { Message } from '../message/Message.js'
export class Agent{
    constructor() {
        const instance = this.constructor.instance;
        if (instance){
            return instance;
        }
        this.constructor.instance = this;
    }
    setMessage(message){
        this.message = message;
    }
    getMessage(){
        return this.message;
    }
    call(){
        return "代理商";
    }
}
