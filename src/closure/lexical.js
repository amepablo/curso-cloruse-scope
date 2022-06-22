const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);  // 0

    function parent() { // funtion interna // creación closure
        const inner = 2;
        console.log(myNumber, myGlobal);    // 1, 0

        function child() {
            console.log(inner, myNumber, myGlobal); //  2, 1, 0
        }
        return child();
    }
    return parent();
}

myFunction();