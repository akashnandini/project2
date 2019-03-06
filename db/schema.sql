CREATE DATABASE bet;
USE bet;

CREATE TABLE users
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    email_id varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE category
(
    id integer NOT NULL AUTO_INCREMENT,
    category_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE bills
(
    id integer NOT NULL AUTO_INCREMENT,
    amount float (7,2) NOT NULL,
    bill_date timestamp,
    category varchar(255) NOT NULL,
    spent_at varchar(200) NOT NULL,
    remarks varchar(400) ,
    PRIMARY KEY (id)
);