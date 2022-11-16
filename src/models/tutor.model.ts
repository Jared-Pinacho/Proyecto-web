import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import TutorType from "../types/tutor.type";


export class TutorModel extends Model<TutorType> {}

TutorModel.init(
  {
    idTutor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    username: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,       
      },
  },
  {
    sequelize,
    tableName: "tutor",
  }
);


/*
ExampleModel.hasMany(PayModel, {
  foreignKey: "idStatus",
  sourceKey: "idStatus",
});*/
