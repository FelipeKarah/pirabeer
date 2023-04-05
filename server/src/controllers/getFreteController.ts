import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getFreteController {

  async handle(request: Request, response: Response) {
    let params: any = {...request.query};

    const frete = await prismaClient.frete.findFirst({
      where:{
        ...params 
      }
    });

    return response.json(frete)
  }
  
}