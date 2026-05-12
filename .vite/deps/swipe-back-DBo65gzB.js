import { r as clamp } from "./helpers-CcK7VbtN.js";
import { t as isRTL } from "./dir-B2qNYkzX.js";
import { t as createGesture } from "./index3-BWazFg8f.js";
//#region node_modules/@ionic/core/components/swipe-back.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
	const win = el.ownerDocument.defaultView;
	let rtl = isRTL(el);
	/**
	* Determine if a gesture is near the edge
	* of the screen. If true, then the swipe
	* to go back gesture should proceed.
	*/
	const isAtEdge = (detail) => {
		const threshold = 50;
		const { startX } = detail;
		if (rtl) return startX >= win.innerWidth - threshold;
		return startX <= threshold;
	};
	const getDeltaX = (detail) => {
		return rtl ? -detail.deltaX : detail.deltaX;
	};
	const getVelocityX = (detail) => {
		return rtl ? -detail.velocityX : detail.velocityX;
	};
	const canStart = (detail) => {
		/**
		* The user's locale can change mid-session,
		* so we need to check text direction at
		* the beginning of every gesture.
		*/
		rtl = isRTL(el);
		return isAtEdge(detail) && canStartHandler();
	};
	const onMove = (detail) => {
		onMoveHandler(getDeltaX(detail) / win.innerWidth);
	};
	const onEnd = (detail) => {
		const delta = getDeltaX(detail);
		const width = win.innerWidth;
		const stepValue = delta / width;
		const velocity = getVelocityX(detail);
		const z = width / 2;
		const shouldComplete = velocity >= 0 && (velocity > .2 || delta > z);
		const missingDistance = (shouldComplete ? 1 - stepValue : stepValue) * width;
		let realDur = 0;
		if (missingDistance > 5) {
			const dur = missingDistance / Math.abs(velocity);
			realDur = Math.min(dur, 540);
		}
		onEndHandler(shouldComplete, stepValue <= 0 ? .01 : clamp(0, stepValue, .9999), realDur);
	};
	return createGesture({
		el,
		gestureName: "goback-swipe",
		/**
		* Swipe to go back should have priority over other horizontal swipe
		* gestures. These gestures have a priority of 100 which is why 101 was chosen here.
		*/
		gesturePriority: 101,
		threshold: 10,
		canStart,
		onStart: onStartHandler,
		onMove,
		onEnd
	});
};
//#endregion
export { createSwipeBackGesture };

//# sourceMappingURL=swipe-back-DBo65gzB.js.map