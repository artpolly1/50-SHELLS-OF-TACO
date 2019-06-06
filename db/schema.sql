CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	picked_up BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);
