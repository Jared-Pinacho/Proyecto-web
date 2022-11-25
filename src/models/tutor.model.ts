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
        type: DataTypes.STRING(50),
        allowNull: false,
    }, 
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
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

