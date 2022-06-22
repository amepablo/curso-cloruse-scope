'use strict'
pi = 3.1416;
console.log(pi);        // pi is not defined 'use strict'

function myFunction() {
    'use strict'
    return pi = 3.1416;
}

console.log(myFunction());  // pi is not defined 'use strict'