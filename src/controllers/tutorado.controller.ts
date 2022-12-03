import { Request, Response } from "express";
import { TablaTutorado } from "../models/tutorado.model";

//VISTAS
export async function viewTutoradoCodigo(req: Request, res: Response) {
  try {
    const records = await TablaTutorado.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/tutorado/tutorado-codigo", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}

export async function viewTutoradoNivel(req: Request, res: Response) {
  const { codigo } = req.body
  try {
    const tutorado = await TablaTutorado.findOne({
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

export async function viewTutoradoCrud(req: Request, res: Response) {
  try {
    const records = await TablaTutorado.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/tutorado/tutorado-crud", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}


//CRUD
export async function getTutorado(req: Request, res: Response) {
  try {
    const { idTutorado } = req.params
    const tutorado = await TablaTutorado.findOne({
      where: {
        idTutorado
      }
    })
    res.status(201).json(tutorado)
  } catch (error) {
    console.log(error)
  }
}

export async function createTutorado(req: Request, res: Response) {
  const { idTutor, codigo, nombre, edad, sexo } = req.body

  try {
    const nuevoTutorado = await TablaTutorado.create({ idTutor, codigo, nombre, edad, sexo })
    // res.status(201).json(nuevoTutorado)
    viewTutoradoCrud(req, res)
  } catch (error) {
    console.log(error)
  }
}

// falta hacer boton para edit y delete
export async function updateTutorado(req: Request, res: Response) {
  try {
    const { idTutorado } = req.params;
    const { body } = req;
    const tutoradoId = await TablaTutorado.findByPk(idTutorado);
    res.json(tutoradoId);
    await tutoradoId?.update(body);
    res.status(201).json(tutoradoId?.toJSON());
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTutorado(req: Request, res: Response) {
  try {
    const { idTutorado } = req.params;
    const entity = await TablaTutorado.findByPk(idTutorado);
    await entity?.destroy();
    res.status(204)
  } catch (error) {
    console.log(error);
  }
}