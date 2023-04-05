import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class postCartsController {

  async handle(request: Request, response: Response) {
    const body = request.body.params;
    const carts = await prismaClient.cart.create({
      data:{
        ...body
      }
    });

    return response.status(201).json(carts)
  }
  
}