// import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import Navigation from "./components/Navigation";
import ProductTable from "./components/ProductTable";
import Form from "./components/Form";

const navigation = new Navigation();
const productTable = new ProductTable();
const form = new Form();

productTable.getProducts();
