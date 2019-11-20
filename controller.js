const Product = require('./models/products');

module.exports = {
    addProduct: (req, res, next) => {
        let product = new Product({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productAvailability: req.body.productAvailability,
            productDescription: req.body.productDescription
        });
        product.save((err) => { 
            if (err) {
                return res.status(500).send('An error occured.' + err);
            } else {
                return res.status(200).json({product: product});
            }
        });
    },
    getProducts: (req, res, next) => {
        Product.find({}, (err, products) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(200).send(products);
            }
        });
    },
    purchaseProduct: (req, res, next) => {
        Product.findById(req.body.id, (err, product) => {
            if (err) {
                return res.status(404).send('Product could not be purchased');
            } else {
                let toBuy = {
                    name: product.productName,
                    description: product.productDescription,
                    price: req.body.price
                }
                return res.status(200).send(`You have successfully purchased ${ toBuy.name } for ${ toBuy.price }`);
            }
        });
    }
}