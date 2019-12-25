import { API } from "../constants";

export default class Form {
  constructor(showTable, getProducts, getCustomerProducts) {
    this.showTable = showTable;
    this.getProducts = getProducts;
    this.getCustomerProducts = getCustomerProducts;
    this.form = document.querySelector("form");
    this.form.addEventListener("change", this.handleChange);
    this.form.addEventListener("submit", this.handleSubmit);
    this.newProduct = {
      name: "",
      desc: "",
      img: "",
      available: "",
      price: ""
    };
    this.targetProduct = "";
    this.allInputs = Array.from(document.querySelectorAll("input[name]"));
    this.desc = document.querySelector("textarea");
    this.isAvailable = document.getElementById("available");
    this.isAvailable.addEventListener("click", this.handleCheckbox);
  }

  handleCheckbox = event => {
    const checkbox = event.target;
    if (checkbox.hasAttribute("checked")) {
      checkbox.removeAttribute("checked");
    } else {
      checkbox.setAttribute("checked", "");
    }
  };

  showProduct = item => {
    this.newProduct = { ...item };
    this.desc.value = item.desc;

    return this.allInputs.forEach(input => {
      if (input.name === "available" && item.available)
        input.setAttribute("checked", "");
      if (input.name !== "available") input.value = item[input.name];
      if (input.name === "code") input.value = item.id;
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.newProduct.id;
    const method = id ? "PUT" : "POST";
    fetch(`${API}/${id}`, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.newProduct)
    })
      .then(res => {
        if (res.ok) return this.getProducts();
        throw Error(res.status + " " + res.statusText);
      })
      .then(this.showTable())
      .catch(error => console.log(`ERROR ${error}`));
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "available" && target.hasAttribute("checked")) {
      this.newProduct.available = true;
    }
    if (name === "available" && !target.hasAttribute("checked")) {
      this.newProduct.available = false;
    }

    if (name === "img") this.validateImage(value);

    if (name !== "available") this.newProduct[name] = value;
  };

  validateImage = url => {
    const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (!url.match(pattern)) {
      alert("Please, enter valid URL");
    }
  };
}
