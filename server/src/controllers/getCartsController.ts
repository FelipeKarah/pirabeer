import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getCartsController {

  async handle(request: Request, response: Response) {
    const idUser = request.params.id;

    const carts = await prismaClient.cart.findMany({
      where:{
        userId : idUser,
        status: 'Ativo'
      },
      include:{
        products:{
          include:{
            category:{
              select:{
                title: true
              }
            }
          }
        }
      }
    });


    return response.json(carts)
  }
  
}