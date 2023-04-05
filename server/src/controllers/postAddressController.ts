import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class postAddressController {

  async handle(request: Request, response: Response) {
    const body = request.body.params;

    const address = await prismaClient.address.create({
      data:{
        ...body
      }
    });

    return response.status(201).json(address)
  }
  
}