export default class Navigation {
  constructor() {
    this.adminButton = document.getElementById("admin-button");
    this.adminButton.addEventListener("click", this.showTable);
    this.customerButton = document.getElementById("customer-button");
    this.customerButton.addEventListener("click", this.showList);
    this.productTable = document.getElementById("product-table");
    this.createButton = document.getElementById("create-button");
    this.cartButton = document.getElementById("cart-button");
    this.productForm = document.getElementById("product-form");
    this.createButton.addEventListener("click", this.showForm);
    this.allInputs = Array.from(document.querySelectorAll("input[name]"));
    this.desc = document.querySelector("textarea");
    this.container = document.getElementById("product-list");
    this.productList = document.getElementById("product-list-container");
    this.message = document.getElementById("message");
  }
  showTable = () => {
    this.productTable.hidden = false;
    this.productForm.hidden = true;
    this.createButton.hidden = false;
    this.container.hidden = true;
    this.cartButton.hidden = true;
    this.productList.hidden = true;
  };

  showForm = () => {
    this.productTable.hidden = true;
    this.productForm.hidden = false;
    this.createButton.hidden = true;
    this.container.hidden = true;
    this.cartButton.hidden = true;
    this.productList.hidden = true;
    this.desc.value = "";
    return this.allInputs.map(input => (input.value = ""));
  };

  showList = () => {
    this.createButton.hidden = true;
    this.cartButton.hidden = false;
    if (!this.productTable.hidden) this.productTable.hidden = true;
    if (!this.productForm.hidden) this.productForm.hidden = true;
    this.container.hidden = false;
    if (!this.message.hidden) this.message.hidden = true;
    this.productList.hidden = false;
  };
}
