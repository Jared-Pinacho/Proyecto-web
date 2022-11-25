import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database";
import { TablaLeccion } from './leccion.model';

export const TablaTutorado = sequelize.define('tutorado', {
    idTutorado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'Tutorado'
})

// TablaTutorado.hasMany(TablaLeccion, {
//     foreignKey: "idTutorado",
//     sourceKey: "idTutorado",
//   });