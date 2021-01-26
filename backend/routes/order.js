const express = require("express");
const OrderRouter = express.Router();
const mysqlConnection = require("../connection");


OrderRouter.get("/order", (req, res) => {
    mysqlConnection.query("SELECT customers.customer_name, registered_products.product_name, registered_products.product_img FROM customers JOIN orders ON customers.customer_id = orders.customer_id JOIN registered_products ON registered_products.product_id = orders.product_id", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

module.exports = OrderRouter;