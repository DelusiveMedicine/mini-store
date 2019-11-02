"use strict";

import "./style.scss";
import "./icons/symbols.svg";
import Navigation from "./components/Navigation";
import ProductTable from "./components/ProductTable";
import Form from "./components/Form";

const navigation = new Navigation();
const productTable = new ProductTable();
const form = new Form(navigation.showTable, productTable.getProducts);

productTable.getProducts();
