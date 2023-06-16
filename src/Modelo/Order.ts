import Basket from "./Basket";
import UserContact from "./UserContact";

class Order {
  basket: Basket;
  status: string;
  totalPrice: number;
  userContact: UserContact;

  constructor(
    basket: Basket,
    status: string,
    totalPrice: number,
    userContact: UserContact
  ) {
    this.basket = basket;
    this.status = status;
    this.totalPrice = totalPrice;
    this.userContact = userContact;
  }
}

export default Order;
