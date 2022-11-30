import { TutoradoModel } from '../models/tutorado.model';
import { Request, Response } from "express";
import { json } from "sequelize";


export const getTutorados = async (req: Request, res: Response) => {
    try {
        const tutorados = await TutoradoModel.findAll();
     
       console.log(tutorados)

        res.json(tutorados);
    } catch (error) {
        return res.status(500).json({ message: "error" });
    }
};

export const getTutorado = async (req: Request, res: Response) => {
    try {
        const { idTutorado } = req.params
        
        const tutorado = await TutoradoModel.findOne({
            where: {
                idTutorado,
            },
        })
        res.json(tutorado)

    } catch (error) {
        return res.status(500).json({ message: "error" });
    }

};




export const createTutorados = async (req: Request, res: Response) => {
    const { idTutor, nombre, edad, sexo, aciertos } = req.body

    try {
        const newTutorado = await TutoradoModel.create({
            idTutor,
            nombre,
            edad,
            sexo,
            aciertos

        })
        res.json(newTutorado)

    } catch (error) {
        return res.status(500).json({ message: "error.message" });
    }
};

/*
export const deleteTutorado = async (req: Request, res: Response) => {
    const { idTutorado } = req.params;

    try {

        const result = await TutoradoModel.destroy({
            where: {
                idTutorado
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500), json({ message: "error al eliminar" })
    }
};*/

export async function deleteTutorado(req: Request, res: Response) {
    const { idTutorado } = req.params;

    const entity = await TutoradoModel.findByPk(idTutorado);
    await entity?.destroy();
    
    res.status(204).json({ok:""});
  }




export const updateTutorados = async (req: Request, res: Response) => {
    try {
        const {idTutorado} = req.params;
    const {idTutor,nombre,edad,sexo,aciertos} = req.body;
    const entity = await TutoradoModel.findByPk(idTutorado);
    entity?.update({idTutor,nombre,edad,sexo,aciertos});

    res.json(entity);
    } catch (error) {
        return res.status(500), json({ message: "error al actualizar" })
    }
};