const log4js = require('../config/logger/log4jsConfig');
const path = require ('path');
const Products = require('../utils/products');
const loggs = log4js.getLogger('controllers');

let productsUtils = new Products();

module.exports = {
    getData: async (req, res) => {
        if ( req.query.talle || req.query.nombre || req.query.categoria) {
            const { products } = await productsUtils.getFilter({talle: req.query.talle,nombre: req.query.nombre,categoria: req.query.categoria});
            loggs.debug(`[ Products ] - Se hallaron los productos disponibles con el filtrado indicado.`)
            res.send(products);
        } else {
            const { products } = await productsUtils.get();
            loggs.debug(`[ Products ] - Se hallaron los productos disponibles.`)
            res.send(products);
        }
    },
    getDataById: async (req, res) => {
        const { product } = await productsUtils.getById({id:req.params.id});
        loggs.debug(`[ Products ] - Se obtuvo el producto de id ${req.params.id}.`)
        res.send(product);
    },
    insertProduct: async (req, res) => {
        const product = req.body;
        const { status } = await productsUtils.insert({product});
        if ( status == 'ok' ) res.send(`Producto agregado`)
        else res.send(`No se ha podido agregar el producto`);
    },
    updateProduct: async (req, res) => {
        const product = req.body;
        const { status } = await productsUtils.update({product});
        if ( status == 'ok' ) res.send(`Producto actualizado`)
        else res.send(`No se ha podido actualizar el producto`);
    },
    deleteProduct: async (req, res) => {
        const { status } = await productsUtils.delete({id:req.params.id});
        if ( status == 'ok' ) res.send(`Producto eliminado`)
        else res.send(`No se ha podido eliminar el producto`);
    }
}