import BasketDetail from "./BasketDetail";

export default class Basket {
  basketDetails: BasketDetail[];

  constructor(basketDetails: BasketDetail[]) {
    this.basketDetails = basketDetails;
  }

  agregarDetalle(basketDetail: BasketDetail) {
    this.basketDetails.push(basketDetail);
  }
}
