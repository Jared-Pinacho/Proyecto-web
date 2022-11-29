import { Request, Response } from "express";
import { TablaTutor } from "../models/tutor.model";

//VISTAS

export async function viewTutorLogin(req: Request, res: Response) {
  try {
    const records = await TablaTutor.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/tutor/tutor-login", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}

export async function viewTutorRegister(req: Request, res: Response) {
  try {
    const records = await TablaTutor.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/tutor/tutor-register", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}

export async function viewCrudTutor(req: Request, res: Response) {
  try {
    const records = await TablaTutor.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    res.render("templates/tutor/tutor-crud", data)
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}

//CRUD
export async function getTutor(req: Request, res: Response) {
  try {
    const {idTutor} = req.params
    const tutor = await TablaTutor.findOne({
      where: {
        idTutor
      }
    })
    res.status(201).json(tutor)
  } catch (error) {
    console.log(error)
  }
}

export async function createTutor(req: Request, res: Response) {
  const { nombre, username, email, password } = req.body

  try {
    const nuevoTutor = await TablaTutor.create({ nombre, username, email, password })
    // res.status(201).json(nuevoTutor)
    viewCrudTutor(req, res)
  } catch (error) {
    console.log(error)
  }

}

export async function updateTutor(req: Request, res: Response) {
  // try {
  //   const { idTutor } = req.params
  //   const { body } = req
  //   const tutorId = await TablaTutor.findByPk(idTutor)
  //   await tutorId?.update(body)
  // } catch (error) {
  //   console.log(error);
  // }
}

export async function deleteTutor(req: Request, res: Response) {
  try {
    const { idTutor } = req.params;
    const entity = await TablaTutor.findByPk(idTutor);
    await entity?.destroy()
    viewCrudTutor(req, res)
  } catch (error) {
    console.log(error);
  }
}