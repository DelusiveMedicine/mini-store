export default class AdminTable {
  constructor() {
    this.product = document.querySelector(".product");
    this.API = "https://5db95beaeddc81001495eb0f.mockapi.io/api/products";
  }
  getProducts = () => {
    fetch(this.API)
      .then(res => res.json())
      .then(data => this.showProducts(data))
      .catch(error => console.log(`ERROR ${error}`));
  };
  showProducts = list => {
    console.log(list);
    const productList = list.reduce(
      (acc, item) =>
        acc +
        `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.desc}</td><td>${item.price}</td><td>${item.available}</td><td>${item.img}</td><tr>`,
      ""
    );
    this.product.innerHTML = productList;
  };
}
