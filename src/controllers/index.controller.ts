import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response): Response {
  return res.send("Server running");
}
