import { Address } from './Address';
import { Products } from "./Products"
import { ProductsRequest } from './ProductsRequest';

export interface Request {
  id: string;
  cod: string;
  userId: string;
  status: string;
  freightage: string;
  temperature: string;
  addressDeliveryId: string;
  note: string;
  dateDelivery: string;
  expectedDelivery: string;
  createdAt: string;
  cupomId: string;
  value: string;
  valueFrete:string;
  productsRequest: ProductsRequest[];
  address: Address;
}