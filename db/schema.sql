CREATE DATABASE burger_db; 
USE burger_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);