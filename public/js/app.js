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

	eval("'use strict';\n\nwindow.onload = function () {\n    var jobs = document.querySelectorAll('.card');\n    var height = 0;\n\n    jobs.forEach(function (job) {\n        if (job.offsetHeight > height) {\n            height = job.offsetHeight;\n        }\n    });\n\n    jobs.forEach(function (job) {\n        job.style.height = height + 60 + 'px';\n    });\n\n    var mobileNavigation = document.querySelector('.nav__item--mobile');\n    var navigationIsShown = false;\n\n    mobileNavigation.addEventListener(\"click\", function () {\n\n        var list = document.querySelectorAll('.nav__item--desktop');\n\n        [].forEach.call(list, function (item) {\n            item.style.display = navigationIsShown ? 'none' : 'block';\n        });\n\n        navigationIsShown = !navigationIsShown;\n    });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzE3NTkiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiam9icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhlaWdodCIsImZvckVhY2giLCJqb2IiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1vYmlsZU5hdmlnYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwibmF2aWdhdGlvbklzU2hvd24iLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdCIsImNhbGwiLCJpdGVtIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCLFFBQU1DLE9BQU9DLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWI7QUFDQSxRQUFJQyxTQUFTLENBQWI7O0FBRUFILFNBQUtJLE9BQUwsQ0FBYSxlQUFPO0FBQ2hCLFlBQUdDLElBQUlDLFlBQUosR0FBbUJILE1BQXRCLEVBQTZCO0FBQ3pCQSxxQkFBU0UsSUFBSUMsWUFBYjtBQUNIO0FBQ0osS0FKRDs7QUFNQU4sU0FBS0ksT0FBTCxDQUFhLGVBQU87QUFDaEJDLFlBQUlFLEtBQUosQ0FBVUosTUFBVixHQUFvQkEsU0FBUyxFQUFWLEdBQWdCLElBQW5DO0FBQ0gsS0FGRDs7QUFJQSxRQUFNSyxtQkFBbUJQLFNBQVNRLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0FBQ0EsUUFBSUMsb0JBQW9CLEtBQXhCOztBQUVBRixxQkFBaUJHLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNOztBQUU3QyxZQUFJQyxPQUFPWCxTQUFTQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBWDs7QUFFQSxXQUFHRSxPQUFILENBQVdTLElBQVgsQ0FBZ0JELElBQWhCLEVBQXNCLFVBQUNFLElBQUQsRUFBVTtBQUM1QkEsaUJBQUtQLEtBQUwsQ0FBV1EsT0FBWCxHQUFxQkwsb0JBQW9CLE1BQXBCLEdBQTZCLE9BQWxEO0FBQ0gsU0FGRDs7QUFJQUEsNEJBQW9CLENBQUNBLGlCQUFyQjtBQUNILEtBVEQ7QUFVSCxDQTNCRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBqb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcblxuICAgIGpvYnMuZm9yRWFjaChqb2IgPT4ge1xuICAgICAgICBpZihqb2Iub2Zmc2V0SGVpZ2h0ID4gaGVpZ2h0KXtcbiAgICAgICAgICAgIGhlaWdodCA9IGpvYi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpvYnMuZm9yRWFjaChqb2IgPT4ge1xuICAgICAgICBqb2Iuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCArIDYwKSArICdweCc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb2JpbGVOYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faXRlbS0tbW9iaWxlJyk7XG4gICAgbGV0IG5hdmlnYXRpb25Jc1Nob3duID0gZmFsc2U7XG5cbiAgICBtb2JpbGVOYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtLS1kZXNrdG9wJyk7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGxpc3QsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBuYXZpZ2F0aW9uSXNTaG93biA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5hdmlnYXRpb25Jc1Nob3duID0gIW5hdmlnYXRpb25Jc1Nob3duO1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction loadSwiper(slides) {\n    if (document.querySelectorAll('.swiper-container').length > 0) {\n\n        var swiper = new Swiper('.swiper-container', {\n            slidesPerView: slides,\n            paginationClickable: true,\n            centeredSlides: true,\n            spaceBetween: 30\n        });\n    }\n}\n\nfunction getSlideAmount() {\n    if (window.innerWidth < 800) {\n        return 1;\n    }\n\n    return 6;\n}\n\nloadSwiper(getSlideAmount());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWN0aW9uLmpzPzNmNzEiXSwibmFtZXMiOlsibG9hZFN3aXBlciIsInNsaWRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJwYWdpbmF0aW9uQ2xpY2thYmxlIiwiY2VudGVyZWRTbGlkZXMiLCJzcGFjZUJldHdlZW4iLCJnZXRTbGlkZUFtb3VudCIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDeEIsUUFBSUMsU0FBU0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDQyxNQUEvQyxHQUF3RCxDQUE1RCxFQUErRDs7QUFFM0QsWUFBTUMsU0FBUyxJQUFJQyxNQUFKLENBQVcsbUJBQVgsRUFBZ0M7QUFDM0NDLDJCQUFlTixNQUQ0QjtBQUUzQ08saUNBQXFCLElBRnNCO0FBRzNDQyw0QkFBZ0IsSUFIMkI7QUFJM0NDLDBCQUFjO0FBSjZCLFNBQWhDLENBQWY7QUFNSDtBQUVKOztBQUVELFNBQVNDLGNBQVQsR0FBMEI7QUFDdEIsUUFBSUMsT0FBT0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QixlQUFPLENBQVA7QUFDSDs7QUFFRCxXQUFPLENBQVA7QUFDSDs7QUFFRGIsV0FBV1csZ0JBQVgiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRTd2lwZXIoc2xpZGVzKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogc2xpZGVzLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0U2xpZGVBbW91bnQoKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiA2O1xufVxuXG5sb2FkU3dpcGVyKGdldFNsaWRlQW1vdW50KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2pzL2FjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);