import { sumar, multiplicar } from "./modulos/controller.js";
import chalk from "chalk";

const sum = sumar(10,20);

console.log(`El valor de la suma es: ${sum}`);

const multi = multiplicar(2,5);

console.log(`El resultado de la multiplicación: ${multi}`)

console.log(chalk.green(`El resultado de la multiplicación: ${multi}`))
