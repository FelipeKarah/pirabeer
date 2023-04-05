import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class postRequestController {

  async handle(request: Request, response: Response) {
    const body = request.body.params;
    const idUser = request.params.id;

    let requestData = JSON.parse(JSON.stringify(body))
    delete(requestData?.products)

    // console.log(requestData);
    // return;
    try {
      const _request = await prismaClient.request.create({
        data:{
          ...requestData
        }
      });

      const teste = await body.products.map(async (product: any) => {
        await prismaClient.productsRequest.create({
          data:{
            requestId: _request.id,
            productId: product.productId,
            amount: product.amount,
            value: product.products.value,
          }
        });
      })

      await prismaClient.cart.deleteMany({
        where: {
          userId: idUser
        }
      });

      return response.status(201).json({request:_request})
    } catch (err) {
      console.log(err)
      return response.status(400).json({message:'Erro ao cadastrar o pedido'})
    }
    
  }
  
}