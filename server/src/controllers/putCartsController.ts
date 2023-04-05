import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class putCartsController {

  async handle(request: Request, response: Response) {
    const body = request.body.params;
    const id = request.params.id;

    const carts = await prismaClient.cart.update({
      where: {
        id
      },
      data:{
        ...body
      }
    });

    return response.status(201).json(carts)
  }
  
}