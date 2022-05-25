const mongoose= require('../config/db/mongoose');

const ProductosSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    categoria: {type: String, require: true},
    precio: {type: Number, require: true},
    descripcion: {type: String, require: true},
    codigo: {type: String, require: true},
    foto: {type: Array, require: true},
    talle: {type: String, require: true},
    stock: {type: String, require: true},
    id: {type: String, require: true}
});

const productos = mongoose.model('productos', ProductosSchema);

module.exports = productos;