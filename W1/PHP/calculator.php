<?php
$operator = readline("Welke operatie wil je uitvoeren? (-, +, %)");
if ($operator == "%" || $operator == "+" || $operator == "-") {
    $firstNumber = readline("Eerste getal?");
    if (is_numeric($firstNumber)) {
        $secondNumber = readline("Tweede getal?");
        if (is_numeric($secondNumber)) {
            check($operator, $firstNumber, $secondNumber);
        } else {
            exit("geen nummer");
        }
    } else {
        exit("geen nummer");
    }
} else {
    exit("geen geldige operatie");
}


function check($operator, $firstNumber, $secondNumber)
{
    if ($operator == "-") {
        $result = $firstNumber - $secondNumber;
    } else if ($operator == "+") {
        $result = $firstNumber + $secondNumber;
    } else {
        $result = $firstNumber % $secondNumber;
    }
    echo "Uw resultaat: " . $result;
}


