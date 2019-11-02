import Handlebars from "handlebars";
import { API } from "../constants";

export default class ProductTable {
  constructor(showForm, getProduct) {
    this.showForm = showForm;
    this.getProduct = getProduct;
    this.product = document.querySelector(".product");
    this.productContainer = document
      .getElementById("product-container")
      .innerHTML.trim();
    this.template = Handlebars.compile(this.productContainer);
    this.productList = "";
    this.delete = document.getElementById("delete-button");
    this.edit = document.getElementById("edit-button");
    this.product.addEventListener("click", this.handleDelete);
  }

  handleDelete = event => {
    const product = event.target;
    const productData = product.parentElement.parentElement;
    const productCode = productData.firstElementChild;
    const id = productCode.textContent;

    if (product.dataset.action === "delete")
      return fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(productData.remove())
        .catch(error => console.log(`ERROR ${error}`));

    if (product.dataset.action === "edit") {
      this.showForm();
      this.getProduct(id);
    }
  };

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
