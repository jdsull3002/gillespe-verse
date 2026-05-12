import { t as __exportAll } from "./rolldown-runtime-CiIaOW0V.js";
//#region node_modules/@ionic/core/components/focus-visible.js
var focus_visible_exports = /* @__PURE__ */ __exportAll({ startFocusVisible: () => startFocusVisible });
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var ION_FOCUSED = "ion-focused";
var ION_FOCUSABLE = "ion-focusable";
var FOCUS_KEYS = [
	"Tab",
	"ArrowDown",
	"Space",
	"Escape",
	" ",
	"Shift",
	"Enter",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"Home",
	"End"
];
var startFocusVisible = (rootEl) => {
	let currentFocus = [];
	let keyboardMode = true;
	const ref = rootEl ? rootEl.shadowRoot : document;
	const root = rootEl ? rootEl : document.body;
	const setFocus = (elements) => {
		currentFocus.forEach((el) => el.classList.remove(ION_FOCUSED));
		elements.forEach((el) => el.classList.add(ION_FOCUSED));
		currentFocus = elements;
	};
	const pointerDown = () => {
		keyboardMode = false;
		setFocus([]);
	};
	const onKeydown = (ev) => {
		keyboardMode = FOCUS_KEYS.includes(ev.key);
		if (!keyboardMode) setFocus([]);
	};
	const onFocusin = (ev) => {
		if (keyboardMode && ev.composedPath !== void 0) setFocus(ev.composedPath().filter((el) => {
			if (el.classList) return el.classList.contains(ION_FOCUSABLE);
			return false;
		}));
	};
	const onFocusout = () => {
		if (ref.activeElement === root) setFocus([]);
	};
	ref.addEventListener("keydown", onKeydown);
	ref.addEventListener("focusin", onFocusin);
	ref.addEventListener("focusout", onFocusout);
	ref.addEventListener("touchstart", pointerDown, { passive: true });
	ref.addEventListener("mousedown", pointerDown);
	const destroy = () => {
		ref.removeEventListener("keydown", onKeydown);
		ref.removeEventListener("focusin", onFocusin);
		ref.removeEventListener("focusout", onFocusout);
		ref.removeEventListener("touchstart", pointerDown);
		ref.removeEventListener("mousedown", pointerDown);
	};
	return {
		destroy,
		setFocus
	};
};
//#endregion
export { startFocusVisible as n, focus_visible_exports as t };

//# sourceMappingURL=focus-visible-DaLDzau9.js.map