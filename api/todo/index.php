<?php
// Link to Json file
$json_path = __DIR__ . '../data/tasks.json';
$json_tasks = file_get_contents($json_path);

$tasks = json_decode($json_tasks, true);

// Get Value from frontend
$new_task = $_POST['newTask'] ?? null;

// Add new task
if ($new_task) {
    $tasks[] = $new_task;

    // Encode json
    $task_encoded = json_encode($tasks);

    // Put newtask into file
    file_put_contents($json_path, $task_encoded);
};

// Create Json API response
header('Content-Type: application/json');

// Convert file into JSON
echo json_encode($tasks);
