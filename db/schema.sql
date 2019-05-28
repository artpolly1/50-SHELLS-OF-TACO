CREATE DATABASE IF NOT EXISTS tacos_db;

USE tacos_db;

CREATE TABLE IF NOT EXISTS tacos (
	id INTEGER NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR (75) NOT NULL,
    shell VARCHAR (75) NOT NULL,
    vegetarian BOOLEAN,
    picked_up BOOLEAN,
    PRIMARY KEY (id)
);