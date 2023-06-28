import mongoose from 'mongoose';

// Definir el esquema de usuario
const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Crear el modelo de usuario a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exportar el modelo de usuario
export default Usuario;
