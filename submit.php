<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from POST
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    
    echo "<h1>Form Submitted Successfully</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone:</strong> $phone</p>";
} else {
    echo "<h1>Error</h1>";
    echo "<p>The form was not submitted correctly.</p>";
}
?>
