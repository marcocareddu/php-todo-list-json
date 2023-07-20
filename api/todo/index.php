<?php

// Moved array from JS
$tasks = [
    [
        'text' => 'Comprare il pane',
        'isDone' => false,
        'id' => 0,
    ],
    [
        'text' => 'Ritirare i cappotti dalla lavanderia',
        'isDone' => false,
        'id' => 1,
    ],
    [
        'text' => 'Tagliare il prato',
        'isDone' => false,
        'id' => 2,
    ],
    [
        'text' => 'Fare le pulizie',
        'isDone' => false,
        'id' => 3,
    ],
    [
        'text' => 'Allenarsi',
        'isDone' => false,
        'id' => 4,
    ],
];


// Get Value from frontend
$new_task = $_POST['newTask'] ?? false;

// Add new task
if ($new_task) {
    $tasks .= $new_task;
};

// Create Json API response
header('Content-Type: application/json');

// Convert file into JSON
echo json_encode($tasks);
