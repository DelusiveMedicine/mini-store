import Handlebars from "handlebars";
import { API } from "../constants";

export default class ProductTable {
  constructor() {
    this.product = document.querySelector(".product");
    this.productContainer = document
      .getElementById("product-container")
      .innerHTML.trim();
    this.template = Handlebars.compile(this.productContainer);
    this.productList = "";
  }

  getProducts = () => {
    fetch(API)
      .then(res => {
        if (res.ok) return res.json();
        throw Error(response.status + " " + response.statusText);
      })
      .then(data => this.showProducts(data))
      .catch(error => console.log(`ERROR ${error}`));
  };

  showProducts = list => {
    this.productList = list;
    const markup = list.reduce((acc, el) => acc + this.template(el), "");
    this.product.innerHTML = markup;
  };
}
