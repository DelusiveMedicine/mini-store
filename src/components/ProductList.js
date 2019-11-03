import Handlebars from "handlebars";
import { API } from "../constants";

export default class ProductList {
  constructor() {
    this.productList = document.getElementById("product-list-container");
    this.productListItem = document
      .getElementById("product-list-items")
      .innerHTML.trim();
    this.template = Handlebars.compile(this.productListItem);
    this.productItems = "";
  }

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
