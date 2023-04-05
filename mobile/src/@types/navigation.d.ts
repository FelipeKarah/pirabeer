import { Products } from "../interfaces/Products"
import { Request } from "../interfaces/Request"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      productDetails: Products,
      listenRequestDetails: Request,
      listenProduct: undefined,
      carts: undefined,
      profileAddress: undefined,
      profileRegistration: undefined,
      Carrinho:undefined,
      MeusPedidos:undefined,
      listenRequest:undefined,
    }
  }
}