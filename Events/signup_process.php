<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $gender = $_POST["gender"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm-password"];

    // Password match validation
    if ($password !== $confirm_password) {
        die("Passwords do not match.");
    }

    // Hash password for security
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Insert into database
    $sql = "INSERT INTO users (full_name, email, mobile_number, gender, password_hash) 
            VALUES ('$fullname', '$email', '$mobile', '$gender', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "Sign-Up Successful! <a href='index.html'>Login Here</a>";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>
