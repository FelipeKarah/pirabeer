import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class postRegistrationController {

  async handle(request: Request, response: Response) {
    try{
      const body = request.body.params;
      const idUser = request.params.id;
  
      const user = await prismaClient.user.update({
        where:{
          id: idUser
        },
        data:{
          ...body
        }
      });
  
      return response.status(201).json(user)
    }catch(error){
      return response.status(400).json(error)
    }
   
  }
  
}