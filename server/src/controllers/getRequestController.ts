import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getRequestController {

  async handle(request: Request, response: Response) {
    const idUser = request.params.id;

    const requests = await prismaClient.request.findMany({
      where:{
        userId : idUser,
      },
      include:{
        address:{
        },
        productsRequest:{
          include:{
            produtos:{}
          }
        }
      },
      orderBy:[{cod: 'desc'}]
    });

    return response.json(requests)
  }
  
}