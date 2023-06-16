import ProductoDestacado from "./ProductoDestacado";

export default class BasketDetail {
  product: ProductoDestacado;
  quantity: number;
  totalPrice: number;
  discountPercentage: number;

  constructor(
    product: ProductoDestacado,
    quantity: number,
    totalPrice: number,
    discountPercentage: number
  ) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.discountPercentage = discountPercentage;
  }
}
