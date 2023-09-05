/*
    Función para saber si un número es heteromécico ( es un numero que es producto de dos enteros
        consecutivos), de la forma n(n+1)
*/

function isHeteromecic ( n ) {
    let a = parseInt(Math.sqrt(n));

    return a * ( a + 1) === n;
}

let response = isHeteromecic(12);
console.log("🚀 ~ file: script.js:13 ~ response:", response)

