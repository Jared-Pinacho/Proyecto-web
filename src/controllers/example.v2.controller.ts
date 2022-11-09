import { Request, Response } from "express";
import { ExampleModel } from "../models/example.model";

export async function getExample(req: Request, res: Response) {
  const records = await ExampleModel.findAll({ raw: true, attributes: ["idStatus", "status", "description"] });
  res.status(200).json(records);
}

export async function getExampleById(req: Request, res: Response) {
    const {idStatus} = req.params;
    const records = await ExampleModel.findAll({ raw: true ,where:{idStatus}});
    res.status(200).json(records);
}

export async function createExample(req: Request, res: Response) {
  const {status,description} = req.body;
  await ExampleModel.create({status,description});
  const data = {httpCode:201,
    message:"Registrado correctamente"};
  res.status(201).json(data);
}
