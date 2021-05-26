self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\app dev\\projects\\covid-focus-frontend-master (2)\\covid-focus-frontend-master\\app1\\components\\Navbar.jsx",
    _s = $RefreshSig$();




function NavBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sideBar = _useState[0],
      setSidebar = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("d-sm-block d-md-none sidebar"),
      sideNavClass = _useState2[0],
      setSideNavClass = _useState2[1];

  var navLinks = [{
    pageName: "Home",
    route: "/"
  }, {
    pageName: "Home",
    route: "/"
  }];

  var toggleSideBar = function toggleSideBar() {
    //setSidebar(!sideBar) ; 
    //  if(sideBar===true){
    //    setSidebar(false);
    //  }else {
    //   setSidebar(true);
    //  }
    console.log(sideBar);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    //sidebar properties
    var sidebar = document.querySelector(".sidebar");
    if (sideBar) sidebar.classList.add("active");else sidebar.classList.remove("active");
    var navbar = document.querySelector(".navbar");
    var spot = document.querySelector(".spot"); //Intersection observer

    var handleScroll = function handleScroll(entries) {
      var spotIsVisible = entries[0].isIntersecting;
      if (spotIsVisible) navbar.classList.remove("scrolled-nav");else navbar.classList.add("scrolled-nav");
    };

    var options = {
      root: null,
      rootMargin: "0px",
      threshhold: 0
    };
    var observer = new IntersectionObserver(handleScroll, options);
    observer.observe(spot);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      class: "navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          class: "navbar-brand",
          href: "#",
          children: "PSYCHOS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            class: "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link active",
                "aria-current": "page",
                href: "#",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link",
                href: "#",
                children: "Statistics"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link",
                href: "#",
                children: "Medical"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "Contacts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                c: true,
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "Emergency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "How To"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Fact Check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            class: "d-flex search",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              class: "form-control me-2 search-bar",
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              class: "btn ",
              type: "submit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiSearch, {
                style: {
                  color: "gray"
                },
                size: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "spot d-none d-md-block "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "d-sm-block d-md-none sidenav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "toggle-icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMenu, {
          onClick: toggleSideBar()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 86
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 54
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-sm-block d-md-none sidebar ",
      id: "mySidebar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "selected",
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Clients"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(NavBar, "yjMOXi4S3SrswejPyJfVkCdCSmA=");

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJzaWRlTmF2Q2xhc3MiLCJzZXRTaWRlTmF2Q2xhc3MiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJ0b2dnbGVTaWRlQmFyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNpZGViYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZiYXIiLCJzcG90IiwiaGFuZGxlU2Nyb2xsIiwiZW50cmllcyIsInNwb3RJc1Zpc2libGUiLCJpc0ludGVyc2VjdGluZyIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaGhvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRU5DLCtDQUFRLENBQUMsS0FBRCxDQUZGO0FBQUEsTUFFMUJDLE9BRjBCO0FBQUEsTUFFbEJDLFVBRmtCOztBQUFBLG1CQUdLRiwrQ0FBUSxDQUFDLDhCQUFELENBSGI7QUFBQSxNQUcxQkcsWUFIMEI7QUFBQSxNQUdaQyxlQUhZOztBQUtqQyxNQUFNQyxRQUFRLEdBQUMsQ0FBQztBQUFDQyxZQUFRLEVBQUMsTUFBVjtBQUFpQkMsU0FBSyxFQUFDO0FBQXZCLEdBQUQsRUFBNkI7QUFBQ0QsWUFBUSxFQUFDLE1BQVY7QUFBaUJDLFNBQUssRUFBQztBQUF2QixHQUE3QixDQUFmOztBQUVBLE1BQU1DLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFDdkI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NDLFdBQU8sQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhJRixlQXlJSTtBQUFLLGVBQVMsRUFBRSwrQkFBaEI7QUFBaUQsUUFBRSxFQUFDLFdBQXBEO0FBQUEsOEJBRUU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFTLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6SUo7QUFBQSxrQkFERjtBQW1KRDs7R0FoTXVCVCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDgyYzc1NTY2NTRiNmY3OTU1NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEhpTWVudSwgSGlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuIFxuY29uc3QgW3NpZGVCYXIsc2V0U2lkZWJhcl09dXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW3NpZGVOYXZDbGFzcywgc2V0U2lkZU5hdkNsYXNzXT11c2VTdGF0ZShcImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXJcIik7XG4gIFxuY29uc3QgbmF2TGlua3M9W3twYWdlTmFtZTpcIkhvbWVcIixyb3V0ZTpcIi9cIn0se3BhZ2VOYW1lOlwiSG9tZVwiLHJvdXRlOlwiL1wifV07XG5cbmNvbnN0IHRvZ2dsZVNpZGVCYXI9KCk9PntcbiAvL3NldFNpZGViYXIoIXNpZGVCYXIpIDsgXG4vLyAgaWYoc2lkZUJhcj09PXRydWUpe1xuLy8gICAgc2V0U2lkZWJhcihmYWxzZSk7XG4vLyAgfWVsc2Uge1xuLy8gICBzZXRTaWRlYmFyKHRydWUpO1xuLy8gIH1cbiBjb25zb2xlLmxvZyhzaWRlQmFyKTtcbn0gXG4gICAgXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9zaWRlYmFyIHByb3BlcnRpZXNcbiAgICBjb25zdCBzaWRlYmFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuICAgIGlmKHNpZGVCYXIpIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGVsc2Ugc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICBcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcbiAgICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcG90XCIpO1xuXG4gICAgLy9JbnRlcnNlY3Rpb24gb2JzZXJ2ZXJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZW50cmllcykgPT4ge1xuICAgICAgY29uc3Qgc3BvdElzVmlzaWJsZSA9IGVudHJpZXNbMF0uaXNJbnRlcnNlY3Rpbmc7XG4gICAgICBpZiAoc3BvdElzVmlzaWJsZSkgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZC1uYXZcIik7XG4gICAgICBlbHNlIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsZWQtbmF2XCIpO1xuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IG51bGwsXG4gICAgICByb290TWFyZ2luOiBcIjBweFwiLCBcbiAgICAgIHRocmVzaGhvbGQ6IDAsIFxuICAgIH07XG4gICAgXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlU2Nyb2xsLCBvcHRpb25zKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHNwb3QpO1xuICB9LFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItZXhwYW5kLW1kIGQtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jayAgXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICBQU1lDSE9TXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICBTdGF0aXN0aWNzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgTWVkaWNhbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0c1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9ocj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIGNcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1lcmdlbmN5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2hyPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBNb3JlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEhvdyBUb1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEZhY3QgQ2hlY2tcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvaHI+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyBlbHNlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZC1mbGV4IHNlYXJjaFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yIHNlYXJjaC1iYXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBcIiB0eXBlPVwic3VibWl0XCI+PEhpU2VhcmNoIHN0eWxlPXt7Y29sb3IgOiBcImdyYXlcIn19IHNpemU9ezMwfS8+PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BvdCBkLW5vbmUgZC1tZC1ibG9jayBcIj48L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZW5hdlwiID48YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZS1pY29uXCI+PEhpTWVudSBvbkNsaWNrPXt0b2dnbGVTaWRlQmFyKCl9Lz48L2J1dHRvbj48L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBcIn0gaWQ9XCJteVNpZGViYXJcIiA+XG5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNlbGVjdGVkXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkNsaWVudHM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=