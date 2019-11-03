"use strict";

import "./style.scss";
import "./icons/icons.svg";
import Navigation from "./components/Navigation";
import ProductTable from "./components/ProductTable";
import Form from "./components/Form";
import ButtonActions from "./components/ButtonActions";
import ProductList from "./components/ProductList";

const navigation = new Navigation();
const productTable = new ProductTable(navigation.showForm);
const productList = new ProductList();
const form = new Form(
  navigation.showTable,
  productTable.getProducts,
  productList.getCustomerProducts
);
const buttons = new ButtonActions(navigation.showForm, form.showProduct);

productTable.getProducts();
productList.getCustomerProducts();
