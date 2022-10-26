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

export async function updateExample(req: Request, res: Response) {
  const {idStatus} = req.params;
  const {status,description} = req.body;
  const entity = await ExampleModel.findByPk(idStatus);
  entity?.update({status,description});
  res.redirect("/api/v1/example/view/form");
}

export async function deleteExample(req: Request, res: Response) {
  const {idStatus} = req.params;
  const entity = await ExampleModel.findByPk(idStatus);
  entity?.destroy();
  res.redirect("/api/v1/example/view/form");
}

export async function getData(req: Request, res: Response) {
  const records = await ExampleModel.findAll({raw:true});
  res.status(200).json(records);
}




export async function viewFormExample(req:Request,res:Response){
  const records = await ExampleModel.findAll({raw:true});
  const data = {httpCode:0,message:"",records};
  res.render("status/status-view",data);
}

export async function viewFormEditExample(req:Request,res:Response) {
  const {idStatus} = req.params;
  const entity = await ExampleModel.findByPk(idStatus,{raw:true});
  const data = entity || {};
  res.render("status/components/form-edit-component",data);
}