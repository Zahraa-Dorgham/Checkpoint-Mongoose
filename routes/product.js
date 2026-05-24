const express = require('express');
const productrouter = express.Router();
const Product = require('../models/product');

// add product
productrouter.post('/add', async (req, res) => {
    try {
        let newProduct = new Product(req.body);
        let result = await newProduct.save();
        res.send({ product: result, message: "product added successfully" });
    } catch (error) {
        console.log(error);
    }
});
// get all products
productrouter.get('/', async (req, res) => {
    try {
        let result = await Product.find();
        res.send({ products: result, message: "all products" });

    } catch (error) {
        console.log(error);
    }
});
// get product by id
productrouter.get('/:id', async (req, res) => {
    try {
        let result = await Product.findById(req.params.id);

        res.send({ product: result, message: "product found" });
    } catch (error) {
        console.log(error);

    }
});
// delete product
productrouter.delete('/:id', async (req, res) => {
    try {
        let result = await Product.findByIdAndDelete(req.params.id);
        res.send({ product: result, message: "product deleted" });

    } catch (error) {
        console.log(error);
    }
});
// edit product
productrouter.put('/:id', async (req, res) => {
    try {
        let result = await Product.findByIdAndUpdate({ _id: req.params.id }, { $set: { ...req.body } });
        res.send({ product: result, message: "product updated" });
    } catch (error) {
        console.log(error);
    }
});
module.exports = productrouter