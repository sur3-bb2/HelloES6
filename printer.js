/**
 * Created by z002j8f on 11/23/16.
 */
var i = 1;
var max = 30;

module.exports = {
    print: function () {
        for (i -= 1; i++ < max; ) {
            console.log(i);
        }
        max *= 1.1;
    }
};