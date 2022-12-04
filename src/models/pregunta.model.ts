import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database";

export const TablaPregunta = sequelize.define('pregunta', {
    idPregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTutor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opcion1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opcion2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opcion3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opcion4: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta: {
        type: DataTypes.STRING,
        allowNull: false
    }   
}, {
    timestamps: true,
    tableName: 'Pregunta'
})