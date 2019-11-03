import Handlebars from "handlebars";
import { API } from "../constants";

export default class ProductList {
  constructor() {
    this.productList = document.getElementById("product-list-container");
    this.productList.addEventListener("click", this.addProduct);
    this.productListItem = document
      .getElementById("product-list-items")
      .innerHTML.trim();
    this.template = Handlebars.compile(this.productListItem);
    this.productItems = [];
    this.cartItemsPrice = [];
    this.cartItems = [];
    this.cartButton = document.getElementById("cart-button");
    this.cartButton.addEventListener("click", this.showCartProducts);
    this.message = document.getElementById("message");
    this.customerButton = document.getElementById("customer-button");
    this.customerButton.addEventListener("click", this.getCustomerProducts);
  }

  showCartProducts = async () => {
    if (!this.cartItems.length) {
      this.productList.hidden = true;
      return (this.message.hidden = false);
    }
    this.showProducts(this.cartItems);
  };

  addProduct = event => {
    const target = event.target;
    const pattern = /\d+/g;
    if (target.nodeName === "BUTTON") {
      const price = target.previousSibling.textContent.match(pattern);
      this.cartItemsPrice = [...this.cartItemsPrice, ...price];
      this.getSum(this.cartItemsPrice);
      const parent = target.parentNode.parentNode;
      const title = parent.querySelector("h3").textContent;
      const desc = parent.querySelector("p").textContent;
      const addedToCart = this.productItems.find(
        el => el.name === title && el.desc === desc
      );
      return (this.cartItems = [...this.cartItems, addedToCart]);
    }
  };

  getSum = arr => {
    const sum = arr.reduce((acc, el) => acc + Number(el), 0);
    this.cartButton.textContent = `$${sum}`;
  };

  getCustomerProducts = () => {
    fetch(API)
      .then(res => {
        if (res.ok) return res.json();
        throw Error(response.status + " " + response.statusText);
      })
      .then(data => this.showProducts(data))
      .catch(error => console.log(`ERROR ${error}`));
  };

  showProducts = list => {
    this.productItems = list.filter(item => item.available);
    const markup = this.productItems.reduce(
      (acc, el) => acc + this.template(el),
      ""
    );
    this.productList.innerHTML = markup;
  };
}
