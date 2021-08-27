// codigo del cuadrado
console.group("cuadrado");
var perimetroCuadrado = function(x){
    return x*4;
}
function areaCuadrado(x){
    return x*x;
}
console.groupEnd();
// codigo del triangulo
console.group("triangulo");
function alturaIsosceles(lado1, lado2, base){
    let altura;
    if(lado1 === lado2){
        altura = Math.sqrt((lado1**2) - ((base/2)**2));
        return altura;
    }
    else{
        altura = undefined;
        alert("No es un triángulo isósceles");
        return altura;
    }
}
function perimetroT(lado1, lado2, lado3){
    return lado1+lado2+lado3;
}
function areaT(base, altura){
    return (base*altura)/2;
}
// otra forma de escribir comentarios en la consola pero identada
// console.log(
//     "los lados del triangulo miden: " 
//     + ladoT1 
//     + "cm. y " 
//     + ladoT2 
//     + "cm."
//     + " y su base: "
//     + base
//     + "cm."
// );
// console.log("la altura del triangulo es: " + altura + "cm.");
// console.log("el perimetro del triangulo es: " + perimetroT + "cm.");
// console.log("el area del triangulo es: " + areaT + "cm2.");
console.groupEnd();

// codigo del circulo
console.group("circulos");
const pi = Math.PI;
function diametroC(radio){
    return 2*radio;
}
function perimetroC(radio){
    //llamando funciones dentro de funciones
    const diametro = diametroC(radio);
    return diametro*pi;
}
function areaC(radio){
    return pi*radio*radio;
}
console.groupEnd();

//Interactuando con el html

//funciones del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
//funciones del triangulo
function calcularPerimetroTriangulo(){
    const input1= document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;
    const perimetro = perimetroT(parseInt(lado1), parseInt(lado2), parseInt(base));
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1= document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);
    let altura = alturaIsosceles(lado1, lado2, base);
    if(altura == undefined){
        alert("Escriba nuevamente los lados del triángulo");
    }
    else{
        const area = (base*altura)/2;
        alert(area);
    }
}
//funciones del circulo
function calcularDiametroCirculo(){
    const input1 = document.getElementById("radio");
    const radio = input1.value;
    const diametro = diametroC(parseInt(radio));
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("radio");
    const radio = input1.value;
    const perimetro = perimetroC(parseInt(radio));
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input1 = document.getElementById("radio");
    const radio = input1.value;
    const area= areaC(parseInt(radio));
    alert(area);
}

