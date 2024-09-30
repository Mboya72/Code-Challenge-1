const prompt = require('prompt-sync')();
function calculateNetSalary(basicSalary, benefits) {
 const grossSalary = parseFloat(basicSalary ) + parseFloat(benefits);

    if (grossSalary <= 24000) {
        taxRate = 0.1;
    }
    else if (grossSalary <= 32333 && grossSalary > 24001) {
        taxRate = 0.25;
    }
    else if (grossSalary <= 500000 && grossSalary > 32334) {
        taxRate = 0.3
    }
    else if (grossSalary <= 800000 && grossSalary > 500001) {
        taxRate = 0.325
    }
    else { taxRate = 0.35 }

    const nhifRate = 0.025
    const nssfRate = 0.06
    const housingLevyRate = 0.015




    const tax = grossSalary * taxRate;
    const nhif = grossSalary * nhifRate;
    const nssf = grossSalary * nssfRate;
    const housingLevy = grossSalary * housingLevyRate;

    const netSalary = grossSalary - (tax + nhif + nssf);

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}


const basicSalary = prompt("Enter basic salary:");
const benefits = prompt("Enter benefits:");
const result = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);


