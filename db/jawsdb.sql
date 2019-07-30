USE;

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT NOT NULL,
	burger_name varchar(200) NOT NULL,
	createdAt TIMESTAMP not null,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);