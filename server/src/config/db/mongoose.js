'use strict';
const mongoose = require('mongoose');
const log4js = require('../logger/log4jsConfig');
const logger = log4js.getLogger('dataBase');

const URL = 'mongodb://admin:root@localhost:27017/ecommerce';

try {
    mongoose.connect(URL);
    logger.info(`Base de datos conectada.`)
} catch (e) {
    logger.error(`No fue posible conectar con la base de datos. Error ${e}`)
}

module.exports = mongoose;