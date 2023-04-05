import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getCategoryController {

  async handle(request: Request, response: Response) {
    const categories = await prismaClient.category.findMany({});

    return response.json(categories)
  }
  
}