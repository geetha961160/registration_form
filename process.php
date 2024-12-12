<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);
    $address = htmlspecialchars($_POST['address']);
    $education = htmlspecialchars($_POST['education']);
    $comments = htmlspecialchars($_POST['comments']);
    $interests = isset($_POST['interests']) ? implode(', ', $_POST['interests']) : 'None';

    echo "<h1>Registration Successful</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone:</strong> $phone</p>";
    echo "<p><strong>Date of Birth:</strong> $dob</p>";
    echo "<p><strong>Gender:</strong> $gender</p>";
    echo "<p><strong>Address:</strong> $address</p>";
    echo "<p><strong>Highest Qualification:</strong> $education</p>";
    echo "<p><strong>Interests:</strong> $interests</p>";
    echo "<p><strong>Comments:</strong> $comments</p>";
}
?>
