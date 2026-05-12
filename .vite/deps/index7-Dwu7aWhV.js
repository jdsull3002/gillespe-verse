import { m as pointerCoord } from "./helpers-CcK7VbtN.js";
import { t as doc } from "./index9-Dbib3cpu.js";
//#region node_modules/@ionic/core/components/index7.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var startTapClick = (config) => {
	if (doc === void 0) return;
	let lastActivated = 0;
	let activatableEle;
	let activeRipple;
	let activeDefer;
	const useRippleEffect = config.getBoolean("animated", true) && config.getBoolean("rippleEffect", true);
	const clearDefers = /* @__PURE__ */ new WeakMap();
	const cancelActive = () => {
		if (activeDefer) clearTimeout(activeDefer);
		activeDefer = void 0;
		if (activatableEle) {
			removeActivated(false);
			activatableEle = void 0;
		}
	};
	const pointerDown = (ev) => {
		if (activatableEle || ev.button === 2) return;
		setActivatedElement(getActivatableTarget(ev), ev);
	};
	const pointerUp = (ev) => {
		setActivatedElement(void 0, ev);
	};
	const setActivatedElement = (el, ev) => {
		if (el && el === activatableEle) return;
		if (activeDefer) clearTimeout(activeDefer);
		activeDefer = void 0;
		const { x, y } = pointerCoord(ev);
		if (activatableEle) {
			if (clearDefers.has(activatableEle)) throw new Error("internal error");
			if (!activatableEle.classList.contains(ACTIVATED)) addActivated(activatableEle, x, y);
			removeActivated(true);
		}
		if (el) {
			const deferId = clearDefers.get(el);
			if (deferId) {
				clearTimeout(deferId);
				clearDefers.delete(el);
			}
			el.classList.remove(ACTIVATED);
			const callback = () => {
				addActivated(el, x, y);
				activeDefer = void 0;
			};
			if (isInstant(el)) callback();
			else activeDefer = setTimeout(callback, ADD_ACTIVATED_DEFERS);
		}
		activatableEle = el;
	};
	const addActivated = (el, x, y) => {
		lastActivated = Date.now();
		el.classList.add(ACTIVATED);
		if (!useRippleEffect) return;
		const rippleEffect = getRippleEffect(el);
		if (rippleEffect !== null) {
			removeRipple();
			activeRipple = rippleEffect.addRipple(x, y);
		}
	};
	const removeRipple = () => {
		if (activeRipple !== void 0) {
			activeRipple.then((remove) => remove());
			activeRipple = void 0;
		}
	};
	const removeActivated = (smooth) => {
		removeRipple();
		const active = activatableEle;
		if (!active) return;
		const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
		if (smooth && time > 0 && !isInstant(active)) {
			const deferId = setTimeout(() => {
				active.classList.remove(ACTIVATED);
				clearDefers.delete(active);
			}, CLEAR_STATE_DEFERS);
			clearDefers.set(active, deferId);
		} else active.classList.remove(ACTIVATED);
	};
	doc.addEventListener("ionGestureCaptured", cancelActive);
	doc.addEventListener("pointerdown", pointerDown, true);
	doc.addEventListener("pointerup", pointerUp, true);
	/**
	* Tap click effects such as the ripple effect should
	* not happen when scrolling. For example, if a user scrolls
	* the page but also happens to do a touchstart on a button
	* as part of the scroll, the ripple effect should not
	* be dispatched. The ripple effect should only happen
	* if the button is activated and the page is not scrolling.
	*
	* pointercancel is dispatched on a gesture when scrolling
	* starts, so this lets us avoid having to listen for
	* ion-content's scroll events.
	*/
	doc.addEventListener("pointercancel", cancelActive, true);
};
var getActivatableTarget = (ev) => {
	if (ev.composedPath !== void 0) {
		/**
		* composedPath returns EventTarget[]. However,
		* objects other than Element can be targets too.
		* For example, AudioContext can be a target. In this
		* case, we know that the event is a UIEvent so we
		* can assume that the path will contain either Element
		* or ShadowRoot.
		*/
		const path = ev.composedPath();
		for (let i = 0; i < path.length - 2; i++) {
			const el = path[i];
			if (!(el instanceof ShadowRoot) && el.classList.contains("ion-activatable")) return el;
		}
	} else return ev.target.closest(".ion-activatable");
};
var isInstant = (el) => {
	return el.classList.contains("ion-activatable-instant");
};
var getRippleEffect = (el) => {
	if (el.shadowRoot) {
		const ripple = el.shadowRoot.querySelector("ion-ripple-effect");
		if (ripple) return ripple;
	}
	return el.querySelector("ion-ripple-effect");
};
var ACTIVATED = "ion-activated";
var ADD_ACTIVATED_DEFERS = 100;
var CLEAR_STATE_DEFERS = 150;
//#endregion
export { startTapClick };

//# sourceMappingURL=index7-Dwu7aWhV.js.map