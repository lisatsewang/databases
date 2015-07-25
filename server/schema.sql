CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int not null auto_increment primary key,
  id_users int not null,
  message varchar(100),
  roomname varchar(15)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int not null auto_increment primary key,
  username varchar(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

