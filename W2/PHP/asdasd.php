<?php
$input = "3h:5m:10s";

$result = explode(":", $input);

$result[0] = substr($result[0], 0, -1);
$result[1] = substr($result[1], 0, -1);
$result[2] = substr($result[2], 0, -1);

var_dump($result);