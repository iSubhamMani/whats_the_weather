/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api_key.js":
/*!************************!*\
  !*** ./src/api_key.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherApiKey)\n/* harmony export */ });\nfunction getWeatherApiKey(){\n    const apiKey = \"e5dd144d10854e53ad3172336232609\";\n    return apiKey;\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/api_key.js?");

/***/ }),

/***/ "./src/create_info_ui.js":
/*!*******************************!*\
  !*** ./src/create_info_ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addInfoUI)\n/* harmony export */ });\n/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFormatter */ \"./src/dateFormatter.js\");\n\n\nfunction getInfoUI(data){\n    const infoContainer = document.createElement('div');\n    infoContainer.id = \"weather-info-container\";\n\n    // Info Section Left\n\n    const infoSectionLeft = document.createElement('div');\n    infoSectionLeft.className = \"info-section-left\";\n\n    const headerLeft = document.createElement('div');\n    headerLeft.className = \"header-left\";\n\n    const name = document.createElement('span');\n    name.className = \"name\";\n    name.textContent = `${data.name}, ${data.country}`;\n\n    const localDate = document.createElement('span');\n    localDate.className = \"local-date\";\n    localDate.textContent = (0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.localDate);\n\n    headerLeft.appendChild(name);\n    headerLeft.appendChild(localDate);\n\n    const weatherCondContainer = document.createElement('div');\n    weatherCondContainer.className = \"weather-cond-container\";\n\n    const tempText = document.createElement('span');\n    tempText.className = \"temp-txt\";\n    tempText.textContent = `${data.temp_c}°C`;\n\n    const weatherCondText = document.createElement('span');\n    weatherCondText.className = \"weather-cond-txt\";\n    weatherCondText.textContent = `${data.weatherCondition}`;\n\n    const cc1 = document.createElement('div');\n    cc1.className = 'cc-1';\n\n    cc1.appendChild(tempText);\n    cc1.appendChild(weatherCondText);\n\n    const cc2 = document.createElement('div');\n    cc2.className = 'cc-2';\n\n    const humidity = document.createElement('span');\n    humidity.className = 'humidity-txt';\n    humidity.textContent = `${data.humidity}%`;\n\n    const windSpeed = document.createElement('span');\n    windSpeed.className = 'wind-speed-txt';\n    windSpeed.textContent = `${data.wind_kph} kph`;\n\n    cc2.appendChild(humidity);\n    cc2.appendChild(windSpeed);\n\n    weatherCondContainer.appendChild(cc1);\n    weatherCondContainer.appendChild(cc2);\n\n    infoSectionLeft.appendChild(headerLeft);\n    infoSectionLeft.appendChild(weatherCondContainer);\n\n    // Info Section Right\n\n    const infoSectionRight = document.createElement('div');\n    infoSectionRight.className = \"info-section-right\";\n\n    const localTime = document.createElement('span');\n    localTime.className = 'local-time';\n\n    if(data.localTime.split(':')[0] >= 0 && data.localTime.split(':')[0] < 12){\n        localTime.textContent = `${data.localTime} A.M`;\n    }\n    else if(data.localTime.split(':')[0] >= 12 && data.localTime.split(':')[0] < 13){\n        localTime.textContent = `${data.localTime} P.M`;\n    }\n    else{\n        localTime.textContent = `${(data.localTime.split(':')[0] - 12)}:${data.localTime.split(':')[1]} P.M`;\n    }\n\n    const feelsLikeText = document.createElement('span');\n    feelsLikeText.className = 'feels-like-txt';\n    feelsLikeText.textContent = `Feels like ${data.feelsLike_c}°C`\n\n    const uvIndex = document.createElement('span');\n    uvIndex.className = 'uv-index';\n    uvIndex.textContent = `UV index: ${data.uv}`;\n\n    const windDir = document.createElement('span');\n    windDir.className = 'wind-dir';\n    windDir.textContent = `Wind direction: ${data.wind_dir}`;\n\n    infoSectionRight.appendChild(localTime);\n    infoSectionRight.appendChild(feelsLikeText);\n    infoSectionRight.appendChild(uvIndex);\n    infoSectionRight.appendChild(windDir);\n\n    infoContainer.appendChild(infoSectionLeft);\n    infoContainer.appendChild(infoSectionRight);\n\n    return infoContainer;\n}\n\nfunction addInfoUI(data){\n    const weatherInfo = document.getElementById('weather-info');\n    weatherInfo.textContent = \"\";\n    weatherInfo.appendChild(getInfoUI(data));\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/create_info_ui.js?");

