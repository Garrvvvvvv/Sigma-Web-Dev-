CREATE DATABASE users_db;
USE users_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    mobile VARCHAR(20),
    gender VARCHAR(10),
    password VARCHAR(255)
);
