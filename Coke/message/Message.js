import { Recipient } from "./Recipient.js"
export class Message {
    constructor(sender, recipient) {
        this.sender = sender;
        this.recipient = recipient;
    }
    clone(){
        return new this.constructor(this.sender, this.recipient)
    }

    getSender() {
        return this.sender;
    }

    setSender(sender) {
        this.sender = sender;
    }

    getRecipient() {
        return this.recipient;
    }

    setRecipient(recipient) {
        this.recipient = recipient;
    }
}
