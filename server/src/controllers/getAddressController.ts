import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getAddressController {

  async handle(request: Request, response: Response) {
    const idUser = request.params.id;

    const carts = await prismaClient.address.findMany({
      where:{
        userId : idUser,
        status: 'Ativo'
      }
    });


    return response.json(carts)
  }
  
}