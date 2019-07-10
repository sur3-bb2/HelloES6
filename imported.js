/**
 * Created by z002j8f on 11/18/16.
 */

import { add } from './mathUtils'
import StringUtil from './stringUtil';

(function demoAdd() {
    console.log(add(50, 10));
})();

(function demoSayHello() {
    let util = new StringUtil("Suresh Babu");

    console.log(util.sayHello());
    console.log(util.sayWelcome());
})();