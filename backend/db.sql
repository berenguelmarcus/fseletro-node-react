CREATE DATABASE IF NOT EXISTS fullstackeletro;

CREATE TABLE IF NOT EXISTS fullstackeletro.registered_products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_category VARCHAR(25),
    product_img VARCHAR(20),
    product_name VARCHAR(60),
    product_price DECIMAL(6,2),
    product_promotion_price DECIMAL(6,2)
)

CREATE TABLE customers(
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(45),
    customer_email VARCHAR(45)
)

CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id) REFERENCES registered_products(product_id)
)