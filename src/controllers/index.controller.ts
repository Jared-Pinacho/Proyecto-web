import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response): Response {
  return res.send("Server running");
}

export function mainResponse(req: Request, res: Response): Response {
  const html = `
  <h1>Soy un titulo</h1>
  <input>`;

  return res.send(html);
}

export function sumaParametrosResponse(req: Request, res: Response): Response {
  const argumentos = req.query;

  /* const numeroA = argumentos.numeroA;
  const otroNumero = argumentos.otroNumero; */

  const { numeroA, otroNumero } = argumentos;
  if(numeroA !== undefined && otroNumero !== undefined){
    const suma = Number(numeroA) + Number(otroNumero);
    return res.status(200).send(`Soy la suma ${suma}`);
  }else{
    return res.status(400).send("No puedo Marta");
  }
  
  
}

export function sumaParametrosFijosResponse(req: Request, res: Response): Response {
  const argumentos = req.params;

  /* const numeroA = argumentos.numeroA;
  const otroNumero = argumentos.otroNumero; */

  const { numeroA, numeroB } = argumentos;
  if(numeroA !== undefined && numeroB !== undefined){
    const suma = Number(numeroA) + Number(numeroB);
    return res.status(200).send(`Soy la suma ${suma}`);
  }else{
    return res.status(400).send("No puedo Marta");
  } 
}

