const model = require('../models/products');
const log4js = require('../config/logger/log4jsConfig');
const loggs = log4js.getLogger('utils');

class Products {
    async get () {
        try {
            const products = await model.find();
            loggs.debug(`[ Products ] - Se obstuvieron todos los productos.`);
            return { products };
        } catch (e) {
            loggs.error(`[ Products ] - Se produjo un error al leer el archivo. Error: ${e}`)
        }
    };
    async getById ({ id }) {
        try {
            const product = await model.find({ _id: id });
            loggs.debug(`[ Products ] - Se obtuvo el producto de id ${id}.`);
            return { product };
        } catch (e) {
            loggs.error(`[ Products ] - Se produjo un error al leer el archivo. Error: ${e}`)
        }
    };
    async getFilter ({ nombre, talle, categoria }) {
        try {
            let whereClause = {};
            if ( nombre != undefined && talle != undefined && categoria != undefined ) {
                whereClause = {
                    talle:{
                        $regex: talle
                    },
                    nombre:{
                        $regex: nombre
                    },
                    categoria:{
                        $regex: categoria
                    }
                };
            } else if ( nombre != undefined ) {
                whereClause = {
                    nombre:{
                        $regex: nombre
                    },
                    categoria:{
                        $regex: categoria
                    }
                };
            } else if ( talle != undefined ) {
                whereClause = {
                    talle:{
                        $regex: talle
                    },
                    categoria:{
                        $regex: categoria
                    }
                };
            };
            const products = await model.find( whereClause );
            loggs.debug(`[ Products ] - Se realiza un FIND de productos con la siguiente query ${JSON.stringify(whereClause)}.`);
            return { products };
        } catch (e) {
            loggs.error(`[ Products ] - Se produjo un error al leer el archivo. Error: ${e}`)
        }
    };
    async insert({ product }) {
        try {
            const productToSave = { 
                nombre: product.nombre,
                categoria: product.categoria,
                precio: product.precio,
                descripcion:product.descripcion,
                foto: product.foto,
                talle: product.talle,
                stock: product.stock
            };
            const productoSaveModel = new model(productToSave);
            await productoSaveModel.save();
            loggs.debug(`[ Products ] - Se inserto el producto ${product}.`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Products ] - No se pudo insertar el producto ${product}. Error: ${e}`);
            return {status: 'error'};
        }
    };
    async update({ product }) {
        try {
            await model.replaceOne({_id:product._id},product)
            loggs.debug(`[ Products ] - Se actualizo el producto ${product}.`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Products ] - No se pudo insertar el producto ${product}. Error: ${e}`);
            return {status: 'error'};
        }
    };
    async updateByCategory({ actualCategory, newCategory }) {
        try {
            // const doc = await model.findOne()
            await model.updateMany({categoria:actualCategory},{$set: {categoria: newCategory}})
            loggs.debug(`[ Products ] - Se actualizaron los productos con categoria ${actualCategory}. Nueva categoria ${newCategory} .`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Products ] - No se pudo insertar el producto ${product}. Error: ${e}`);
            return {status: 'error'};
        }
    };
    async delete({ id }) {
        try {
            await model.deleteOne({ _id:id })
            loggs.debug(`[ Products ] - Se eliminó el producto con id ${id}.`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Products ] - No se pudo elimar el producto con id ${id}. Error: ${e}`);
            return {status: 'error'};
        }
    }
}

module.exports = Products;