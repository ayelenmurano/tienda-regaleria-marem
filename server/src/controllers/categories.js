const log4js = require('../config/logger/log4jsConfig');
const path = require ('path');
const Categories = require('../utils/categories');
const Products = require('../utils/products');
const loggs = log4js.getLogger('controllers');

let categoriesUtils = new Categories();
let productosUtils = new Products();

module.exports = {
    getData: async (req, res) => {
        const { categories } = await categoriesUtils.get();
        loggs.debug(`[ Categories ] - Se hallaron las categorias cargadas.`)
        res.send({data: categories});
    },
    // getDataById: async (req, res) => {
    //     const { category } = await categoriesUtils.getById({id:req.params.id});
    //     loggs.debug(`[ Categories ] - Se obtuvo la categoria de id ${req.params.id}.`)
    //     res.send(category);
    // },
    insertCategory: async (req, res) => {
        const category = req.body;
        const { status } = await categoriesUtils.insert({category});
        if ( status == 'ok' ) res.send(`Categoria agregada`)
        else res.send(`No se ha podido agregar la categoria`);
    },
    updateCategory: async (req, res) => {
        const newCategory = req.body;
        const { category: actualCategory } = await categoriesUtils.getById({id:req.body._id});
        loggs.debug(`[ Categories ] - La categoria anterior es ${actualCategory}`);
        loggs.debug(`[ Categories ] - La categoria anterior es ${JSON.stringify(actualCategory)}`);
        const { status } = await categoriesUtils.update({category:newCategory});
        if ( status == 'ok' ) loggs.debug(`[ Categories ] - Se actualizo la categoria ${newCategory}`);
        else res.send(`No se ha podido actualizar la categoria`);
        await productosUtils.updateByCategory({actualCategory:actualCategory[0].nombre, newCategory:newCategory.nombre }) 
        res.send(`Categoria actualizada`)
    },
    deleteCategory: async (req, res) => {
        const { status } = await categoriesUtils.delete({id:req.params.id});
        if ( status == 'ok' ) res.send(`Categoria eliminada`)
        else res.send(`No se ha podido eliminar la categoria`);
    }
}