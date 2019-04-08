(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry"],{

/***/ "./assets/App.vue":
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03& */ "./assets/App.vue?vue&type=template&id=5bcdaf03&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/App.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03&":
/*!*******************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5bcdaf03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/App.vue?vue&type=template&id=5bcdaf03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5bcdaf03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/api/Api.js":
/*!***************************!*\
  !*** ./assets/api/Api.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseurl = "http://127.0.0.1:8000";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = baseurl;
/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(params, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/admin/login', params).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  checkUrl: function checkUrl(url, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/admin/checkurl?url=' + url, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  getList: function getList(page, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/admin/article/' + page + "/2", {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        if (response.status == 200) {
          var data = response.data.data.lists;

          for (var i = 0; i < data.length; i++) {
            data[i].status = data[i].status == 1 ? true : false;
          }

          response.data.data.lists = data;
        }

        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  "delete": function _delete(id, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/admin/article/' + id, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  add: function add(params, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/admin/article/', params, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  update: function update(id, params, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/admin/article/' + id, params, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  get: function get(id, callback) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/admin/article/' + id, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  enable: function enable(id) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/admin/article/' + id, {}, {
      headers: {
        'token': this.token()
      }
    }).then(function (response) {
      if (typeof callback == "function") {
        callback(response);
      }
    })["catch"](function (error) {
      if (typeof callback == "function") {
        callback(error);
      }
    });
  },
  token: function token() {
    return localStorage.getItem("token");
  }
});

/***/ }),

/***/ "./assets/assets/common.scss":
/*!***********************************!*\
  !*** ./assets/assets/common.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/assets/home.scss":
/*!*********************************!*\
  !*** ./assets/assets/home.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/assets/images/logo.png":
/*!***************************************!*\
  !*** ./assets/assets/images/logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/logo.82b9c7a5.png";

/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./assets/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./assets/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./assets/store/index.js");
/**
 * Created by xavier on 2019/4/5.
 */





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(element_ui__WEBPACK_IMPORTED_MODULE_1___default.a);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  template: '<App/>',
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  router: _router__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./assets/router/index.js":
/*!********************************!*\
  !*** ./assets/router/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./assets/store/index.js");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home */ "./assets/views/Home.vue");
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Login */ "./assets/views/Login.vue");
/* harmony import */ var _views_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/List */ "./assets/views/List.vue");
/* harmony import */ var _views_New__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/New */ "./assets/views/New.vue");
/* harmony import */ var _views_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/Edit */ "./assets/views/Edit.vue");
/**
 * Created by xavier on 2019/4/5.
 */








vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'hash',
  routes: [{
    path: '/web/admin/login',
    component: _views_Login__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/web/admin/home',
    component: _views_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, // { path: '/web/admin/list', component:  List },
  // { path: '/web/admin/new', component:  New  },
  {
    path: '/',
    component: _views_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: [{
      path: '/list',
      component: _views_List__WEBPACK_IMPORTED_MODULE_5__["default"]
    }, {
      path: '/new',
      component: _views_New__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, {
      path: '/edit',
      component: _views_Edit__WEBPACK_IMPORTED_MODULE_7__["default"]
    }]
  }]
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./assets/services/index.js":
/*!**********************************!*\
  !*** ./assets/services/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by xavier on 2019/4/5.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  checkLogin: function checkLogin() {
    var token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    return false;
  },
  updateToken: function updateToken(token) {
    localStorage.setItem("token", token);
  }
});

/***/ }),

/***/ "./assets/store/index.js":
/*!*******************************!*\
  !*** ./assets/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/**
 * Created by xavier on 2019/4/5.
 */

 // import SecurityModule from './security';
// import PostModule from './post';

vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({}));

/***/ }),

/***/ "./assets/views/Edit.vue":
/*!*******************************!*\
  !*** ./assets/views/Edit.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=92ab17ce& */ "./assets/views/Edit.vue?vue&type=template&id=92ab17ce&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./assets/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/views/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./assets/views/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/views/Edit.vue?vue&type=template&id=92ab17ce&":
/*!**************************************************************!*\
  !*** ./assets/views/Edit.vue?vue&type=template&id=92ab17ce& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=92ab17ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Edit.vue?vue&type=template&id=92ab17ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92ab17ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/views/Home.vue":
/*!*******************************!*\
  !*** ./assets/views/Home.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=3a32886e& */ "./assets/views/Home.vue?vue&type=template&id=3a32886e&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./assets/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./assets/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/views/Home.vue?vue&type=template&id=3a32886e&":
/*!**************************************************************!*\
  !*** ./assets/views/Home.vue?vue&type=template&id=3a32886e& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=3a32886e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Home.vue?vue&type=template&id=3a32886e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3a32886e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/views/List.vue":
/*!*******************************!*\
  !*** ./assets/views/List.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=b13b66a6& */ "./assets/views/List.vue?vue&type=template&id=b13b66a6&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./assets/views/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/views/List.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./assets/views/List.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/views/List.vue?vue&type=template&id=b13b66a6&":
/*!**************************************************************!*\
  !*** ./assets/views/List.vue?vue&type=template&id=b13b66a6& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=b13b66a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/List.vue?vue&type=template&id=b13b66a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_b13b66a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/views/Login.vue":
/*!********************************!*\
  !*** ./assets/views/Login.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=2a036bea& */ "./assets/views/Login.vue?vue&type=template&id=2a036bea&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/views/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./assets/views/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/views/Login.vue?vue&type=template&id=2a036bea&":
/*!***************************************************************!*\
  !*** ./assets/views/Login.vue?vue&type=template&id=2a036bea& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=2a036bea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Login.vue?vue&type=template&id=2a036bea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2a036bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/views/New.vue":
/*!******************************!*\
  !*** ./assets/views/New.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=68dc8e3e& */ "./assets/views/New.vue?vue&type=template&id=68dc8e3e&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./assets/views/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/views/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/views/New.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./assets/views/New.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/views/New.vue?vue&type=template&id=68dc8e3e&":
/*!*************************************************************!*\
  !*** ./assets/views/New.vue?vue&type=template&id=68dc8e3e& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=68dc8e3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/New.vue?vue&type=template&id=68dc8e3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_68dc8e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/index */ "./assets/services/index.js");
//
//
//
//
//
 //    import Login from "./views/Login"
