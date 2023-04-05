import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class deleteCartsController {

  async handle(request: Request, response: Response) {
    const body = request.body.params;
    const id = request.params.id;

    const carts = await prismaClient.cart.delete({
      where: {
        id
      }
    });

    return response.status(201).json(carts)
  }
  
}