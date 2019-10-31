/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/components/Admin_table.js":
      /*!***************************************!*\
  !*** ./src/components/Admin_table.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminTable; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar AdminTable = function AdminTable() {\n  var _this = this;\n\n  _classCallCheck(this, AdminTable);\n\n  _defineProperty(this, "getProducts", function () {\n    fetch(_this.API).then(function (res) {\n      if (res.ok) return res.json();\n      throw Error(response.status + " " + response.statusText);\n    }).then(function (data) {\n      return _this.showProducts(data);\n    })["catch"](function (error) {\n      return console.log("ERROR ".concat(error));\n    });\n  });\n\n  _defineProperty(this, "showProducts", function (list) {\n    var productList = list.reduce(function (acc, item) {\n      return acc + "<tr><td>".concat(item.id, "</td><td>").concat(item.name, "</td><td>").concat(item.desc, "</td><td>").concat(item.price, "</td><td>").concat(item.available, "</td><td><img src=").concat(item.img, " alr=").concat(item.name, " width=\\"50\\"></td><tr>");\n    }, "");\n    _this.product.innerHTML = productList;\n  });\n\n  this.product = document.querySelector(".product");\n  this.API = "https://5db95beaeddc81001495eb0f.mockapi.io/api/products";\n  this.createBtn = document.getElementById("create"); // this.createBtn.addEventListener("click", form.handleCreate);\n};\n\n\n\n//# sourceURL=webpack:///./src/components/Admin_table.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Admin_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Admin_table */ "./src/components/Admin_table.js");\n// import "bootstrap/dist/css/bootstrap.css";\n\n\nvar adminTable = new _components_Admin_table__WEBPACK_IMPORTED_MODULE_1__["default"]();\nadminTable.getProducts();\n\n//# sourceURL=webpack:///./src/index.js?'
        );

        /***/
      },

    /***/ "./src/style.scss":
      /*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval("\n\n//# sourceURL=webpack:///./src/style.scss?");

        /***/
      }

    /******/
  }
);
