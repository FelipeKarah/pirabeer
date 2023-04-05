export interface Products {
  id : string
  title : string
  bannerUrl : string
  value : string
  brand : string
  categoryId : string
  kit : boolean
  sale : boolean
  dtSale : Date
  vlSale : string
  amount : number
  status : string
  category:{
    title:string
  }
}