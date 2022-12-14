import { Request, Response, text } from "express";
import { TablaTutor } from "../models/tutor.model";
import bcrypt from 'bcrypt'
import nodemailer from "nodemailer";

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
    const { idTutor } = req.params
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
  const { nombre, email, username } = req.body
  const passwordR = Math.random().toString(36).slice(-11)
  let password = await bcrypt.hash(passwordR, 8)
  try {
    await TablaTutor.create({ nombre, username, email, password })
    const mailer = nodemailer.createTransport({
      service: process.env.MAILER_SERVICE,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
      }
    })

    await mailer.sendMail({
      from: "< Proyecto Web >",
      to: email,
      subject: 'Credenciales de Acceso',
      html: '<h1> Te has registrado a <strong style="color: red;"> Englishemy </strong></h1><br><h3>User:</h3> ' + username + '<br><h3>Password:</h3> ' + passwordR
    })
    viewTutorRegister(req, res)
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
  } catch (error) {
    console.log(error);
  }
}