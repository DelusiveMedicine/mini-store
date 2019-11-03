import { API } from "../constants";

export default class ButtonActions {
  constructor(showForm, showProduct) {
    this.showForm = showForm;
    this.showProduct = showProduct;
    this.product = document.querySelector(".product");
    this.product.addEventListener("click", this.handleClick);
  }

  handleClick = event => {
    const button = event.target;
    const productRow = button.parentElement.parentElement;
    const productCode = productRow.firstElementChild;
    const id = productCode.textContent;

    if (button.dataset.action === "delete")
      return fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(productRow.remove())
        .catch(error => console.log(`ERROR ${error}`));

    if (button.dataset.action === "edit") {
      this.getProduct(id);
      this.showForm();
    }
  };

  getProduct = id => {
    fetch(`${API}/${id}`)
      .then(res => {
        if (res.ok) return res.json();
        throw Error(response.status + " " + response.statusText);
      })
      .then(data => this.showProduct(data))
      .catch(error => console.log(`ERROR ${error}`));
  };
}
