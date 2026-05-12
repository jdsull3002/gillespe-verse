//#region node_modules/@ionic/core/components/index4.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var Config = class {
	constructor() {
		this.m = /* @__PURE__ */ new Map();
	}
	reset(configObj) {
		this.m = new Map(Object.entries(configObj));
	}
	get(key, fallback) {
		const value = this.m.get(key);
		return value !== void 0 ? value : fallback;
	}
	getBoolean(key, fallback = false) {
		const val = this.m.get(key);
		if (val === void 0) return fallback;
		if (typeof val === "string") return val === "true";
		return !!val;
	}
	getNumber(key, fallback) {
		const val = parseFloat(this.m.get(key));
		return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
	}
	set(key, value) {
		this.m.set(key, value);
	}
};
var config = /* @__PURE__ */ new Config();
var configFromSession = (win) => {
	try {
		const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
		return configStr !== null ? JSON.parse(configStr) : {};
	} catch (e) {
		return {};
	}
};
var saveConfig = (win, c) => {
	try {
		win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
	} catch (e) {
		return;
	}
};
var configFromURL = (win) => {
	const configObj = {};
	win.location.search.slice(1).split("&").map((entry) => entry.split("=")).map(([key, value]) => {
		try {
			return [decodeURIComponent(key), decodeURIComponent(value)];
		} catch (e) {
			return ["", ""];
		}
	}).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
		configObj[key] = value;
	});
	return configObj;
};
var startsWith = (input, search) => {
	return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var LogLevel;
(function(LogLevel) {
	LogLevel["OFF"] = "OFF";
	LogLevel["ERROR"] = "ERROR";
	LogLevel["WARN"] = "WARN";
})(LogLevel || (LogLevel = {}));
/**
* Logs a warning to the console with an Ionic prefix
* to indicate the library that is warning the developer.
*
* @param message - The string message to be logged to the console.
*/
var printIonWarning = (message, ...params) => {
	const logLevel = config.get("logLevel", LogLevel.WARN);
	if ([LogLevel.WARN].includes(logLevel)) return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
/**
* Logs an error to the console with an Ionic prefix
* to indicate the library that is warning the developer.
*
* @param message - The string message to be logged to the console.
* @param params - Additional arguments to supply to the console.error.
*/
var printIonError = (message, ...params) => {
	const logLevel = config.get("logLevel", LogLevel.ERROR);
	if ([LogLevel.ERROR, LogLevel.WARN].includes(logLevel)) return console.error(`[Ionic Error]: ${message}`, ...params);
};
/**
* Prints an error informing developers that an implementation requires an element to be used
* within a specific selector.
*
* @param el The web component element this is requiring the element.
* @param targetSelectors The selector or selectors that were not found.
*/
var printRequiredElementError = (el, ...targetSelectors) => {
	return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};
//#endregion
export { printIonWarning as a, printIonError as i, configFromSession as n, printRequiredElementError as o, configFromURL as r, saveConfig as s, config as t };

//# sourceMappingURL=index4-Dp5su7Z0.js.map