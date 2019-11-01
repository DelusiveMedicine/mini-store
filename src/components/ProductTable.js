export default class ProductTable {
  constructor() {
    this.product = document.querySelector(".product");
    this.API = "https://5db95beaeddc81001495eb0f.mockapi.io/api/products";
  }

  getProducts = () => {
    fetch(this.API)
      .then(res => {
        if (res.ok) return res.json();
        throw Error(response.status + " " + response.statusText);
      })
      .then(data => this.showProducts(data))
      .catch(error => console.log(`ERROR ${error}`));
  };
  showProducts = list => {
    const productList = list.reduce(
      (acc, item) =>
        acc +
        `<tr><th>${item.id}</th><td>${item.name}</td><td>${item.desc}</td><td>${item.price}</td><td>${item.available}</td><td><img src=${item.img} alr=${item.name} width="50"></td><tr>`,
      ""
    );
    this.product.innerHTML = productList;
  };
}
