
function calcularelSalario (a)
{
let salarioAnual = 21600
let Calcular = salarioAnual / a
return Calcular
}
console.log(calcularelSalario (12))

/* Marcos*/

function CalcularsalarioAnual (a)
{
    let salarioMensual = 1500
    let calcularSalarioMensual= salarioMensual * a
    return calcularSalarioMensual
}
console.log(CalcularsalarioAnual(12))

/*Promedio*/
function calcularPromedio (a,b,c)

{
    
    let PromedioFinal = (a + b + c) / 3
    return PromedioFinal
}
let nota1 = prompt ('Ingrese su nota')
let nota2 = prompt (' Ingrese su segunda nota')
let nota3 = prompt ( ' ingrese la ultima nota')

alert(calcularPromedio(nota1, nota2, nota3))

