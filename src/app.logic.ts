import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage = '';
// const base = <number>yarg.base;
// const limit = <number>yarg.limit;
const headerMessage = `
==================================
            Tabla del ${base}
==================================\n
`;
// for( let i=1; i<= limit; i++){
//     outputMessage += `${base} x ${i} = ${i*base}\n`;
// }

outputMessage = headerMessage + outputMessage;
if( showTable ){
    console.log(outputMessage);
}

// GRABAR EN UN ARCHIVO DE SALIDA

// const outputPath = `outputs`;

// fs.mkdirSync(outputPath, { recursive: true });

// fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);
// console.log('File created!');