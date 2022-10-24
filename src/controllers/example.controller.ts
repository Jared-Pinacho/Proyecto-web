import { Request, Response } from "express";
import {ExampleModel} from "../models/example.model";

export async function createExample(req: Request, res: Response) {
    const {idStatus,status,description} = req.body;
    await ExampleModel.create({idStatus:Number(idStatus),status,description});
    const records = await ExampleModel.findAll();
    const data = {httpCode:201,
      message:"Registrado correctamente",
      records:records};
      console.log(data);
    res.status(201).render("formExample",data);
}

export function viewFormExample(req:Request,res:Response){
  const data = {httpCode:0,message:"",records:[]};
  res.render("formExample",data);
}