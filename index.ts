import { question } from 'readline-sync';

function main(): void{
    const firstStr: string = question("Enter the firts number:\n");
    const operator: string = question("Enter operator:\n");
    const secondNumber: string = question("enter second number:\n");

    const validInput: boolean = isNumber(firstStr) && isTypeOperatorNode(operator) && isNumber(secondNumber);

    if(validInput){
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondNumber);
        const result = calculate(firstNum, operator, secondNum);
    }else{
        console.log("\n Invalid input");
        main();
    }
    const firstNum = isNumber(firstStr);
    console.log(firstStr);
    console.log(question);
}


function calculate(firstNum:number, operator:string, secondNum:number) {

}

function isOperator(operator: string): boolean{
    switch(operator){
      case '+':
      case '-':
      case '*':
      case '/':            
    }
}



function isNumber(str: string): boolean{
    const isNum = parseInt(str);
    const Num: boolean = !isNaN(isNum);
    return isNaN;
}


main();




console.log("I am writing typescript");