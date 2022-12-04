import { Request, Response } from "express";
import { TablaTutorado } from "../models/tutorado.model";

export var tutorado: any

//VISTAS
export async function viewTutoradoCodigo(req: Request, res: Response) {
    res.render("templates/tutorado/tutorado-codigo")
}

export async function viewTutoradoNivel(req: Request, res: Response) {
  const { codigo } = req.body
  try {
    tutorado = await TablaTutorado.findOne({
      where: {
        codigo
      }
    })
    if (tutorado) {
      res.render("templates/tutorado/tutorado-nivel")
    } else {
      res.send('<strong>Code does not exist <a href="/tutorado/codigo">Back</a></strong>')
    }
  } catch (error) {
    console.log(error);
  }
}

export async function viewTutoradoBeginner(req: Request, res: Response) {
  if (tutorado) {
    res.render("templates/pregunta/pregunta-beginner")
  } else {
    res.send('<strong> You have not entered a <a href="/tutorado/codigo">code</a> </strong>')
  }
  
}
