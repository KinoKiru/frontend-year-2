<?php
$age =(float) readline("Hoe oud ben je?");

if ($age > 16.5){
    echo "je mag beginnen met rijlessen";
} else if ($age < 16.5){
    echo "Helaas, je mag nog niet begginnen met rijlessen";
} else if ($age = 16.5){
    echo "je mag beginnen met rijlessen";
}
?>