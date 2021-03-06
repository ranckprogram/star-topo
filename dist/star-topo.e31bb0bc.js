// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/nodes/Node.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(id) {
  _classCallCheck(this, Node);

  this.id = id;
};

exports.default = Node;
},{}],"src/nodes/DeviceNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node2 = _interopRequireDefault(require("./Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DeviceNode = /*#__PURE__*/function (_Node) {
  _inherits(DeviceNode, _Node);

  var _super = _createSuper(DeviceNode);

  function DeviceNode(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        name = _ref.name,
        info = _ref.info;

    _classCallCheck(this, DeviceNode);

    _this = _super.call(this);
    _this.deviceType = "deviceType";
    _this.width = width;
    _this.height = height;
    _this.borderColor = "#333";
    _this.x = x;
    _this.y = y;
    _this.imageWidth = 80;
    _this.imageHeight = 30;
    _this.name = name;
    _this.info = info;
    _this.isDrag = false; // ?????????

    _this.isSelect = false;
    console.log(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * ?????????????????????????????????active??????????????????????????????????????????????????????
   * - ?????????????????????????????????hover ctx??????????????????
   *   - ?????????????????????????????????????????????
   *   - js????????????worker???????????????ctx????????????
   *
   * @param {*} ctx
   * @memberof DeviceNode
   */


  _createClass(DeviceNode, [{
    key: "render",
    value: function render(ctx) {
      var _ref2 = [this.x, this.y],
          a = _ref2[0],
          b = _ref2[1];
      var c = this.x + this.width,
          d = this.y + this.height;
      ctx.moveTo(a, b);
      ctx.lineTo(c, b);
      ctx.lineTo(c, d);
      ctx.lineTo(a, d);
      ctx.lineTo(a, b);

      if (this.active) {
        ctx.strokeStyle = "#f80";
        ctx.stroke();
        ctx.beginPath();
      } else {
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.beginPath();
      }
    }
  }]);

  return DeviceNode;
}(_Node2.default);

exports.default = DeviceNode;
},{"./Node":"src/nodes/Node.js"}],"src/core/Transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function Transform() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  _classCallCheck(this, Transform);

  this.x = x;
  this.y = y;
  this.scale = scale;
};

exports.default = Transform;
},{}],"src/utils/hoverCheck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoverCheck;

function hoverCheck(e, nodes) {
  var offsetX = e.offsetX,
      offsetY = e.offsetY;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if (node.x < offsetX && node.x + node.width > offsetX && node.y < offsetY && node.y + node.height > offsetY) {
      node.active = true;
      document.body.style.cursor = "pointer";
      return;
    } else {
      node.active = false;
      document.body.style.cursor = "default";
    }
  }
}
},{}],"src/assets/images/concentrator.png":[function(require,module,exports) {
module.exports = "/concentrator.3b59fbbe.png";
},{}],"src/assets/images/*.png":[function(require,module,exports) {
module.exports = {
  "concentrator": require("./concentrator.png")
};
},{"./concentrator.png":"src/assets/images/concentrator.png"}],"src/components/Firewall.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DeviceNode2 = _interopRequireDefault(require("../nodes/DeviceNode"));

var _ = _interopRequireDefault(require("../assets/images/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Firewall = /*#__PURE__*/function (_DeviceNode) {
  _inherits(Firewall, _DeviceNode);

  var _super = _createSuper(Firewall);

  function Firewall(props) {
    var _this;

    _classCallCheck(this, Firewall);

    _this = _super.call(this, props);
    var img = document.createElement("img");
    img.src = _.default.concentrator;
    _this.img = img;
    return _this;
  }

  _createClass(Firewall, [{
    key: "render",
    value: function render(ctx) {
      var _this2 = this;

      var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          imageWidth = this.imageWidth,
          imageHeight = this.imageHeight,
          name = this.name,
          info = this.info;
      var textTop = y + imageHeight + 15;

      this.img.onload = function () {
        ctx.drawImage(_this2.img, x, y, imageWidth, imageHeight);
      };

      ctx.drawImage(this.img, x, y, imageWidth, imageHeight);
      ctx.fillStyle = "#333";
      ctx.font = "12px serif";
      ctx.fillText(name, x, textTop);
      ctx.fillText(name, x, textTop);
      ctx.fillText(info, x, textTop + 10 + 12);
    }
  }]);

  return Firewall;
}(_DeviceNode2.default);

exports.default = Firewall;
},{"../nodes/DeviceNode":"src/nodes/DeviceNode.js","../assets/images/*.png":"src/assets/images/*.png"}],"src/utils/boundaryCheck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boundaryCheck;

