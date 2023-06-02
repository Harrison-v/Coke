import {CokeFactory} from "./CokeFactory.js"
import {Coca_Cola} from "./Coca_Cola.js"

export class Coca_ColaFactory extends CokeFactory {
    produceCoke() {
        return new Coca_Cola();
    }
}
