import {CokeFactory} from "./CokeFactory.js"
import {Pepsi} from "./Pepsi.js"

export class PepsiFactory extends CokeFactory {
    produceCoke() {
        return new Pepsi();
    }
}
