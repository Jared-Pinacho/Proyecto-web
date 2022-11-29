import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database";
import { TablaPregunta } from './pregunta.model';

export const TablaLeccion = sequelize.define('leccion', {
    idLeccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // idTutorado: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    dificultad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tema: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Leccion'
})

// TablaLeccion.hasMany(TablaPregunta, {
//     foreignKey: "idLeccion",
//     sourceKey: "idLeccion",
//   });