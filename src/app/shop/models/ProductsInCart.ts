export interface ProductsInCart {
  cartItems: {
    nameOfItem: string;
    priceOfItem: number;
    productIndex: {integerValue: string};
    quantity: number;
  }[]
}
