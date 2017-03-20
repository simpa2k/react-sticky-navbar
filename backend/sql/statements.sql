create table description (content TEXT NOT NULL, id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
create table contactperson (name VARCHAR(60) NOT NULL, country VARCHAR(10), phonenumber VARCHAR(20) NOT NULL, PRIMARY KEY(phonenumber, name, country));
create table venue (address TEXT, name VARCHAR(40) NOT NULL, city VARCHAR(20), webpage TEXT, PRIMARY KEY(name));
create table gig (ticketlink TEXT, info TEXT, price INT, datetime DATETIME NOT NULL, id INT NOT NULL AUTO_INCREMENT, venue_name VARCHAR(40) NOT NULL, PRIMARY KEY(id), UNIQUE KEY(datetime), FOREIGN KEY(venue_name) REFERENCES venue(name));
create table member (lastname VARCHAR(60) NOT NULL, instrument VARCHAR(100) NOT NULL, firstname VARCHAR(60) NOT NULL, PRIMARY KEY(firstname, lastname));
create table embeddeditem (id INT NOT NULL AUTO_INCREMENT, type VARCHAR(20), src TEXT, PRIMARY KEY(id));
