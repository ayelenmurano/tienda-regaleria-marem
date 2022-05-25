const mongoose= require('../config/db/mongoose');

const CategoriasSchema = new mongoose.Schema({
    nombre: {type: String, require: true}
});

const categorias = mongoose.model('categorias', CategoriasSchema);

module.exports = categorias;