//    import Home from "./views/Home"

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  //        components: {
  //            Login,
  //            Home
  //        },
  created: function created() {
    var check = _services_index__WEBPACK_IMPORTED_MODULE_0__["default"].checkLogin();

    if (!check) {
      this.$router.push('/web/admin/login');
      return false;
    }

    this.$router.push('/');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Api */ "./assets/api/Api.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_editor__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "New",
  data: function data() {
    return {
      form: {
        title: '',
        tags: [],
        date: '',
        url: '',
        text: ''
      },
      options5: [],
      value10: [],
      rules: {
        title: [{
          required: true,
          message: 'Please enter your title',
          trigger: 'blur'
        }],
        date: [{
          required: true,
          message: 'Please enter your date',
          trigger: 'blur'
        }],
        url: [{
          required: true,
          message: 'Please enter your url',
          trigger: 'blur'
        }],
        text: [{
          required: true,
          message: 'Please enter your text',
          trigger: 'blur'
        }]
      },
      editorOptions: {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          'header': 1
        }, {
          'header': 2
        }], [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }], [{
          'script': 'sub'
        }, {
          'script': 'super'
        }], [{
          'indent': '-1'
        }, {
          'indent': '+1'
        }], [{
          'direction': 'rtl'
        }], [{
          'size': ['small', false, 'large', 'huge']
        }], [{
          'header': [1, 2, 3, 4, 5, 6, false]
        }], [{
          'color': []
        }, {
          'background': []
        }], [{
          'font': []
        }], [{
          'align': []
        }], ['clean']],
        imageDrop: false,
        imageResize: {}
      },
      update: false
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__["VueEditor"]
  },
  created: function created() {
    console.log('init');
    var vm = this;
    var query = this.$route.query;

    if (typeof query['id'] != "undefined") {
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].get(query['id'], function (req) {
        if (req.status == 200) {
          vm.form = req.data.data;
          vm.update = true;
        }
      });
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var vm = this;

      if (vm.update) {
        _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.form.id, this.form, function (req) {
          vm.$message(req.data.messages);
        });
      } else {
        _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.form, function (req) {
          vm.$message(req.data.messages);
        });
      }
    },
    urlCheck: function urlCheck() {
      var url = this.form.url;
      var vm = this;
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].checkUrl(url, function (req) {
        if (req.status == 200) {
          var code = req.data.code;

          if (code == 400) {
            console.log("URL duplicate, please enter again");
            vm.$message("URL duplicate, please enter again");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home.scss */ "./assets/assets/home.scss");
/* harmony import */ var _assets_home_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_home_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Avatar = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/assets/images/logo.png");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {
      Name: 'Xavier Admin',
      collapsed: false,
      UserName: 'Admin',
      UserAvatar: Avatar,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      console.log('submit!');
    },
    handleselect: function handleselect(a, b) {},
    //退出登录
    logout: function logout() {
      var _this = this;

      this.$confirm('Confirm to exit?', 'Tip', {//type: 'warning'
      }).then(function () {
        localStorage.clear();

        _this.$router.push('/web/admin/login');
      })["catch"](function () {});
    },
    //折叠导航栏
    collapse: function collapse() {
      this.collapsed = !this.collapsed;
    },
    showMenu: function showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Api */ "./assets/api/Api.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "List",
  data: function data() {
    return {
      tableData: [],
      total: 0,
      currentPageNum: 1
    };
  },
  created: function created() {
    var vm = this;
    _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"].getList(0, function (req) {
      vm.tableData = req.data.data.lists;
      vm.total = parseInt(req.data.data.total);
    });
  },
  methods: {
    handleEdit: function handleEdit(index, row) {
      this.$router.push({
        path: '/edit',
        query: {
          id: row.id
        }
      });
    },
    handleDelete: function handleDelete(index, row) {
      var vm = this;
      _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](row.id, function (req) {
        if (req.status == 200) {
          _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"].getList(0, function (reqs) {
            vm.tableData = reqs.data.data.lists;
            vm.total = parseInt(reqs.data.data.total);
            vm.currentPageNum = 0;
          });
        }
      });
    },
    currentChange: function currentChange(page) {
      var vm = this;

      var _currentPageNum = page - 1;

      _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"].getList(_currentPageNum, function (req) {
        vm.tableData = req.data.data.lists;
        vm.total = parseInt(req.data.data.total);
      });
    },
    switchChange: function switchChange(index, row) {
      console.log(row);
      _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"].enable(row.id, function (req) {
        vm.$message(req.data.messages);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/common.scss */ "./assets/assets/common.scss");
