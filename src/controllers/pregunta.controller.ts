import { Request, Response } from "express";
import { TablaPregunta } from "../models/pregunta.model";
import { tutorado } from "../controllers/tutorado.controller";

export async function viewPreguntaBeginner(req: Request, res: Response) {
  if (tutorado) {
    try {
      const records = await TablaPregunta.findAll({
        where: {
          idTutor: tutorado['idTutor'],
          nivel: 'principiante'
        }
      })
      res.render("templates/pregunta/pregunta-beginner", { records })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send('<strong> You have not entered a <a href="/tutorado/codigo">code</a> </strong>')
  }
}