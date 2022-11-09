import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { PayModel } from "./pay.model";
import ExampleType from "../types/example.type";


export class ExampleModel extends Model<ExampleType> {}

ExampleModel.init(
  {
    idStatus: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "example",
  }
);

ExampleModel.hasMany(PayModel, {
  foreignKey: "idStatus",
  sourceKey: "idStatus",
});
