/**
 * Created by z002j8f on 12/5/16.
 */

(function demoVariable() {
    const multiplier = 5;

    for(let i = 0, a = 0; i < 5; i++) {
      a += i;

      if (i === 4) {
          console.log('scope:demoVariable ' + a);
      }
    }

    for(let i = 0; i < 5; i++) {
        let a = 0;

        a += (i * multiplier);

        if(i === 4) {
            console.log('scope:demoVariable ' + a);
        }
    }

})();

(function demoFunction() {
    function foo() {
        return 1;
    }

    (function foo2() {
        console.log('scope:demoFunction:foo2 : ' + foo());

        function foo() {
            return 2;
        }
    })();

    console.log('scope:demoFunction : ' + foo())
})();