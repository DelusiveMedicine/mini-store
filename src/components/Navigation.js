export default class Navigation {
  constructor() {
    this.adminButton = document.getElementById("admin-button");
    this.adminButton.addEventListener("click", this.showTable);
    this.productTable = document.getElementById("product-table");
    this.createButton = document.getElementById("create-button");
    this.productForm = document.getElementById("product-form");
    this.createButton.addEventListener("click", this.showForm);
  }
  showTable = () => {
    if (this.productTable.hidden) {
      this.productTable.hidden = false;
      this.productForm.hidden = true;
      this.createButton.hidden = false;
    }
  };

  showForm = () => {
    this.productTable.hidden = true;
    this.productForm.hidden = false;
    this.createButton.hidden = true;
  };
}
