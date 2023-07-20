<?php

// Get Value from frontend
$new_task = $_POST['newTask'] ?? false;

// Add new task
if ($new_task) {
    $tasks[] = $new_task;
};

// Create Json API response
header('Content-Type: application/json');

// Convert file into JSON
echo json_encode($tasks);
