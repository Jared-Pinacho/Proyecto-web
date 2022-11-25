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

export async function viewCrudPregunta(req: Request, res: Response) {
  try {
    const records = await TablaPregunta.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/pregunta/pregunta-crud", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}

export async function createPregunta(req: Request, res: Response) {
  const { pregunta, opcion1, opcion2, opcion3, opcion4, respuesta } = req.body

  try {
    const nuevoTutor = await TablaPregunta.create({ pregunta, opcion1, opcion2, opcion3, opcion4, respuesta })
    // res.status(201).json(nuevoTutor)
    viewCrudPregunta(req, res)
  } catch (error) {
    console.log(error)
  }

}


// const {usuario,email,telefono,contraseña} = req.body
//   await TablaTutor.create({usuario,email,telefono,contraseña});