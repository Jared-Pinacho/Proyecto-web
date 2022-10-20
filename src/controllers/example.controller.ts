import { Request, Response } from "express";
import {ExampleModel} from "../models/example.model";

export async function createExample(req: Request, res: Response): Promise<Response> {
    const {params:{idStatus,status,description}} = req;
    await ExampleModel.create({idStatus:Number(idStatus),status,description});
    return res.status(201).send("Creado con ajuste en qas");
  }