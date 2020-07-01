let count = false;
let numberList = [];
while (!count) {
    let userNumbers = prompt("Ingrese los numeros que desea colocar en el promedio y si desea terminar la lista ingrese un espacio en blanco");

// omitir un string
    if (!isNaN(parseInt(userNumbers))){
        numberList.push(userNumbers);

        // detener el codigo con un string vacio
    } else {
        if (userNumbers == " "){
            count = true;
            console.log("la lista digitada es:", numberList);

            // promedio
            let plus = numberList.reduce((previous, current) => current += previous);
            let average = plus / numberList.length;
            console.log("el promedio de los numeros ingresados es:", average);

            //numero mayor y menor
            numberList.sort((a,b) => a - b);
            let smaller = Math.min.apply(null, numberList);
            let bigger = Math.max.apply(null, numberList);
            console.log("el numero menor digitado es:", smaller);
            console.log("el numero mayor digitado es:", bigger);

            //mediana
            let highMedian = Math.ceil((numberList.length - 1) /2 );
            let lowMedian = Math.floor((numberList.length - 1) /2 );
            let median = (numberList[highMedian] + numberList[lowMedian]);
            console.log("la mediana del promedio digitado es:", median);
        }
    }
}