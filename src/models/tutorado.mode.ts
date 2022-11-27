import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import TutoradoType from "../types/tutorado.type";


export class TutoradoModel extends Model<TutoradoType> {}

TutoradoModel.init(
  {
    idTutorado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    idTutor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    edad: {
        type:DataTypes.INTEGER,
        allowNull: false,
      },
    sexo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    aciertos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
       
  },
  {
    sequelize,
    tableName: "tutorado",
  }
);
