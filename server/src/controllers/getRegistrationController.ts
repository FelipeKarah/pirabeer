import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getRegistrationController {

  async handle(request: Request, response: Response) {
    const idUser = request.params.id;

    const user = await prismaClient.user.findFirst({
      where:{
        id : idUser,
      }
    });


    return response.json(user)
  }
  
}