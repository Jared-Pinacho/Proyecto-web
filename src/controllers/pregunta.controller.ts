import { Request, Response } from "express";
import { TablaPregunta } from "../models/pregunta.model";
import { TablaLeccion } from "../models/leccion.model";
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
      res.render("templates/pregunta/pregunta-beginner", { records, tutorado })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send('<strong> You have not entered a <a href="/tutorado/codigo">code</a> </strong>')
  }
}

export async function viewPreguntaIntermediate(req: Request, res: Response) {
  if (tutorado) {
    try {
      const records = await TablaPregunta.findAll({
        where: {
          idTutor: tutorado['idTutor'],
          nivel: 'intermedio'
        }
      })
      res.render("templates/pregunta/pregunta-intermediate", { records, tutorado })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send('<strong> You have not entered a <a href="/tutorado/codigo">code</a> </strong>')
  }
}

export async function viewPreguntaAdvanced(req: Request, res: Response) {
  if (tutorado) {
    try {
      const records = await TablaPregunta.findAll({
        where: {
          idTutor: tutorado['idTutor'],
          nivel: 'avanzado'
        }
      })
      res.render("templates/pregunta/pregunta-advanced", { records, tutorado })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send('<strong> You have not entered a <a href="/tutorado/codigo">code</a> </strong>')
  }
}

export async function saveLeccion(req: Request, res: Response) {
  const { idTutorado, nombre, nivel, aciertos } = req.body
  try {
    await TablaLeccion.create({ idTutorado, nombre, nivel, aciertos})
    res.redirect('/tutorado/nivel')
  } catch (error) {
    console.log(error)
  }
}
