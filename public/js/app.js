/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nwindow.onload = function () {\n    var jobs = document.querySelectorAll('.card');\n    var height = 0;\n\n    jobs.forEach(function (job) {\n        if (job.offsetHeight > height) {\n            height = job.offsetHeight;\n        }\n    });\n\n    jobs.forEach(function (job) {\n        job.style.height = height + 60 + 'px';\n    });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzE3NTkiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiam9icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhlaWdodCIsImZvckVhY2giLCJqb2IiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCLFFBQU1DLE9BQU9DLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWI7QUFDQSxRQUFJQyxTQUFTLENBQWI7O0FBRUFILFNBQUtJLE9BQUwsQ0FBYSxlQUFPO0FBQ2hCLFlBQUdDLElBQUlDLFlBQUosR0FBbUJILE1BQXRCLEVBQTZCO0FBQ3pCQSxxQkFBU0UsSUFBSUMsWUFBYjtBQUNIO0FBQ0osS0FKRDs7QUFNQU4sU0FBS0ksT0FBTCxDQUFhLGVBQU87QUFDaEJDLFlBQUlFLEtBQUosQ0FBVUosTUFBVixHQUFvQkEsU0FBUyxFQUFWLEdBQWdCLElBQW5DO0FBQ0gsS0FGRDtBQUdILENBYkQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgam9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgbGV0IGhlaWdodCA9IDA7XG5cbiAgICBqb2JzLmZvckVhY2goam9iID0+IHtcbiAgICAgICAgaWYoam9iLm9mZnNldEhlaWdodCA+IGhlaWdodCl7XG4gICAgICAgICAgICBoZWlnaHQgPSBqb2Iub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqb2JzLmZvckVhY2goam9iID0+IHtcbiAgICAgICAgam9iLnN0eWxlLmhlaWdodCA9IChoZWlnaHQgKyA2MCkgKyAncHgnO1xuICAgIH0pO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction loadSwiper(slides) {\n    var swiper = new Swiper('.swiper-container', {\n        slidesPerView: slides,\n        paginationClickable: true,\n        centeredSlides: true,\n        spaceBetween: 30\n    });\n}\n\nfunction getSlideAmount() {\n    if (window.innerWidth < 800) {\n        return 1;\n    }\n\n    return 6;\n}\n\nloadSwiper(getSlideAmount());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWN0aW9uLmpzPzNmNzEiXSwibmFtZXMiOlsibG9hZFN3aXBlciIsInNsaWRlcyIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJwYWdpbmF0aW9uQ2xpY2thYmxlIiwiY2VudGVyZWRTbGlkZXMiLCJzcGFjZUJldHdlZW4iLCJnZXRTbGlkZUFtb3VudCIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsTUFBcEIsRUFBMkI7QUFDdkIsUUFBTUMsU0FBUyxJQUFJQyxNQUFKLENBQVcsbUJBQVgsRUFBZ0M7QUFDM0NDLHVCQUFlSCxNQUQ0QjtBQUUzQ0ksNkJBQXFCLElBRnNCO0FBRzNDQyx3QkFBZ0IsSUFIMkI7QUFJM0NDLHNCQUFjO0FBSjZCLEtBQWhDLENBQWY7QUFNSDs7QUFFRCxTQUFTQyxjQUFULEdBQXlCO0FBQ3JCLFFBQUdDLE9BQU9DLFVBQVAsR0FBb0IsR0FBdkIsRUFBMkI7QUFDdkIsZUFBTyxDQUFQO0FBQ0g7O0FBR0QsV0FBTyxDQUFQO0FBQ0g7O0FBRURWLFdBQVdRLGdCQUFYIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkU3dpcGVyKHNsaWRlcyl7XG4gICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IHNsaWRlcyxcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2xpZGVBbW91bnQoKXtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCl7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIDY7XG59XG5cbmxvYWRTd2lwZXIoZ2V0U2xpZGVBbW91bnQoKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvanMvYWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);