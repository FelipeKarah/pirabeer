import { Products } from "../../interfaces/Products";
import api from "../api/api";

export async function getProducts() {

  try {
    const response: Products = await api.get(`/products`, { params :{categoryId:'aaeede51-ff9f-4f7d-9428-8019c5d23d63'}})

    return response
  } catch (error) {

    console.log(error)
  }
}