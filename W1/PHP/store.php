<?php
$prijs = 0;
$karakters = 0;

$games = [
    ["Call of Duty", "Shooter", 59.95],
    ["Rocket League", "Sport", 19.95],
    ["Assassins Creed", "RP", 49.95]
];

for ($i = 0; $i < count($games); $i++) {
    $prijs += $games[$i][2];
    $karakters += strlen($games[$i][0]);
}

echo $prijs = $prijs / count($games) . PHP_EOL;
echo $karakters = $karakters / count($games);
