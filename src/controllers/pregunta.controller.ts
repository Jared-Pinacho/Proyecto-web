import { Request, Response } from "express";
import { TablaPregunta } from "../models/pregunta.model";

export async function viewPregunta(req: Request, res: Response) {
  try {
    const records = await TablaPregunta.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/pregunta/pregunta-view", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}