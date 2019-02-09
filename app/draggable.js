/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/draggable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/draggable.js":
/*!**************************!*\
  !*** ./src/draggable.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const dragDiv = document.querySelector('.draggable');
const profile = document.querySelector('#profile-console');
const colorConsole = document.querySelector('.color-console');
const chatBot = document.querySelector('.chat-bot-console'); // target elements with the "draggable" class

interact('.draggable').draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "parent",
    endOnly: true,
    elementRect: {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    }
  },
  // enable autoScroll
  autoScroll: true,
  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function (event) {
    var textEl = event.target.querySelector('p');
    textEl && (textEl.textContent = 'moved a distance of ' + Math.sqrt(Math.pow(event.pageX - event.x0, 2) + Math.pow(event.pageY - event.y0, 2) | 0).toFixed(2) + 'px');
  }
}).resizable({
  // resize from all edges and corners
  edges: {
    left: true,
    right: true,
    bottom: true,
    top: true
  },
  // keep the edges inside the parent
  restrictEdges: {
    outer: 'parent',
    endOnly: true
  },
  // minimum size
  restrictSize: {// min: { width: 100, height: 50 },
  },
  inertia: true
});

function dragMoveListener(event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy; // translate the element

  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; // update the posiion attributes

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

window.dragMoveListener = dragMoveListener;

/***/ })

/******/ });
//# sourceMappingURL=draggable.js.map