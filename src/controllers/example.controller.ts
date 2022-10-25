import { Request, Response } from "express";
import {ExampleModel} from "../models/example.model";

export async function createExample(req: Request, res: Response) {
    const {status,description} = req.body;
    await ExampleModel.create({status,description});
    const records = await ExampleModel.findAll({raw:true});
    const data = {httpCode:201,
      message:"Registrado correctamente",
      records:records};
    res.status(201).render("status/status-view",data);
}

export async function viewFormExample(req:Request,res:Response){
  const records = await ExampleModel.findAll({raw:true});
  const data = {httpCode:0,message:"",records};
  res.render("status/status-view",data);
}