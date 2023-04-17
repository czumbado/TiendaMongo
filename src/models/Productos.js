import { Schema, model } from "mongoose";

const productoEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true, //cada atributo sea unico
      trim: true, //si tenemos mas caracteres de los requeridos se eliman con la funcion trim
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //muestre fecha y hora
    versionKey: false,
  }
);

export default model("Productos", productoEsquema);
