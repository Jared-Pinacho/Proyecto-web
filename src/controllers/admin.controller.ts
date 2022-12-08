import { Request, Response } from "express";
import { TablaLeccion } from "../models/leccion.model";
import { TablaPregunta } from "../models/pregunta.model";
import { TablaTutor } from "../models/tutor.model";
import { TablaTutorado } from "../models/tutorado.model";
import bcrypt from 'bcrypt'

declare module 'express-session' {
    export interface SessionData {
        user: string[]
    }
}

var tutorID: any;

export async function viewTutoradoNivel(req: Request, res: Response) {
    const { codigo } = req.body
    const tutorado = await TablaTutor.findOne({
        where: {
            codigo
        }
    })
    if (tutorado) {
        res.render("templates/tutorado/tutorado-nivel")
    } else {
        res.send('<strong>Code does not exist</strong>')
    }
}

export async function viewAddTutorado(req: Request, res: Response) {
    if (req.session.user) {
        const tutorData = req.session.user[0]
        res.render("templates/tutor/tutor-admin-addtutorado", { tutorData })
    } else {
        res.send('<strong> You are not <a href="/tutor/login">logged in</a> </strong>')
    }
}

export async function viewAddTutoradoTable(req: Request, res: Response) {
    const { idTutorado } = req.body
    if (req.session.user) {
        const records = await TablaLeccion.findAll({
            where: {
                idTutorado
            }
        })
        res.render("templates/tutorado/tutorado-table", { records })
    } else {
        res.send('<strong> You are not <a href="/tutor/login">logged in</a> </strong>')
    }
}

export async function viewAddPregunta(req: Request, res: Response) {
    if (req.session.user) {
        const tutorData = req.session.user[0]
        res.render("templates/tutor/tutor-admin-addpregunta", { tutorData })
    } else {
        res.send('<strong> You are not <a href="/tutor/login">logged in</a> </strong>')
    }
}

export async function viewTutorAdminLog(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const tutorData = req.session.user[0]
            const recordsPreguntas = await TablaPregunta.findAll({
                where: {
                    idTutor: tutorID
                }
            })
            const recordsTutorados = await TablaTutorado.findAll({
                where: {
                    idTutor: tutorID
                }
            })
            res.render("templates/tutor/tutor-admin-tables", { tutorData, recordsPreguntas, recordsTutorados })
        } else {
            res.send('<strong> You are not <a href="/tutor/login">logged in</a> </strong>')
        }
    } catch (error) {
        console.log(error);
    }
}

export async function viewTutorAdmin(req: Request, res: Response) {
    try {
        const { username, password } = req.body
        const tutor = await TablaTutor.findOne({
            where: {
                username
                
            }
        })
        if (tutor) {
            const flag = bcrypt.compareSync(password, tutor?.dataValues['password'])
            if(flag){
                const recordsPreguntas = await TablaPregunta.findAll({
                    where: {
                        idTutor: tutor?.dataValues['idTutor']
                    }
                })
                const recordsTutorados = await TablaTutorado.findAll({
                    where: {
                        idTutor: tutor?.dataValues['idTutor']
                    }
                })

                tutorID = tutor?.dataValues['idTutor']
                req.flash('user', tutor?.dataValues)
                req.session.user = req.flash('user')
                const tutorData = req.session.user[0]
                const data = { httpCode: 0, tutorData, recordsPreguntas, recordsTutorados }
                res.render("templates/tutor/tutor-admin-tables", data)
            } else{
                res.send('<strong>Invalid password</strong>')
            }
        } else {
            res.send('<strong>Username does not exist</strong>')
        }
    } catch (error) {
        console.log(error)
    }
}

//CRUD PREGUNTA
export async function createPregunta(req: Request, res: Response) {
    const { pregunta, idTutor, nivel, opcion1, opcion2, opcion3, opcion4, respuesta } = req.body
    try {
        await TablaPregunta.create({ pregunta, idTutor, nivel, opcion1, opcion2, opcion3, opcion4, respuesta })
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

export async function deletePregunta(req: Request, res: Response) {
    try {
        const { idPregunta } = req.params;
        await TablaPregunta.destroy({
            where: {
                idPregunta
            }
        })
    } catch (error) {
        console.log(error);
    }
    
}

// CRUD TUTURADO
export async function createTutorado(req: Request, res: Response) {
    const { idTutor, codigo, nombre, edad, sexo } = req.body
    try {
        await TablaTutorado.create({ idTutor, codigo, nombre, edad, sexo })
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}