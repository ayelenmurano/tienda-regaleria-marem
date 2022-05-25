const model = require('../models/categories');
const log4js = require('../config/logger/log4jsConfig');
const loggs = log4js.getLogger('utils');

class Categories {
    async get () {
        try {
            const categories = await model.find();
            loggs.debug(`[ Categories ] - Se obtuvieron todas las categorias.`);
            return { categories };
        } catch (e) {
            loggs.error(`[ Categories ] - Se produjo un error al leer el archivo. Error: ${e}`)
        }
    };
    async getById ({ id }) {
        try {
            const category = await model.find({ _id: id });
            loggs.debug(`[ Categories ] - Se obtuvo la categoria de id ${id}.`);
            return { category };
        } catch (e) {
            loggs.error(`[ Categories ] - Se produjo un error al leer el archivo. Error: ${e}`)
        }
    };
    // async getFilter ({ nombre, talle, categoria }) {
    //     try {
    //         let whereClause = {};
    //         if ( nombre != undefined && talle != undefined && categoria != undefined ) {
    //             whereClause = {
    //                 talle:{
    //                     $regex: talle
    //                 },
    //                 nombre:{
    //                     $regex: nombre
    //                 },
    //                 categoria:{
    //                     $regex: categoria
    //                 }
    //             };
    //         } else if ( nombre != undefined ) {
    //             whereClause = {
    //                 nombre:{
    //                     $regex: nombre
    //                 },
    //                 categoria:{
    //                     $regex: categoria
    //                 }
    //             };
    //         } else if ( talle != undefined ) {
    //             whereClause = {
    //                 talle:{
    //                     $regex: talle
    //                 },
    //                 categoria:{
    //                     $regex: categoria
    //                 }
    //             };
    //         };
    //         const categorys = await model.find( whereClause );
    //         loggs.debug(`[ Categories ] - Se realiza un FIND de categoryos con la siguiente query ${JSON.stringify(whereClause)}.`);
    //         return { categorys };
    //     } catch (e) {
    //         loggs.error(`[ Categories ] - Se produjo un error al leer el archivo. Error: ${e}`)
    //     }
    // };
    async insert({ category }) {
        try {
            const categoryToSave = {
                nombre: category.nombre,
            };
            const categorySaveModel = new model(categoryToSave);
            await categorySaveModel.save();
            loggs.debug(`[ Categories ] - Se inserto la categoria ${JSON.stringify(category)}.`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Categories ] - No se pudo insertar la categoria ${category}. Error: ${e}`);
            return {status: 'error'};
        }
    };
    async update({ category }) {
        try {
            loggs.debug(`[ Categories ] - Se actualizara la categoria ${category}.`);
            await model.replaceOne({"_id":category["_id"]},category)
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Categories ] - No se pudo actualizar la categoria ${category}. Error: ${e}`);
            return {status: 'error'};
        }
    };
    async delete({ id }) {
        try {
            await model.deleteOne({ _id:id })
            loggs.debug(`[ Categories ] - Se eliminó la categoria con id ${id}.`);
            return {status: 'ok'};
        } catch (e) {
            loggs.error(`[ Categories ] - No se pudo eliminar la categoria con id ${id}. Error: ${e}`);
            return {status: 'error'};
        }
    }
}

module.exports = Categories;