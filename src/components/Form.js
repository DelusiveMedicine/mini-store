import { API } from "../constants";

export default class Form {
  constructor(showTable, getProducts) {
    this.showTable = showTable;
    this.getProducts = getProducts;
    this.form = document.querySelector("form");
    this.form.addEventListener("change", this.handleChange);
    this.button = document.getElementById("form-button");
    this.form.addEventListener("submit", this.handleSubmit);
    this.newProduct = { available: false };
  }

  handleSubmit = async event => {
    event.preventDefault();
    await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.newProduct)
    })
      .then(this.getProducts)
      .catch(error => console.log(`ERROR ${error}`));
    this.showTable();
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.newProduct[name] = value;
    if (this.newProduct.available) this.newProduct.available = true;
    const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (name === "img" && !value.match(pattern)) {
      alert("Please, enter valid URL");
    }
  };
}
