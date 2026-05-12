import { t as __exportAll } from "./rolldown-runtime-CiIaOW0V.js";
import { t as Keyboard } from "./keyboard2-C5kYf6Hk.js";
//#region node_modules/@ionic/core/components/keyboard.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var keyboard_exports = /* @__PURE__ */ __exportAll({
	KEYBOARD_DID_CLOSE: () => KEYBOARD_DID_CLOSE,
	KEYBOARD_DID_OPEN: () => KEYBOARD_DID_OPEN,
	copyVisualViewport: () => copyVisualViewport,
	keyboardDidClose: () => keyboardDidClose,
	keyboardDidOpen: () => keyboardDidOpen,
	keyboardDidResize: () => keyboardDidResize,
	setKeyboardClose: () => setKeyboardClose,
	setKeyboardOpen: () => setKeyboardOpen,
	startKeyboardAssist: () => startKeyboardAssist,
	trackViewportChanges: () => trackViewportChanges
});
var KEYBOARD_DID_OPEN = "ionKeyboardDidShow";
var KEYBOARD_DID_CLOSE = "ionKeyboardDidHide";
var KEYBOARD_THRESHOLD = 150;
var previousVisualViewport = {};
var currentVisualViewport = {};
var keyboardOpen = false;
var startKeyboardAssist = (win) => {
	/**
	* If the native keyboard plugin is available
	* then we are running in a native environment. As a result
	* we should only listen on the native events instead of
	* using the Visual Viewport as the Ionic webview manipulates
	* how it resizes such that the Visual Viewport API is not
	* reliable here.
	*/
	if (Keyboard.getEngine()) startNativeListeners(win);
	else {
		if (!win.visualViewport) return;
		currentVisualViewport = copyVisualViewport(win.visualViewport);
		win.visualViewport.onresize = () => {
			trackViewportChanges(win);
			if (keyboardDidOpen() || keyboardDidResize(win)) setKeyboardOpen(win);
			else if (keyboardDidClose(win)) setKeyboardClose(win);
		};
	}
};
/**
* Listen for events fired by native keyboard plugin
* in Capacitor/Cordova so devs only need to listen
* in one place.
*/
var startNativeListeners = (win) => {
	win.addEventListener("keyboardDidShow", (ev) => setKeyboardOpen(win, ev));
	win.addEventListener("keyboardDidHide", () => setKeyboardClose(win));
};
var setKeyboardOpen = (win, ev) => {
	fireKeyboardOpenEvent(win, ev);
	keyboardOpen = true;
};
var setKeyboardClose = (win) => {
	fireKeyboardCloseEvent(win);
	keyboardOpen = false;
};
/**
* Returns `true` if the `keyboardOpen` flag is not
* set, the previous visual viewport width equal the current
* visual viewport width, and if the scaled difference
* of the previous visual viewport height minus the current
* visual viewport height is greater than KEYBOARD_THRESHOLD
*
* We need to be able to accommodate users who have zooming
* enabled in their browser (or have zoomed in manually) which
* is why we take into account the current visual viewport's
* scale value.
*/
var keyboardDidOpen = () => {
	const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
	return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
* Returns `true` if the keyboard is open,
* but the keyboard did not close
*/
var keyboardDidResize = (win) => {
	return keyboardOpen && !keyboardDidClose(win);
};
/**
* Determine if the keyboard was closed
* Returns `true` if the `keyboardOpen` flag is set and
* the current visual viewport height equals the
* layout viewport height.
*/
var keyboardDidClose = (win) => {
	return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
* Dispatch a keyboard open event
*/
var fireKeyboardOpenEvent = (win, nativeEv) => {
	const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
	const ev = new CustomEvent(KEYBOARD_DID_OPEN, { detail: { keyboardHeight } });
	win.dispatchEvent(ev);
};
/**
* Dispatch a keyboard close event
*/
var fireKeyboardCloseEvent = (win) => {
	const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
	win.dispatchEvent(ev);
};
/**
* Given a window object, create a copy of
* the current visual and layout viewport states
* while also preserving the previous visual and
* layout viewport states
*/
var trackViewportChanges = (win) => {
	previousVisualViewport = Object.assign({}, currentVisualViewport);
	currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
* Creates a deep copy of the visual viewport
* at a given state
*/
var copyVisualViewport = (visualViewport) => {
	return {
		width: Math.round(visualViewport.width),
		height: Math.round(visualViewport.height),
		offsetTop: visualViewport.offsetTop,
		offsetLeft: visualViewport.offsetLeft,
		pageTop: visualViewport.pageTop,
		pageLeft: visualViewport.pageLeft,
		scale: visualViewport.scale
	};
};
//#endregion
export { keyboard_exports as n, KEYBOARD_DID_OPEN as t };

//# sourceMappingURL=keyboard-D6O0knim.js.map