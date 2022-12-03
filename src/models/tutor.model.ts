import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database";
import { TablaTutorado } from './tutorado.model';

export const TablaTutor = sequelize.define('tutor', {
    idTutor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'Tutor'
})

// TablaTutor.hasMany(TablaTutorado, {
//     foreignKey: "idTutor",
//     sourceKey: "idTutor",
// });