/***/ }),

/***/ "./src/dateFormatter.js":
/*!******************************!*\
  !*** ./src/dateFormatter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDate)\n/* harmony export */ });\nfunction formatDate(date){\n    const localYear = date.split('-')[0];\n    const localMonth = date.split('-')[1];\n    const localDay = date.split('-')[2];\n\n    const formattedDate = `${localDay}.${localMonth}.${localYear}`;\n    return formattedDate;\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/dateFormatter.js?");

/***/ }),

/***/ "./src/fetch_current_weather.js":
/*!**************************************!*\
  !*** ./src/fetch_current_weather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_key */ \"./src/api_key.js\");\n/* harmony import */ var _handle_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle_error */ \"./src/handle_error.js\");\n// Return the weather data for a location\n\n\n\nasync function fetchCurrentWeather(location){\n\n    try{\n        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${(0,_api_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()}&q=${location}`, {\n            mode: 'cors'\n        });\n\n        if(response.status === 400){\n            throw new Error();\n        }\n        \n        const responseJson = await response.json();\n        return responseJson;\n    }\n    catch(e){\n        (0,_handle_error__WEBPACK_IMPORTED_MODULE_1__.showError)();\n    }\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/fetch_current_weather.js?");

/***/ }),

/***/ "./src/handle_error.js":
/*!*****************************!*\
  !*** ./src/handle_error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeError: () => (/* binding */ removeError),\n/* harmony export */   showError: () => (/* binding */ showError)\n/* harmony export */ });\nfunction showError(){\n    const errorMsg = document.querySelector('.error-msg');\n    errorMsg.style.display = \"block\";\n}\n\nfunction removeError(){\n    const errorMsg = document.querySelector('.error-msg');\n    errorMsg.style.display = \"none\";\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/handle_error.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_form */ \"./src/search_form.js\");\n\n\n(0,_search_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://whats_the_weather/./src/index.js?");

/***/ }),

/***/ "./src/search_form.js":
/*!****************************!*\
  !*** ./src/search_form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setUpSearchForm)\n/* harmony export */ });\n/* harmony import */ var _create_info_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_info_ui */ \"./src/create_info_ui.js\");\n/* harmony import */ var _fetch_current_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch_current_weather */ \"./src/fetch_current_weather.js\");\n/* harmony import */ var _handle_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle_error */ \"./src/handle_error.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\n\n\n\nfunction setUpSearchForm(){\n    const submitBtn = document.querySelector('.search-btn');\n    const searchField = document.getElementById('search-field');\n    const ripple = document.querySelector('.lds-ripple');\n    const weatherInfo = document.getElementById('weather-info');\n\n    submitBtn.addEventListener('click', async (e) => {\n        e.preventDefault();\n        const searchQuery = searchField.value;\n\n        if(searchQuery.trim() !== \"\"){\n            weatherInfo.textContent = \"\";\n            (0,_handle_error__WEBPACK_IMPORTED_MODULE_2__.removeError)();\n            ripple.style.display = 'inline-block';\n            \n            const response = await (0,_fetch_current_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${searchQuery}`);\n            if(response){\n                ripple.style.display = 'none';\n                const data = new _weather__WEBPACK_IMPORTED_MODULE_3__[\"default\"](response);\n                (0,_create_info_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n            }\n        }\n    })\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/search_form.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather{\n    constructor(data){\n        this.weatherCondition = data.current.condition.text;\n        this.weatherConditionIcon = data.current.condition.icon;\n\n        this.temp_c = data.current.temp_c;\n        this.temp_f = data.current.temp_f;\n\n        this.feelsLike_c = data.current.feelslike_c;\n        this.feelsLike_f = data.current.feelslike_f;\n\n        this.humidity = data.current.humidity;\n        this.uv = data.current.uv;\n\n        this.vis_km = data.current.vis_km;\n        this.vis_miles = data.current.vis_miles;\n\n        this.wind_dir = data.current.wind_dir;\n\n        this.wind_kph = data.current.wind_kph;\n        this.wind_mph = data.current.wind_mph;\n\n        this.country = data.location.country;\n        this.name = data.location.name;\n        this.region = data.location.region;\n        this.localTime = data.location.localtime.split(\" \")[1];\n        this.localDate = data.location.localtime.split(\" \")[0];\n    }\n}\n\n//# sourceURL=webpack://whats_the_weather/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;