function boundaryCheck(e, node) {
  var offsetX = e.offsetX,
      offsetY = e.offsetY;

  if (node.x < offsetX && node.x + node.width > offsetX && node.y < offsetY && node.y + node.height > offsetY) {
    return true;
  } else {
    return false;
  }
}
},{}],"src/utils/move.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = move;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function move(e, nodes, originPosition) {
  var _originPosition = originPosition,
      _originPosition2 = _slicedToArray(_originPosition, 2),
      a = _originPosition2[0],
      b = _originPosition2[1];

  var offsetX = e.offsetX,
      offsetY = e.offsetY;
  var vectorX = offsetX - a;
  var vectorY = offsetY - b;
  originPosition = [vectorX, vectorY];

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].isSelect) {
      nodes[i]._x = nodes[i]._x || nodes[i].x;
      nodes[i]._y = nodes[i]._y || nodes[i].y;
      nodes[i].x = vectorX + nodes[i]._x;
      nodes[i].y = vectorY + nodes[i]._y;
    }
  }
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _DeviceNode = _interopRequireDefault(require("./src/nodes/DeviceNode"));

var _Transform = _interopRequireDefault(require("./src/core/Transform"));

var _hoverCheck = _interopRequireDefault(require("./src/utils/hoverCheck"));

var _Firewall = _interopRequireDefault(require("./src/components/Firewall"));

var _boundaryCheck = _interopRequireDefault(require("./src/utils/boundaryCheck"));

var _move = _interopRequireDefault(require("./src/utils/move"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StarTopo = /*#__PURE__*/function () {
  function StarTopo(el) {
    var _this = this;

    _classCallCheck(this, StarTopo);

    this.el = document.querySelector(el);
    this.nodes = [];
    this.edges = [];
    this.annotations = [];
    this.transform = new _Transform.default();
    this.originPosition = [0, 0];
    this.isPress = false;
    this.raf = null; // ??????

    this.el.addEventListener("mousemove", function (e) {
      return _this.mousemove(e);
    });
    this.el.addEventListener("mouseleave", function (e) {
      return _this.mouseleave(e);
    });
    this.el.addEventListener("mousedown", function (e) {
      return _this.mousedown(e);
    });
    this.el.addEventListener("mouseup", function (e) {
      return _this.mouseup(e);
    });
    this.render();
  }

  _createClass(StarTopo, [{
    key: "mousemove",
    value: function mousemove(e) {
      if (this.isPress) {
        (0, _move.default)(e, this.nodes, this.originPosition);
      } else {
        (0, _hoverCheck.default)(e, this.nodes); // ??????+1?????????????????????????????????????????????????????????

        this.render();
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(e) {
      this.mouseup();
    }
  }, {
    key: "mousedown",
    value: function mousedown(e) {
      this.isPress = true;
      this.draw();
      var offsetX = e.offsetX,
          offsetY = e.offsetY;
      this.originPosition = [offsetX, offsetY];

      for (var i = 0; i < this.nodes.length; i++) {
        var isPress = (0, _boundaryCheck.default)(e, this.nodes[i]);
        this.nodes[i].isSelect = isPress;
      }

      console.log(this.nodes);
    }
  }, {
    key: "mouseup",
    value: function mouseup(e) {
      this.isPress = false;
      window.cancelAnimationFrame(this.raf);
      this.originPosition = [0, 0];

      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].isPress = false;
        this.nodes[i]._x = 0;
        this.nodes[i]._y = 0;
      }
    }
  }, {
    key: "addNode",
    value: function addNode(node) {
      // ??????????????????????????????????????????????????????????????????????????????
      this.nodes.push(node);
    }
  }, {
    key: "removeNode",
    value: function removeNode() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      if (this.isPress) {
        this.render();
        this.raf = window.requestAnimationFrame(function () {
          return _this2.draw();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nodes;
      var canvas = this.el;
      var ctx = canvas.getContext("2d", {
        alpha: true
      });
      ctx.fillStyle = "#ddd";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _node = _step.value;

          _node.render(ctx);
        } // ctx.stroke();

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return StarTopo;
}();

var topo = new StarTopo("#canvas");
console.log(topo);
var node = new _DeviceNode.default({
  id: "id",
  x: 20,
  y: 20,
  width: 120,
  height: 30
});
topo.addNode(node);
topo.addNode(new _DeviceNode.default({
  id: "i4d",
  x: 100,
  y: 40,
  width: 220,
  height: 30
}));
topo.addNode(new _Firewall.default({
  id: "firewall",
  x: 300,
  y: 80,
  width: 80,
  height: 100,
  name: "?????????",
  info: "10.0.0.25"
}));
topo.addNode(new _Firewall.default({
  id: "firewall",
  x: 300,
  y: 180,
  width: 80,
  height: 100,
  name: "?????????sfdfsdfsdf???????????????",
  info: "10.0.0.25????????????????????????????????????"
}));
topo.render();
},{"./src/nodes/DeviceNode":"src/nodes/DeviceNode.js","./src/core/Transform":"src/core/Transform.js","./src/utils/hoverCheck":"src/utils/hoverCheck.js","./src/components/Firewall":"src/components/Firewall.js","./src/utils/boundaryCheck":"src/utils/boundaryCheck.js","./src/utils/move":"src/utils/move.js"}],"C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64140" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/star-topo.e31bb0bc.js.map