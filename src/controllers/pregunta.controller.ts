import { Request, Response } from "express";
import { TablaPregunta } from "../models/pregunta.model";
import { TablaTutor } from "../models/tutor.model";

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

export async function viewTutorAdmin(req: Request, res: Response) {
  try {
    const {idTutor, username} = req.params
    const recordsTutor = await TablaTutor.findOne({
      where: {
        username
      }
    })
    const records = await TablaPregunta.findAll({
      where: {
        idTutor
      }
    })

    const data = { httpCode: 0, message: recordsTutor, records }
    if (recordsTutor != null) {
      res.render("templates/tutor/tutor-admin", data)
    }
  } catch (error) {
    console.log(error)
  }
}

//CRUD
export async function createPregunta(req: Request, res: Response) {
  const { pregunta, idTutor, opcion1, opcion2, opcion3, opcion4, respuesta } = req.body

  try {
    const nuevoTutor = await TablaPregunta.create({ pregunta, idTutor, opcion1, opcion2, opcion3, opcion4, respuesta })
    // res.status(201).json(nuevoTutor)
    viewTutorAdmin(req, res)
  } catch (error) {
    console.log(error)
  }
}

export async function deletePregunta(req: Request, res: Response) {
  try {
    const { idPregunta } = req.params;
    const entity = await TablaPregunta.findByPk(idPregunta);
    await entity?.destroy()
  } catch (error) {
    console.log(error);
  }
}


// const {usuario,email,telefono,contraseña} = req.body
//   await TablaTutor.create({usuario,email,telefono,contraseña});