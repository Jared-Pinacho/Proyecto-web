import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database";
import { TablaPregunta } from './pregunta.model';

export const TablaLeccion = sequelize.define('leccion', {
    idLeccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTutorado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aciertos: {
        type: DataTypes.INTEGER,
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