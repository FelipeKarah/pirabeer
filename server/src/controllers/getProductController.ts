import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class getProductController {

  async handle(request: Request, response: Response) {
    let params: any = {...request.query};

    
    if(params.sale){
      const sale = params?.sale == 'true' ? true : false;
      params['sale'] = sale
    }

    const products = await prismaClient.product.findMany({
      where:{
        sale: params?.sale,
        status: params?.status,
        categoryId: params?.categoryId,
        title:{
          contains: params.title
        }
      },
      include:{
        category:{
          select:{
            title: true
          }
        }
      }
    });

    return response.json(products)
  }

}