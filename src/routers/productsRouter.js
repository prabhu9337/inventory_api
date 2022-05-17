const express = require('express');
const router = new express.Router();
const Products = require('../models/productsModel')
const Register = require('../models/registerModel')

// add products
router.post('/products', async (req, res) => {
    try {
        const product = new Products(req.body);
        const createProduct = await product.save();
    
        res.status(201).send(createProduct);
    } catch (error) {
        res.status(400).send(error)
    }
})

// get all products
router.get('/products', async (req, res) => {
    try {
        const productData = await Products.find()
        res.send(productData)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get one data
router.get('/products/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const productData = await Products.findById({_id : _id});

        if(!productData) {
            return res.status(404).send()
        }
        else {
            res.send(productData)
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// router.post('/register', async (req, res) => {
//     try {
//         console.log(req.body);
//         const registerUser = new Register(req.body);
//         const newUser = await registerUser.save();

//         res.status(201).send(newUser);


//         // const registerUser = new Registers({
//         //     name : req.body.name,
//         //     email : req.body.email
//         // })
//         // const user = await registerUser.save();
//         // res.ststus(201).send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

module.exports = router;