/* harmony import */ var _assets_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_common_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Api */ "./assets/api/Api.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/index */ "./assets/services/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      logining: false,
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{
          required: true,
          message: 'Please enter your account',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: 'Please enter your password',
          trigger: 'blur'
        }]
      },
      checked: true
    };
  },
  created: function created() {},
  methods: {
    onSubmit: function onSubmit() {
      var vm = this;
      _api_Api__WEBPACK_IMPORTED_MODULE_1__["default"].login(this.ruleForm, function (req) {
        console.log(req);
        vm.$message(req.data.messages);

        if (req.status == 200 && req.data.code == 200) {
          _services_index__WEBPACK_IMPORTED_MODULE_2__["default"].updateToken(req.data.data.token);
          vm.$router.push('/');
        }
      });
      this.logining = true;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/New.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/New.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Api */ "./assets/api/Api.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_editor__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "New",
  data: function data() {
    return {
      form: {
        title: '',
        tags: [],
        date: '',
        url: '',
        text: ''
      },
      options5: [],
      value10: [],
      rules: {
        title: [{
          required: true,
          message: 'Please enter your title',
          trigger: 'blur'
        }],
        date: [{
          required: true,
          message: 'Please enter your date',
          trigger: 'blur'
        }],
        url: [{
          required: true,
          message: 'Please enter your url',
          trigger: 'blur'
        }],
        text: [{
          required: true,
          message: 'Please enter your text',
          trigger: 'blur'
        }]
      },
      editorOptions: {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          'header': 1
        }, {
          'header': 2
        }], [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }], [{
          'script': 'sub'
        }, {
          'script': 'super'
        }], [{
          'indent': '-1'
        }, {
          'indent': '+1'
        }], [{
          'direction': 'rtl'
        }], [{
          'size': ['small', false, 'large', 'huge']
        }], [{
          'header': [1, 2, 3, 4, 5, 6, false]
        }], [{
          'color': []
        }, {
          'background': []
        }], [{
          'font': []
        }], [{
          'align': []
        }], ['clean']],
        imageDrop: false,
        imageResize: {}
      }
    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__["VueEditor"]
  },
  methods: {
    onSubmit: function onSubmit() {
      var vm = this;
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.form, function (req) {
        vm.$message(req.data.messages);
        this.$router.push("/list");
      });
    },
    urlCheck: function urlCheck() {
      var url = this.form.url;
      var vm = this;
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].checkUrl(url, function (req) {
        if (req.status == 200) {
          var code = req.data.code;

          if (code == 400) {
            vm.$message("URL duplicate, please enter again");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/App.vue?vue&type=template&id=5bcdaf03&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/App.vue?vue&type=template&id=5bcdaf03& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Edit.vue?vue&type=template&id=92ab17ce&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Edit.vue?vue&type=template&id=92ab17ce& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
    [
      _c(
        "el-form-item",
        { attrs: { label: "Title" } },
        [
          _c("el-input", {
            attrs: { maxlength: "150" },
            model: {
              value: _vm.form.title,
              callback: function($$v) {
                _vm.$set(_vm.form, "title", $$v)
              },
              expression: "form.title"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Url" } },
        [
          _c("el-input", {
            on: {
              blur: function($event) {
                return _vm.urlCheck()
              }
            },
            model: {
              value: _vm.form.url,
              callback: function($$v) {
                _vm.$set(_vm.form, "url", $$v)
              },
              expression: "form.url"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Tags" } },
        [
          _c(
            "el-col",
            { attrs: { span: 11 } },
            [
              _c(
                "el-select",
                {
                  attrs: {
                    multiple: "",
                    filterable: "",
                    "allow-create": "",
                    "default-first-option": "",
                    placeholder: "请选择文章标签"
                  },
                  model: {
                    value: _vm.form.tags,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "tags", $$v)
                    },
                    expression: "form.tags"
                  }
                },
                _vm._l(_vm.options5, function(item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.label, value: item.value }
                  })
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Date" } },
        [
          _c(
            "el-col",
            { attrs: { span: 11 } },
            [
              _c("el-date-picker", {
                staticStyle: { width: "100%" },
                attrs: { type: "date", placeholder: "Choose Date" },
                model: {
                  value: _vm.form.date,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "date", $$v)
                  },
                  expression: "form.date"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Text" } },
        [
          _c("vue-editor", {
            attrs: { editorOptions: _vm.editorOptions },
            model: {
              value: _vm.form.text,
              callback: function($$v) {
                _vm.$set(_vm.form, "text", $$v)
              },
              expression: "form.text"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
            [_vm._v("Submit")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Home.vue?vue&type=template&id=3a32886e&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Home.vue?vue&type=template&id=3a32886e& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    { staticClass: "container" },
    [
      _c(
        "el-col",
        { staticClass: "header", attrs: { span: 24 } },
        [
          _c(
            "el-col",
            {
              staticClass: "logo",
              class: _vm.collapsed ? "logo-collapse-width" : "logo-width",
              attrs: { span: 10 }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.collapsed ? "" : _vm.Name) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c("el-col", { attrs: { span: 10 } }, [
            _c(
              "div",
              {
                staticClass: "tools",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.collapse($event)
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-align-justify" })]
            )
          ]),
          _vm._v(" "),
          _c(
            "el-col",
            { staticClass: "userinfo", attrs: { span: 4 } },
            [
              _c(
                "el-dropdown",
                { attrs: { trigger: "hover" } },
                [
                  _c(
                    "span",
                    { staticClass: "el-dropdown-link userinfo-inner" },
                    [
                      _c("img", { attrs: { src: this.UserAvatar } }),
                      _vm._v(" " + _vm._s(_vm.UserName))
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-menu",
                    { attrs: { slot: "dropdown" }, slot: "dropdown" },
                    [
                      _c(
                        "el-dropdown-item",
                        {
                          attrs: { divided: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.logout($event)
                            }
                          }
                        },
                        [_vm._v("LoginOut")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "main", attrs: { span: 24 } },
        [
          _c(
            "el-aside",
            { attrs: { width: "200px" } },
            [
              _c(
                "el-menu",
                {
                  staticClass: "el-menu-vertical-demo",
                  attrs: { "default-active": "$router.path", router: "" }
                },
                [
                  _c("el-menu-item", { attrs: { index: "/new" } }, [
                    _c("i", { staticClass: "el-icon-setting" }),
                    _vm._v(" "),
                    _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                      _vm._v("New")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "/list" } }, [
                    _c("i", { staticClass: "el-icon-setting" }),
                    _vm._v(" "),
                    _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                      _vm._v("List")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-container", [_c("el-main", [_c("router-view")], 1)], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/List.vue?vue&type=template&id=b13b66a6&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/List.vue?vue&type=template&id=b13b66a6& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-table",
        { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
        [
          _c("el-table-column", {
            attrs: { label: "Date", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("i", { staticClass: "el-icon-time" }),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.date))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Title", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.title))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "UpdateTime", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.update_time))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "View Times", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.rate))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Operation", width: "500" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("el-switch", {
                      attrs: {
                        "active-text": "enable",
                        "inactive-text": "disenable"
                      },
                      nativeOn: {
                        click: function($event) {
                          return _vm.switchChange(scope.$index, scope.row)
                        }
                      },
                      model: {
                        value: scope.row.status,
                        callback: function($$v) {
                          _vm.$set(scope.row, "status", $$v)
                        },
                        expression: "scope.row.status"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini" },
                        on: {
                          click: function($event) {
                            return _vm.handleEdit(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("Edit\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini", type: "danger" },
                        on: {
                          click: function($event) {
                            return _vm.handleDelete(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("Delete\n                ")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        attrs: {
          background: "",
          layout: "prev, pager, next",
          "page-size": 2,
          "current-page": _vm.currentPageNum,
          total: _vm.total
        },
        on: { "current-change": _vm.currentChange }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/Login.vue?vue&type=template&id=2a036bea&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/Login.vue?vue&type=template&id=2a036bea& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login" },
    [
      _c(
        "el-form",
        {
          ref: "ruleForm2",
          staticClass: "demo-ruleForm login-container",
          attrs: {
            model: _vm.ruleForm,
            rules: _vm.rules,
            "label-position": "left",
            "label-width": "0px"
          }
        },
        [
          _c("h3", { staticClass: "title" }, [_vm._v("Admin Login")]),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "account" } },
            [
              _c("el-input", {
                attrs: {
                  type: "text",
                  "auto-complete": "off",
                  placeholder: "Account",
                  clearable: ""
                },
                model: {
                  value: _vm.ruleForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "username", $$v)
                  },
                  expression: "ruleForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "checkPass" } },
            [
              _c("el-input", {
                attrs: {
                  type: "password",
                  "auto-complete": "off",
                  placeholder: "Password",
                  clearable: ""
                },
                model: {
                  value: _vm.ruleForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "password", $$v)
                  },
                  expression: "ruleForm.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticStyle: { width: "100%" } },
            [
              _c(
                "el-button",
                {
                  staticStyle: { width: "100%" },
                  attrs: { type: "primary", loading: _vm.logining },
                  nativeOn: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    }
                  }
                },
                [_vm._v("\n                Login\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/views/New.vue?vue&type=template&id=68dc8e3e&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/views/New.vue?vue&type=template&id=68dc8e3e& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
    [
      _c(
        "el-form-item",
        { attrs: { label: "Title" } },
        [
          _c("el-input", {
            attrs: { maxlength: "150" },
            model: {
              value: _vm.form.title,
              callback: function($$v) {
                _vm.$set(_vm.form, "title", $$v)
              },
              expression: "form.title"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Url" } },
        [
          _c("el-input", {
            on: {
              blur: function($event) {
                return _vm.urlCheck()
              }
            },
            model: {
              value: _vm.form.url,
              callback: function($$v) {
                _vm.$set(_vm.form, "url", $$v)
              },
              expression: "form.url"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Tags" } },
        [
          _c(
            "el-col",
            { attrs: { span: 11 } },
            [
              _c(
                "el-select",
                {
                  attrs: {
                    multiple: "",
                    filterable: "",
                    "allow-create": "",
                    "default-first-option": "",
                    placeholder: "请选择文章标签"
                  },
                  model: {
                    value: _vm.form.tags,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "tags", $$v)
                    },
                    expression: "form.tags"
                  }
                },
                _vm._l(_vm.options5, function(item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.label, value: item.value }
                  })
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Date" } },
        [
          _c(
            "el-col",
            { attrs: { span: 11 } },
            [
              _c("el-date-picker", {
                staticStyle: { width: "100%" },
                attrs: { type: "date", placeholder: "Choose Date" },
                model: {
                  value: _vm.form.date,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "date", $$v)
                  },
                  expression: "form.date"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Text" } },
        [
          _c("vue-editor", {
            attrs: { editorOptions: _vm.editorOptions },
            model: {
              value: _vm.form.text,
              callback: function($$v) {
                _vm.$set(_vm.form, "text", $$v)
              },
              expression: "form.text"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
            [_vm._v("Submit")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/main.js","runtime","vendors~entry"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT8wM2Y0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlP2FmMTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9jb21tb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXNzZXRzL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcm91dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0VkaXQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9FZGl0LnZ1ZT9hY2NjIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9FZGl0LnZ1ZT8xOTk1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvSG9tZS52dWU/MThjOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvSG9tZS52dWU/OGExNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xpc3QudnVlPzkwZjAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xpc3QudnVlP2VhNzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvTG9naW4udnVlPzk4MDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xvZ2luLnZ1ZT82OGFiIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9OZXcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9OZXcudnVlPzAyMmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL05ldy52dWU/MzAxOSIsIndlYnBhY2s6Ly8vYXNzZXRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92aWV3cy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy9hc3NldHMvdmlld3MvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92aWV3cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92aWV3cy9OZXcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzY0Y2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0VkaXQudnVlPzNkZmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0hvbWUudnVlPzc4ZWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xpc3QudnVlP2E1YzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0xvZ2luLnZ1ZT9mMmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9OZXcudnVlP2YwOWYiXSwibmFtZXMiOlsiYmFzZXVybCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9naW4iLCJwYXJhbXMiLCJjYWxsYmFjayIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImNoZWNrVXJsIiwidXJsIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwiZ2V0TGlzdCIsInBhZ2UiLCJzdGF0dXMiLCJkYXRhIiwibGlzdHMiLCJpIiwibGVuZ3RoIiwiaWQiLCJhZGQiLCJ1cGRhdGUiLCJlbmFibGUiLCJwdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVnVlIiwidXNlIiwiRWxlbWVudFVJIiwiZWwiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudHMiLCJBcHAiLCJyb3V0ZXIiLCJzdG9yZSIsInJlbmRlciIsImgiLCJWdWVSb3V0ZXIiLCJtb2RlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkxvZ2luIiwiSG9tZSIsImNoaWxkcmVuIiwiTGlzdCIsIk5ldyIsIkVkaXQiLCJjaGVja0xvZ2luIiwidXBkYXRlVG9rZW4iLCJzZXRJdGVtIiwiVnVleCIsIlN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Y7QUFDM0I7QUFDTDs7O0FBR2xEO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSw4RUFBTTtBQUNSLEVBQUUsdUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXVLLENBQWdCLCtPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsT0FBTyxHQUFHLHVCQUFkO0FBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5QkgsT0FBekI7QUFDZTtBQUNYSSxPQURXLGlCQUNMQyxNQURLLEVBQ0dDLFFBREgsRUFDYTtBQUNwQkwsZ0RBQUssQ0FBQ00sSUFBTixDQUFXLGNBQVgsRUFBMkJGLE1BQTNCLEVBQ0tHLElBREwsQ0FDVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCLFVBQUksT0FBT0gsUUFBUCxJQUFtQixVQUF2QixFQUFtQztBQUMvQkEsZ0JBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0g7QUFDSixLQUxMLFdBTVcsVUFBVUMsS0FBVixFQUFpQjtBQUNwQixVQUFJLE9BQU9KLFFBQVAsSUFBbUIsVUFBdkIsRUFBbUM7QUFDL0JBLGdCQUFRLENBQUNJLEtBQUQsQ0FBUjtBQUNIO0FB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O0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsV0FBVyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLHdCQUF3QiwyQ0FBMkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0JBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsa0JBQWtCLE9BQU8sc0JBQXNCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJlbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxjb2RlXFxcXHBocFxcXFxzeW1mb255NF9kZW1vXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YmNkYWYwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YmNkYWYwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YmNkYWYwMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViY2RhZjAzJlwiIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbnZhciBiYXNldXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDBcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYXNldXJsO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBsb2dpbihwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FkbWluL2xvZ2luJywgcGFyYW1zKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjaGVja1VybCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYWRtaW4vY2hlY2t1cmw/dXJsPScgKyB1cmwsIHtoZWFkZXJzOiB7J3Rva2VuJzogdGhpcy50b2tlbigpfX0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGdldExpc3QocGFnZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBheGlvcy5nZXQoJy9hZG1pbi9hcnRpY2xlLycgKyBwYWdlICsgXCIvMlwiLCB7aGVhZGVyczogeyd0b2tlbic6IHRoaXMudG9rZW4oKX19KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGEubGlzdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zdGF0dXMgPSBkYXRhW2ldLnN0YXR1cyA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZGF0YS5saXN0cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKGlkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FkbWluL2FydGljbGUvJyArIGlkLCB7aGVhZGVyczogeyd0b2tlbic6IHRoaXMudG9rZW4oKX19KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGQocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hZG1pbi9hcnRpY2xlLycsIHBhcmFtcyx7IGhlYWRlcnM6IHsndG9rZW4nOiB0aGlzLnRva2VuKCl9fSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGlkLHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICBheGlvcy5wb3N0KCcvYWRtaW4vYXJ0aWNsZS8nK2lkLCBwYXJhbXMseyBoZWFkZXJzOiB7J3Rva2VuJzogdGhpcy50b2tlbigpfX0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGdldChpZCwgY2FsbGJhY2spe1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FkbWluL2FydGljbGUvJyArIGlkLCB7aGVhZGVyczogeyd0b2tlbic6IHRoaXMudG9rZW4oKX19KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlbmFibGUoaWQpe1xyXG4gICAgICAgIGF4aW9zLnB1dCgnL2FkbWluL2FydGljbGUvJytpZCAsIHt9LHtoZWFkZXJzOiB7J3Rva2VuJzogdGhpcy50b2tlbigpfX0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXHJcbiAgICB9XHJcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvbG9nby44MmI5YzdhNS5wbmdcIjsiLCIvKipcclxuICogQ3JlYXRlZCBieSB4YXZpZXIgb24gMjAxOS80LzUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgRWxlbWVudFVJIGZyb20gJ2VsZW1lbnQtdWknO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblZ1ZS51c2UoRWxlbWVudFVJKTtcclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgdGVtcGxhdGU6ICc8QXBwLz4nLFxyXG4gICAgY29tcG9uZW50czogeyBBcHAgfSxcclxuICAgIHJvdXRlcixcclxuICAgICAgICBzdG9yZSxcclxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeGF2aWVyIG9uIDIwMTkvNC81LlxyXG4gKi9cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi92aWV3cy9Ib21lJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL3ZpZXdzL0xvZ2luJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vdmlld3MvTGlzdCc7XHJcbmltcG9ydCBOZXcgZnJvbSAnLi4vdmlld3MvTmV3JztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi4vdmlld3MvRWRpdCc7XHJcblxyXG5WdWUudXNlKFZ1ZVJvdXRlcik7XHJcblxyXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XHJcbiAgICBtb2RlOiAnaGFzaCcsXHJcbiAgICByb3V0ZXM6IFtcclxuICAgICAgICB7IHBhdGg6ICcvd2ViL2FkbWluL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbn0sXHJcbiAgICAgICAgeyBwYXRoOiAnL3dlYi9hZG1pbi9ob21lJywgY29tcG9uZW50OiBIb21lfSxcclxuICAgICAgICAvLyB7IHBhdGg6ICcvd2ViL2FkbWluL2xpc3QnLCBjb21wb25lbnQ6ICBMaXN0IH0sXHJcbiAgICAgICAgLy8geyBwYXRoOiAnL3dlYi9hZG1pbi9uZXcnLCBjb21wb25lbnQ6ICBOZXcgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJy9saXN0JywgY29tcG9uZW50OiBMaXN0fSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJy9uZXcnLCBjb21wb25lbnQ6IE5ld30sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICcvZWRpdCcsIGNvbXBvbmVudDogRWRpdH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeGF2aWVyIG9uIDIwMTkvNC81LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNoZWNrTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVG9rZW4odG9rZW4pe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIix0b2tlbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeGF2aWVyIG9uIDIwMTkvNC81LlxyXG4gKi9cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuLy8gaW1wb3J0IFNlY3VyaXR5TW9kdWxlIGZyb20gJy4vc2VjdXJpdHknO1xyXG4vLyBpbXBvcnQgUG9zdE1vZHVsZSBmcm9tICcuL3Bvc3QnO1xyXG5cclxuVnVlLnVzZShWdWV4KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxufSk7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MmFiMTdjZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXGNvZGVcXFxccGhwXFxcXHN5bWZvbnk0X2RlbW9cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkyYWIxN2NlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkyYWIxN2NlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MmFiMTdjZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MmFiMTdjZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3ZpZXdzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MmFiMTdjZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EzMjg4NmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxjb2RlXFxcXHBocFxcXFxzeW1mb255NF9kZW1vXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYTMyODg2ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYTMyODg2ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EzMjg4NmUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2EzMjg4NmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92aWV3cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EzMjg4NmUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxM2I2NmE2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcY29kZVxcXFxwaHBcXFxcc3ltZm9ueTRfZGVtb1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjEzYjY2YTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjEzYjY2YTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxM2I2NmE2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2IxM2I2NmE2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdmlld3MvTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxM2I2NmE2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMzZiZWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXGNvZGVcXFxccGhwXFxcXHN5bWZvbnk0X2RlbW9cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhMDM2YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhMDM2YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMzZiZWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmEwMzZiZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92aWV3cy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMDM2YmVhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9OZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZGM4ZTNlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05ldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05ldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXGNvZGVcXFxccGhwXFxcXHN5bWZvbnk0X2RlbW9cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY4ZGM4ZTNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY4ZGM4ZTNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9OZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZGM4ZTNlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4ZGM4ZTNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdmlld3MvTmV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05ldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhkYzhlM2UmXCIiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiYXBwXCI+XHJcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBjaGVja2xvZ2luIGZyb20gXCIuL3NlcnZpY2VzL2luZGV4XCJcclxuLy8gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL3ZpZXdzL0xvZ2luXCJcclxuLy8gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vdmlld3MvSG9tZVwiXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdhcHAnLFxyXG4vLyAgICAgICAgY29tcG9uZW50czoge1xyXG4vLyAgICAgICAgICAgIExvZ2luLFxyXG4vLyAgICAgICAgICAgIEhvbWVcclxuLy8gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gY2hlY2tsb2dpbi5jaGVja0xvZ2luKClcclxuICAgICAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy93ZWIvYWRtaW4vbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZWwtZm9ybSByZWY9XCJmb3JtXCIgOm1vZGVsPVwiZm9ybVwiIGxhYmVsLXdpZHRoPVwiODBweFwiPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCJUaXRsZVwiPlxyXG4gICAgICAgICAgICA8ZWwtaW5wdXQgdi1tb2RlbD1cImZvcm0udGl0bGVcIiBtYXhsZW5ndGg9XCIxNTBcIj48L2VsLWlucHV0PlxyXG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCJVcmxcIj5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHYtbW9kZWw9XCJmb3JtLnVybFwiIEBibHVyPVwidXJsQ2hlY2soKVwiPjwvZWwtaW5wdXQ+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIlRhZ3NcIj5cclxuICAgICAgICAgICAgPGVsLWNvbCA6c3Bhbj1cIjExXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93LWNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0LWZpcnN0LW9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaWh+eroOagh+etvlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBvcHRpb25zNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtLmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0udmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2VsLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZWwtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2VsLWNvbD5cclxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cclxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICA8ZWwtY29sIDpzcGFuPVwiMTFcIj5cclxuICAgICAgICAgICAgICAgIDxlbC1kYXRlLXBpY2tlciB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIERhdGVcIiB2LW1vZGVsPVwiZm9ybS5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZWwtZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgICAgIDwvZWwtY29sPlxyXG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCJUZXh0XCI+XHJcbiAgICAgICAgICAgIDx2dWUtZWRpdG9yIHYtbW9kZWw9XCJmb3JtLnRleHRcIiA6ZWRpdG9yT3B0aW9ucz1cImVkaXRvck9wdGlvbnNcIj48L3Z1ZS1lZGl0b3I+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPGVsLWZvcm0taXRlbT5cclxuICAgICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9uU3VibWl0XCI+U3VibWl0PC9lbC1idXR0b24+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICA8L2VsLWZvcm0+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQXBpIGZyb20gXCIuLi9hcGkvQXBpXCI7XHJcbiAgICBpbXBvcnQgeyBWdWVFZGl0b3IgfSBmcm9tIFwidnVlMi1lZGl0b3JcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIk5ld1wiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczU6IFtdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUxMDogW10sXHJcbiAgICAgICAgICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHRpdGxlJywgdHJpZ2dlcjogJ2JsdXInfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgZGF0ZScsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgdXJsJywgdHJpZ2dlcjogJ2JsdXInfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgdGV4dCcsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVkaXRvck9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdoZWFkZXInOiAxIH0sIHsgJ2hlYWRlcic6IDIgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdsaXN0JzogJ29yZGVyZWQnIH0sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInIH0sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdpbmRlbnQnOiAnLTEnIH0sIHsgJ2luZGVudCc6ICcrMScgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdmb250JzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NsZWFuJ11cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRHJvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VSZXNpemU6IHt9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIFZ1ZUVkaXRvclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdCcpXHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeT10aGlzLiRyb3V0ZS5xdWVyeTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVsnaWQnXSAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgIEFwaS5nZXQocXVlcnlbJ2lkJ10sZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzPT0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybT1yZXEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS51cGRhdGU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZtPXRoaXNcclxuICAgICAgICAgICAgICAgIGlmICh2bS51cGRhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIEFwaS51cGRhdGUodGhpcy5mb3JtLmlkLHRoaXMuZm9ybSxmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRtZXNzYWdlKHJlcS5kYXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIEFwaS5hZGQodGhpcy5mb3JtLGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG1lc3NhZ2UocmVxLmRhdGEubWVzc2FnZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmxDaGVjaygpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmZvcm0udXJsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIEFwaS5jaGVja1VybCh1cmwsIGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGUgPSByZXEuZGF0YS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIGR1cGxpY2F0ZSwgcGxlYXNlIGVudGVyIGFnYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG1lc3NhZ2UoXCJVUkwgZHVwbGljYXRlLCBwbGVhc2UgZW50ZXIgYWdhaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGVsLXJvdyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxlbC1jb2wgOnNwYW49XCIyNFwiIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxlbC1jb2wgOnNwYW49XCIxMFwiIGNsYXNzPVwibG9nb1wiIDpjbGFzcz1cImNvbGxhcHNlZD8nbG9nby1jb2xsYXBzZS13aWR0aCc6J2xvZ28td2lkdGgnXCI+XHJcbiAgICAgICAgICAgICAgICB7e2NvbGxhcHNlZD8nJzpOYW1lfX1cclxuICAgICAgICAgICAgPC9lbC1jb2w+XHJcbiAgICAgICAgICAgIDxlbC1jb2wgOnNwYW49XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCIgQGNsaWNrLnByZXZlbnQ9XCJjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2VsLWNvbD5cclxuICAgICAgICAgICAgPGVsLWNvbCA6c3Bhbj1cIjRcIiBjbGFzcz1cInVzZXJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtZHJvcGRvd24gdHJpZ2dlcj1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbC1kcm9wZG93bi1saW5rIHVzZXJpbmZvLWlubmVyXCI+PGltZyA6c3JjPVwidGhpcy5Vc2VyQXZhdGFyXCIgLz4ge3tVc2VyTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1kcm9wZG93bi1tZW51IHNsb3Q9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZWwtZHJvcGRvd24taXRlbSBkaXZpZGVkIEBjbGljay5uYXRpdmU9XCJsb2dvdXRcIj5Mb2dpbk91dDwvZWwtZHJvcGRvd24taXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L2VsLWRyb3Bkb3duLW1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L2VsLWRyb3Bkb3duPlxyXG4gICAgICAgICAgICA8L2VsLWNvbD5cclxuICAgICAgICA8L2VsLWNvbD5cclxuICAgICAgICA8ZWwtY29sIDpzcGFuPVwiMjRcIiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgICAgPGVsLWFzaWRlIHdpZHRoPVwiMjAwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxlbC1tZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQtYWN0aXZlPVwiJHJvdXRlci5wYXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbC1tZW51LXZlcnRpY2FsLWRlbW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsLW1lbnUtaXRlbSBpbmRleD1cIi9uZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLXNldHRpbmdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJ0aXRsZVwiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2VsLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8ZWwtbWVudS1pdGVtIGluZGV4PVwiL2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLXNldHRpbmdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJ0aXRsZVwiPkxpc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9lbC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L2VsLW1lbnU+XHJcbiAgICAgICAgICAgIDwvZWwtYXNpZGU+XHJcbiAgICAgICAgICAgIDxlbC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICAgICAgICAgIDwvZWwtbWFpbj5cclxuICAgICAgICAgICAgPC9lbC1jb250YWluZXI+XHJcbiAgICAgICAgPC9lbC1jb2w+XHJcbiAgICAgPC9lbC1yb3c+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFwiLi4vYXNzZXRzL2hvbWUuc2Nzc1wiO1xyXG4gICAgdmFyIEF2YXRhciA9cmVxdWlyZSggJy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOlwiSG9tZVwiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOidYYXZpZXIgQWRtaW4nLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgVXNlck5hbWU6ICdBZG1pbicsXHJcbiAgICAgICAgICAgICAgICBVc2VyQXZhdGFyOiBBdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQhJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZXNlbGVjdDogZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/pgIDlh7rnmbvlvZVcclxuICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29uZmlybSgnQ29uZmlybSB0byBleGl0PycsICdUaXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90eXBlOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHJvdXRlci5wdXNoKCcvd2ViL2FkbWluL2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/mipjlj6Dlr7zoiKrmoI9cclxuICAgICAgICAgICAgY29sbGFwc2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkPSF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01lbnUoaSxzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tZW51Q29sbGFwc2VkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym1lbnUtaG9vay0nK2kpWzBdLnN0eWxlLmRpc3BsYXk9c3RhdHVzPydibG9jayc6J25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZWwtdGFibGVcclxuICAgICAgICAgICAgICAgIDpkYXRhPVwidGFibGVEYXRhXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cclxuICAgICAgICAgICAgPGVsLXRhYmxlLWNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxODBcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwic2NvcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tdGltZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4XCI+e3sgc2NvcGUucm93LmRhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2VsLXRhYmxlLWNvbHVtbj5cclxuICAgICAgICAgICAgPGVsLXRhYmxlLWNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTgwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cInNjb3BlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweFwiPnt7IHNjb3BlLnJvdy50aXRsZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZWwtdGFibGUtY29sdW1uPlxyXG4gICAgICAgICAgICA8ZWwtdGFibGUtY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGRhdGVUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4MFwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJzY29wZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIj57eyBzY29wZS5yb3cudXBkYXRlX3RpbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2VsLXRhYmxlLWNvbHVtbj5cclxuICAgICAgICAgICAgPGVsLXRhYmxlLWNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmlldyBUaW1lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxODBcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwic2NvcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4XCI+e3sgc2NvcGUucm93LnJhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2VsLXRhYmxlLWNvbHVtbj5cclxuICAgICAgICAgICAgPGVsLXRhYmxlLWNvbHVtbiBsYWJlbD1cIk9wZXJhdGlvblwiIHdpZHRoPVwiNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cInNjb3BlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNjb3BlLnJvdy5zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlLXRleHQ9XCJlbmFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmUtdGV4dD1cImRpc2VuYWJsZVwiICBAY2xpY2submF0aXZlPVwic3dpdGNoQ2hhbmdlKHNjb3BlLiRpbmRleCwgc2NvcGUucm93KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZWwtc3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUVkaXQoc2NvcGUuJGluZGV4LCBzY29wZS5yb3cpXCI+RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZWwtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlRGVsZXRlKHNjb3BlLiRpbmRleCwgc2NvcGUucm93KVwiPkRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZWwtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgPC9lbC10YWJsZT5cclxuICAgICAgICA8ZWwtcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwicHJldiwgcGFnZXIsIG5leHRcIlxyXG4gICAgICAgICAgICAgICAgQGN1cnJlbnQtY2hhbmdlPVwiY3VycmVudENoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICA6cGFnZS1zaXplPVwiMlwiXHJcbiAgICAgICAgICAgICAgICA6Y3VycmVudC1wYWdlPVwiY3VycmVudFBhZ2VOdW1cIlxyXG4gICAgICAgICAgICAgICAgOnRvdGFsPVwidG90YWxcIj5cclxuICAgICAgICA8L2VsLXBhZ2luYXRpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQXBpIGZyb20gXCIuLi9hcGkvQXBpXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiTGlzdFwiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZURhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZU51bTogMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgICAgICAgQXBpLmdldExpc3QoMCwgZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0udGFibGVEYXRhID0gcmVxLmRhdGEuZGF0YS5saXN0cztcclxuICAgICAgICAgICAgICAgIHZtLnRvdGFsID0gcGFyc2VJbnQocmVxLmRhdGEuZGF0YS50b3RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBoYW5kbGVFZGl0KGluZGV4LCByb3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOicvZWRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDpyb3cuaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGUoaW5kZXgsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIEFwaS5kZWxldGUocm93LmlkLCBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwaS5nZXRMaXN0KDAsIGZ1bmN0aW9uIChyZXFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS50YWJsZURhdGEgPSByZXFzLmRhdGEuZGF0YS5saXN0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLnRvdGFsID0gcGFyc2VJbnQocmVxcy5kYXRhLmRhdGEudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uY3VycmVudFBhZ2VOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudENoYW5nZShwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9jdXJyZW50UGFnZU51bSA9IHBhZ2UgLSAxXHJcbiAgICAgICAgICAgICAgICBBcGkuZ2V0TGlzdChfY3VycmVudFBhZ2VOdW0sIGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS50YWJsZURhdGEgPSByZXEuZGF0YS5kYXRhLmxpc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLnRvdGFsID0gcGFyc2VJbnQocmVxLmRhdGEuZGF0YS50b3RhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3dpdGNoQ2hhbmdlKGluZGV4LHJvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93KVxyXG4gICAgICAgICAgICAgICAgQXBpLmVuYWJsZShyb3cuaWQsIGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS4kbWVzc2FnZShyZXEuZGF0YS5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCI+XHJcbiAgICAgICAgPGVsLWZvcm0gOm1vZGVsPVwicnVsZUZvcm1cIiA6cnVsZXM9XCJydWxlc1wiIHJlZj1cInJ1bGVGb3JtMlwiIGxhYmVsLXBvc2l0aW9uPVwibGVmdFwiIGxhYmVsLXdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICBjbGFzcz1cImRlbW8tcnVsZUZvcm0gbG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+QWRtaW4gTG9naW48L2gzPlxyXG4gICAgICAgICAgICA8ZWwtZm9ybS1pdGVtIHByb3A9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicnVsZUZvcm0udXNlcm5hbWVcIiBhdXRvLWNvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCJBY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU+PC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gcHJvcD1cImNoZWNrUGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJydWxlRm9ybS5wYXNzd29yZFwiIGF1dG8tY29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU+PC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljay5uYXRpdmUucHJldmVudD1cIm9uU3VibWl0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIDpsb2FkaW5nPVwibG9naW5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9lbC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgICAgIDwvZWwtZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBcIi4uL2Fzc2V0cy9jb21tb24uc2Nzc1wiO1xyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuLi9hcGkvQXBpXCI7XHJcbiAgICBpbXBvcnQgY2hlY2tsb2dpbiBmcm9tIFwiLi4vc2VydmljZXMvaW5kZXhcIlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnTG9naW4nLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBydWxlRm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgYWNjb3VudCcsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCcsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uU3VibWl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgTG9naW4ubG9naW4odGhpcy5ydWxlRm9ybSwgZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uJG1lc3NhZ2UocmVxLmRhdGEubWVzc2FnZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCYmcmVxLmRhdGEuY29kZT09MjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbG9naW4udXBkYXRlVG9rZW4ocmVxLmRhdGEuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7fVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGVsLWZvcm0gcmVmPVwiZm9ybVwiIDptb2RlbD1cImZvcm1cIiBsYWJlbC13aWR0aD1cIjgwcHhcIj5cclxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwiVGl0bGVcIj5cclxuICAgICAgICAgICAgPGVsLWlucHV0IHYtbW9kZWw9XCJmb3JtLnRpdGxlXCIgbWF4bGVuZ3RoPVwiMTUwXCI+PC9lbC1pbnB1dD5cclxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cclxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwiVXJsXCI+XHJcbiAgICAgICAgICAgIDxlbC1pbnB1dCB2LW1vZGVsPVwiZm9ybS51cmxcIiBAYmx1cj1cInVybENoZWNrKClcIj48L2VsLWlucHV0PlxyXG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCJUYWdzXCI+XHJcbiAgICAgICAgICAgIDxlbC1jb2wgOnNwYW49XCIxMVwiPlxyXG4gICAgICAgICAgICAgICAgPGVsLXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvdy1jcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1maXJzdC1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nmlofnq6DmoIfnrb5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZWwtb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gb3B0aW9uczVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIml0ZW0udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbS5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9lbC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2VsLXNlbGVjdD5cclxuICAgICAgICAgICAgPC9lbC1jb2w+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIkRhdGVcIj5cclxuICAgICAgICAgICAgPGVsLWNvbCA6c3Bhbj1cIjExXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWwtZGF0ZS1waWNrZXIgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBEYXRlXCIgdi1tb2RlbD1cImZvcm0uZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2VsLWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L2VsLWNvbD5cclxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cclxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwiVGV4dFwiPlxyXG4gICAgICAgICAgICA8dnVlLWVkaXRvciB2LW1vZGVsPVwiZm9ybS50ZXh0XCIgOmVkaXRvck9wdGlvbnM9XCJlZGl0b3JPcHRpb25zXCI+PC92dWUtZWRpdG9yPlxyXG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvblN1Ym1pdFwiPlN1Ym1pdDwvZWwtYnV0dG9uPlxyXG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxyXG4gICAgPC9lbC1mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEFwaSBmcm9tIFwiLi4vYXBpL0FwaVwiO1xyXG4gICAgaW1wb3J0IHsgVnVlRWRpdG9yIH0gZnJvbSBcInZ1ZTItZWRpdG9yXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJOZXdcIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM1OiBbXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlMTA6IFtdLFxyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciB0aXRsZScsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIGRhdGUnLCB0cmlnZ2VyOiAnYmx1cid9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHVybCcsIHRyaWdnZXI6ICdibHVyJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHRleHQnLCB0cmlnZ2VyOiAnYmx1cid9LFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JPcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJyB9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdzY3JpcHQnOiAnc3ViJyB9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnaW5kZW50JzogJy0xJyB9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnZm9udCc6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeyAnYWxpZ24nOiBbXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURyb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlUmVzaXplOiB7fVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBWdWVFZGl0b3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm09dGhpc1xyXG4gICAgICAgICAgICAgICAgQXBpLmFkZCh0aGlzLmZvcm0sZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLiRtZXNzYWdlKHJlcS5kYXRhLm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9saXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybENoZWNrKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZm9ybS51cmw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgQXBpLmNoZWNrVXJsKHVybCwgZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG1lc3NhZ2UoXCJVUkwgZHVwbGljYXRlLCBwbGVhc2UgZW50ZXIgYWdhaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJlbC1mb3JtXCIsXG4gICAgeyByZWY6IFwiZm9ybVwiLCBhdHRyczogeyBtb2RlbDogX3ZtLmZvcm0sIFwibGFiZWwtd2lkdGhcIjogXCI4MHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJlbC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBtYXhsZW5ndGg6IFwiMTUwXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50aXRsZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlVybFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cmxDaGVjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXJsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidXJsXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnVybFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJUYWdzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAxMSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxsb3ctY3JlYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdC1maXJzdC1vcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5paH56ug5qCH562+XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGFncyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRhZ3NcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGFnc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnM1LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJlbC1vcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBpdGVtLmxhYmVsLCB2YWx1ZTogaXRlbS52YWx1ZSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiRGF0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMTEgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImVsLWRhdGUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImRhdGVcIiwgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIERhdGVcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGF0ZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlRleHRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZ1ZS1lZGl0b3JcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZWRpdG9yT3B0aW9uczogX3ZtLmVkaXRvck9wdGlvbnMgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50ZXh0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGV4dFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50ZXh0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWJ1dHRvblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLm9uU3VibWl0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZWwtcm93XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWNvbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiLCBhdHRyczogeyBzcGFuOiAyNCB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtY29sXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ29cIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5jb2xsYXBzZWQgPyBcImxvZ28tY29sbGFwc2Utd2lkdGhcIiA6IFwibG9nby13aWR0aFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiAxMCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNvbGxhcHNlZCA/IFwiXCIgOiBfdm0uTmFtZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlbC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxMCB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbHNcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvbGxhcHNlKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCIgfSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtY29sXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXJpbmZvXCIsIGF0dHJzOiB7IHNwYW46IDQgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0cmlnZ2VyOiBcImhvdmVyXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbC1kcm9wZG93bi1saW5rIHVzZXJpbmZvLWlubmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiB0aGlzLlVzZXJBdmF0YXIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLlVzZXJOYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJkcm9wZG93blwiIH0sIHNsb3Q6IFwiZHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGl2aWRlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9nb3V0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTG9naW5PdXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWNvbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiwgYXR0cnM6IHsgc3BhbjogMjQgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWFzaWRlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjIwMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbC1tZW51LXZlcnRpY2FsLWRlbW9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGVmYXVsdC1hY3RpdmVcIjogXCIkcm91dGVyLnBhdGhcIiwgcm91dGVyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZWwtbWVudS1pdGVtXCIsIHsgYXR0cnM6IHsgaW5kZXg6IFwiL25ld1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJlbC1pY29uLXNldHRpbmdcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJ0aXRsZVwiIH0sIHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImVsLW1lbnUtaXRlbVwiLCB7IGF0dHJzOiB7IGluZGV4OiBcIi9saXN0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImVsLWljb24tc2V0dGluZ1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcInRpdGxlXCIgfSwgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMaXN0XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImVsLWNvbnRhaW5lclwiLCBbX2MoXCJlbC1tYWluXCIsIFtfYyhcInJvdXRlci12aWV3XCIpXSwgMSldLCAxKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZWwtdGFibGVcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSwgYXR0cnM6IHsgZGF0YTogX3ZtLnRhYmxlRGF0YSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImVsLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJEYXRlXCIsIHdpZHRoOiBcIjE4MFwiIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJlbC1pY29uLXRpbWVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNjb3BlLnJvdy5kYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImVsLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJUaXRsZVwiLCB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNjb3BlLnJvdy50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlbC10YWJsZS1jb2x1bW5cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiVXBkYXRlVGltZVwiLCB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNjb3BlLnJvdy51cGRhdGVfdGltZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlbC10YWJsZS1jb2x1bW5cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiVmlldyBUaW1lc1wiLCB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNjb3BlLnJvdy5yYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImVsLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJPcGVyYXRpb25cIiwgd2lkdGg6IFwiNTAwXCIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZWwtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtdGV4dFwiOiBcImVuYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmFjdGl2ZS10ZXh0XCI6IFwiZGlzZW5hYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3dpdGNoQ2hhbmdlKHNjb3BlLiRpbmRleCwgc2NvcGUucm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzY29wZS5yb3cuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChzY29wZS5yb3csIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNjb3BlLnJvdy5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJtaW5pXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZUVkaXQoc2NvcGUuJGluZGV4LCBzY29wZS5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0XFxuICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIm1pbmlcIiwgdHlwZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRGVsZXRlKHNjb3BlLiRpbmRleCwgc2NvcGUucm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXFxuICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZWwtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCJcIixcbiAgICAgICAgICBsYXlvdXQ6IFwicHJldiwgcGFnZXIsIG5leHRcIixcbiAgICAgICAgICBcInBhZ2Utc2l6ZVwiOiAyLFxuICAgICAgICAgIFwiY3VycmVudC1wYWdlXCI6IF92bS5jdXJyZW50UGFnZU51bSxcbiAgICAgICAgICB0b3RhbDogX3ZtLnRvdGFsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IFwiY3VycmVudC1jaGFuZ2VcIjogX3ZtLmN1cnJlbnRDaGFuZ2UgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ2luXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1mb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwicnVsZUZvcm0yXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVtby1ydWxlRm9ybSBsb2dpbi1jb250YWluZXJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbW9kZWw6IF92bS5ydWxlRm9ybSxcbiAgICAgICAgICAgIHJ1bGVzOiBfdm0ucnVsZXMsXG4gICAgICAgICAgICBcImxhYmVsLXBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgXCJsYWJlbC13aWR0aFwiOiBcIjBweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihcIkFkbWluIExvZ2luXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHByb3A6IFwiYWNjb3VudFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJlbC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdXRvLWNvbXBsZXRlXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJ1bGVGb3JtLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucnVsZUZvcm0sIFwidXNlcm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicnVsZUZvcm0udXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcHJvcDogXCJjaGVja1Bhc3NcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBcImF1dG8tY29tcGxldGVcIjogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJ1bGVGb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucnVsZUZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicnVsZUZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiLCBsb2FkaW5nOiBfdm0ubG9naW5pbmcgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIExvZ2luXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImVsLWZvcm1cIixcbiAgICB7IHJlZjogXCJmb3JtXCIsIGF0dHJzOiB7IG1vZGVsOiBfdm0uZm9ybSwgXCJsYWJlbC13aWR0aFwiOiBcIjgwcHhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiVGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImVsLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IG1heGxlbmd0aDogXCIxNTBcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRpdGxlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGl0bGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiVXJsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJlbC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVybENoZWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51cmwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ1cmxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXJsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlRhZ3NcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDExIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJlbC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGxvdy1jcmVhdGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWZpcnN0LW9wdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6nmlofnq6DmoIfnrb5cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50YWdzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGFnc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50YWdzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ub3B0aW9uczUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImVsLW9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IGl0ZW0ubGFiZWwsIHZhbHVlOiBpdGVtLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJEYXRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAxMSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZWwtZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCBwbGFjZWhvbGRlcjogXCJDaG9vc2UgRGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kYXRlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGF0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiVGV4dFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidnVlLWVkaXRvclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBlZGl0b3JPcHRpb25zOiBfdm0uZWRpdG9yT3B0aW9ucyB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRleHQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0ZXh0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0ub25TdWJtaXQgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=