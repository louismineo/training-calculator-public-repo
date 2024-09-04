let PRE_OPERATION_NUMBER = null;
let OPERATOR = null;
let entering_2nd_number = false;

const screen = document.getElementById("screenText");

function appendNumber(button)
{
    if (PRE_OPERATION_NUMBER != null && OPERATOR != null && entering_2nd_number == false)
    {
        screen.textContent = '';
        entering_2nd_number = true;
    }

    //get the text
    const btnText = button.textContent;

    //append into display
    screen.textContent = screen.textContent.concat(btnText);
}

function appendOperator(button)
{
    if(OPERATOR === button.textContent)
        return; // dont dot anything
    else if (OPERATOR != button.textContent && OPERATOR != null)
    {
        //remove the last symbol
        screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    }        
    //get the operator
    OPERATOR = button.textContent;

    //save the number
    PRE_OPERATION_NUMBER = Number(screen.textContent);

    //append into display first
    screen.textContent = screen.textContent.concat(" " + OPERATOR);

}

function equate()
{
    //get the 2nd operand
    let second_operand = Number(screen.textContent);

    let result = 0;

    switch(OPERATOR)
    {
        case "+":
            result = PRE_OPERATION_NUMBER + second_operand;
            break;
        case "-":
            result = PRE_OPERATION_NUMBER - second_operand;
            break;
        case "x":
            result = PRE_OPERATION_NUMBER * second_operand;
            break;
        case "/":
            result = PRE_OPERATION_NUMBER / second_operand;
            break;
        default:
            result = 0;
    }

    screen.textContent = result;

    //reset
    PRE_OPERATION_NUMBER = null;
    OPERATOR = null;
    entering_2nd_number = false;
}

function appendDecimalPoint(button)
{
    if (screen.textContent == '')
    {
        screen.textContent = '0.';
    }
    else
    {
        appendNumber(button); // reuse the function
    }
}