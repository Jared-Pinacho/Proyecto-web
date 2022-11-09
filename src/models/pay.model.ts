import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import PayType from "../types/pay.type";

export class PayModel extends Model<PayType> {}

PayModel.init(
  {
    idPay: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    idStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pay",
  }
);
