<?php
// Allow requests from any origin - adjust as necessary for security
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Mock data - replace with actual database queries
$data = [
    ['id' => 1, 'name' => 'Item 1', 'description' => 'This is item 1'],
    ['id' => 2, 'name' => 'Item 2', 'description' => 'This is item 2'],
    ['id' => 3, 'name' => 'Item 3', 'description' => 'This is item 3'],
];

echo json_encode($data);