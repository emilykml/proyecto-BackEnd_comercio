CREATE database products_app;
USE products_app;
CREATE TABLE brand (
    id integer AUTO_INCREMENT PRIMARY KEY,
    brand_name varchar(20) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id integer AUTO_INCREMENT PRIMARY KEY,
    product_name varchar(50) NOT NULL,
    product_description text (100) NOT NULL,
    price integer,
    stock integer,
    brand_id integer,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `products` ADD FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

INSERT into brand (brand_name)
VALUES ("Adidas"), ("Nike"), ("Reebok"), ("Bass");

INSERT into products (product_name, product_description, price, stock)
VALUES("zapatillas running", "Especiales para correr con comodidad", 40, 50),
("zapatillas court vision", "Estilo casual", 60, 100);
