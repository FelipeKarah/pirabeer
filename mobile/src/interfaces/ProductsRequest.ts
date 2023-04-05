import { Products } from './Products';
export interface ProductsRequest {
  id: string;
  requestId: string;
  productId: string;
  amount: string;
  value: string;
  produtos: Products
}