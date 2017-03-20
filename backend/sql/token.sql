create table token(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    token VARCHAR(64) NOT NULL,
    created DATETIME NOT NULL
)
