/**/ (function(modules) { // webpackBootstrap
/**/ 	// The module cache
/**/ 	var installedModules = {};
/**/
/**/ 	// The require function
/**/ 	function _webpack_require_(moduleId) {
/**/
/**/ 		// Check if module is in cache
/**/ 		if(installedModules[moduleId]) {
/**/ 			return installedModules[moduleId].exports;
/**/ 		}
/**/ 		// Create a new module (and put it into the cache)
/**/ 		var module = installedModules[moduleId] = {
/**/ 			i: moduleId,
/**/ 			l: false,
/**/ 			exports: {}
/**/ 		};
/**/
/**/ 		// Execute the module function
/**/ 		modules[moduleId].call(module.exports, module, module.exports, _webpack_require_);
/**/
/**/ 		// Flag the module as loaded
/**/ 		module.l = true;
/**/
/**/ 		// Return the exports of the module
/**/ 		return module.exports;
/**/ 	}
/**/
/**/
/**/ 	// expose the modules object (_webpack_modules_)
/**/ 	_webpack_require_.m = modules;
/**/
/**/ 	// expose the module cache
/**/ 	_webpack_require_.c = installedModules;
/**/
/**/ 	// define getter function for harmony exports
/**/ 	_webpack_require_.d = function(exports, name, getter) {
/**/ 		if(!_webpack_require_.o(exports, name)) {
/**/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/**/ 		}
/**/ 	};

/**/ 	_webpack_require_.r = function(exports) {
/**/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/**/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/**/ 		}
/**/ 		Object.defineProperty(exports, '__esModule', { value: true });
/**/ 	};

/**/ 	_webpack_require_.t = function(value, mode) {
/**/ 		if(mode & 1) value = _webpack_require_(value);
/**/ 		if(mode & 8) return value;
/**/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/**/ 		var ns = Object.create(null);
/**/ 		_webpack_require_.r(ns);
/**/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/**/ 		if(mode & 2 && typeof value != 'string') for(var key in value) _webpack_require_.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/**/ 		return ns;
/**/ 	};
/**/
/**/ 	// getDefaultExport function for compatibility with non-harmony modules
/**/ 	_webpack_require_.n = function(module) {
/**/ 		var getter = module && module.__esModule ?
/**/ 			function getDefault() { return module['default']; } :
/**/ 			function getModuleExports() { return module; };
/**/ 		_webpack_require_.d(getter, 'a', getter);
/**/ 		return getter;
/**/ 	};
/**/
/**/ 	// Object.prototype.hasOwnProperty.call
/**/ 	_webpack_require_.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/**/
/**/ 	// _webpack_public_path_
/**/ 	_webpack_require_.p = "";
/**/
/**/
/**/ 	// Load entry module and return exports
/**/ 	return _webpack_require(webpack_require_.s = "./src/js/canvas.js");
/**/ })
/************************/
/**/ ({

/*/ "./src/js/canvas.js":
(function(module, _webpack_exports, __webpack_require_) {

"use strict";
_webpack_require.r(webpack_exports_);
?*harmony import / var utilsWEBPACK_IMPORTED_MODULE_0_ = _webpack_require_(/! ./utils */ "./src/js/utils.js");
/* harmony import / var utilsWEBPACK_IMPORTED_MODULE_0_default = /*##_PURE*/webpack_require.n(_utilsWEBPACK_IMPORTED_MODULE_0_);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; 
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); 
// Objects

class Particle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.shadowColor = this.color
    c.fillStyle = this.color
    c.shadowBlur = 15
    c.fillStyle = this.color
    
    c.fill()
    c.closePath()
   
  }
  make() {
    c.beginPath()
    c.arc(100,100,30,0,Math.PI *2,false);
    c.strokeStyle = 'red';
    c.stroke();
    c.closePath()
  }

  update() {
    this.draw()
  }
}
// Implementation


let particles;

function init() {
  particles = [];

  for (let i = 0; i < 550; i++) {
    const canvasWidth = canvas.width + 300
    const canvasHeight = canvas.height + 300
    const x = Math.random() * canvasWidth - canvasWidth / 2 
    const y = Math.random() * canvasHeight - canvasHeight / 2
    const radius =2 * Math.random()
    
    const color = colors[Math.floor(Math.random() * colors.length)]
    particles.push(new Particle(x, y, radius, color))
  }
} // Animation Loop

let radians =0
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "rgba(10,10,10, 1)"
  c.fillRect(0, 0, canvas.width, canvas.height) 
  c.save()
  c.translate(canvas.width /2 , canvas.height /2)
  c.rotate(radians)
  
  particles.forEach((particle) => {
    particle.update()
 })
  c.restore()
  radians +=0.001
}

init();
animate();

/*/ }),

/*/ "./src/js/utils.js":
/!********!*\
  !* ./src/js/utils.js *!
  \*********/
/*! no static exports found */
/*/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

})

});