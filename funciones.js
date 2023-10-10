console.log('Mi primera función!');


/* En este caso estamos creando una variable Resta, donde estmaos guardando una funcion· */

var resta = function(n1, n2) {
    return n1 - n2;
}

var result = resta(10,8);
console.log("El total de la resta es", result);

/* Aqui estamos creando una funcion normal, y le estamos diciendo que se llama Sum. */

function sum(num1, num2){
    return num1 * num2;
}

var result = sum(2,9);
console.log("El total de la suma es;", result);



var age = 16;

if(age > 18) {
    console.log("Eres mayor de edad")
} else {
        console.log("Eres menor de edad")
    }


var data = {
    name: "Iron man",
    surname: "Tony Stark",
    age: 46,
    estatura: 1.87,
    armor: "Mark 4",
    dataFiscal: {
        dni: "7724934X",
        numSupport: 263752,
        born: "1991",
    }
}

/* showAlert con ternario, y sin ternario */

var showAlert = function(edad) {
    return (edad < 18) ? 'Eres menorito' : 'Tienes' + edad + 'años';
}

var result = showAlert('12');
console.log(result);

var showAlert = (edad) => {
    var str = null;
   
       if (edad > 18) {
           str = 'Eres mayor de edad';
       } else {
           str = 'Tienes' + edad + 'años';
       }
       return str;
   }
   
   var result = showAlert('22');
   console.log(result);