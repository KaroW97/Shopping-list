/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
eval("console.log('jestem');\n\nvar createElement = function createElement(element) {\n  return document.createElement(element);\n};\n\nvar appendChild = function appendChild(parent, element) {\n  return parent.appendChild(element);\n};\n\nvar querySelector = function querySelector(element) {\n  return document.querySelector(element);\n};\n\nvar getElementById = function getElementById(element) {\n  return document.getElementById(element);\n};\n\nvar setListLength = function setListLength(length) {\n  var list_length = getElementById('list-length');\n  list_length.innerText = \"d\\u0142ugo\\u015B\\u0107 listy:\".concat(length);\n};\n\nvar filterData = function filterData(clicked) {\n  var newList;\n  fetch('/list').then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var list = data;\n    clicked.toLowerCase() !== 'wszystko' ? //if clicked is 'wszystko' then return all list else filter and return only maching \n    newList = list.list.filter(function (product) {\n      return product.product_select.toLowerCase() === clicked.toLowerCase();\n    }) : newList = list.list;\n    loadData('shopping-list', newList);\n  });\n};\n\nwindow.onload = function () {\n  fetch('/list').then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var arr = data;\n    var section = getElementById('section');\n    var header_article = getElementById('header-article');\n    arr.categories.forEach(function (item) {\n      //filtering categories\n      if (item != 'Wszystko') {\n        //adding categories to select, if item is different then 'wszystko' add it as option\n        var option = createElement('option');\n        option.text = item;\n        getElementById('product_select').add(option);\n      }\n\n      var p = createElement('p'); //creating headers\n\n      p.textContent = item;\n      p.classList.add(\"space-category-article\");\n\n      p.onclick = function () {\n        filterData(p.innerText);\n      };\n\n      appendChild(header_article, p); //append header to article and then to the section\n\n      section.prepend(header_article);\n      setListLength(arr.length); //set list lenght\n    });\n  });\n};\n\n//# sourceURL=webpack://rekrutacja-4/./src/js/index.js?");
/******/ })()
;