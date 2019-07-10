/**
 * Created by z002j8f on 11/18/16.
 */

class StringUtils {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        const hello = "Hello";

        return hello + " " + this.name;
    }

    sayWelcome() {
        const welcome = "Welcome";

        return welcome + " " + this.name;
    }
}

export default class StringUtils;