import { p as writeTask, t as Build } from "./client-C-sg6esh.js";
import { a as printIonWarning, i as printIonError, t as config } from "./index4-Dp5su7Z0.js";
import { h as raf } from "./helpers-CcK7VbtN.js";
import { n as win } from "./index9-Dbib3cpu.js";
//#region node_modules/@ionic/core/components/index2.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
/**
* Moves focus to a specified element. Note that we do not remove the tabindex
* because that can result in an unintentional blur. Non-focusables can't be
* focused, so the body will get focused again.
*/
var moveFocus = (el) => {
	el.tabIndex = -1;
	el.focus();
};
/**
* Elements that are hidden using `display: none` should not be focused even if
* they are present in the DOM.
*/
var isVisible = (el) => {
	return el.offsetParent !== null;
};
/**
* The focus controller allows us to manage focus within a view so assistive
* technologies can inform users of changes to the navigation state. Traditional
* native apps have a way of informing assistive technology about a navigation
* state change. Mobile browsers have this too, but only when doing a full page
* load. In a single page app we do not do that, so we need to build this
* integration ourselves.
*/
var createFocusController = () => {
	const saveViewFocus = (referenceEl) => {
		/**
		* When going back to a previously visited page focus should typically be moved
		* back to the element that was last focused when the user was on this view.
		*/
		if (config.get("focusManagerPriority", false)) {
			const activeEl = document.activeElement;
			if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) activeEl.setAttribute(LAST_FOCUS, "true");
		}
	};
	const setViewFocus = (referenceEl) => {
		const focusManagerPriorities = config.get("focusManagerPriority", false);
		/**
		* If the focused element is a descendant of the referenceEl then it's possible
		* that the app developer manually moved focus, so we do not want to override that.
		* This can happen with inputs the are focused when a view transitions in.
		*/
		if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
			/**
			* When going back to a previously visited view focus should always be moved back
			* to the element that the user was last focused on when they were on this view.
			*/
			const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
			if (lastFocus && isVisible(lastFocus)) {
				moveFocus(lastFocus);
				return;
			}
			for (const priority of focusManagerPriorities)
 /**
			* For each recognized case (excluding the default case) make sure to return
			* so that the fallback focus behavior does not run.
			*
			* We intentionally query for specific roles/semantic elements so that the
			* transition manager can work with both Ionic and non-Ionic UI components.
			*
			* If new selectors are added, be sure to remove the outline ring by adding
			* new selectors to rule in core.scss.
			*/
			switch (priority) {
				case "content":
					const content = referenceEl.querySelector("main, [role=\"main\"]");
					if (content && isVisible(content)) {
						moveFocus(content);
						return;
					}
					break;
				case "heading":
					const headingOne = referenceEl.querySelector("h1, [role=\"heading\"][aria-level=\"1\"]");
					if (headingOne && isVisible(headingOne)) {
						moveFocus(headingOne);
						return;
					}
					break;
				case "banner":
					const header = referenceEl.querySelector("header, [role=\"banner\"]");
					if (header && isVisible(header)) {
						moveFocus(header);
						return;
					}
					break;
				default:
					printIonWarning(`Unrecognized focus manager priority value ${priority}`);
					break;
			}
			/**
			* If there is nothing to focus then focus the page so focus at least moves to
			* the correct view. The browser will then determine where within the page to
			* move focus to.
			*/
			moveFocus(referenceEl);
		}
	};
	return {
		saveViewFocus,
		setViewFocus
	};
};
var LAST_FOCUS = "ion-last-focus";
var iosTransitionAnimation = () => import("./ios.transition-DuHVEmfq.js").then((n) => n.n);
var mdTransitionAnimation = () => import("./md.transition-BtLfPlMn.js").then((n) => n.n);
var focusController = createFocusController();
/**
* Executes the main page transition.
* It also manages the lifecycle of header visibility (if any)
* to prevent visual flickering in iOS. The flickering only
* occurs for a condensed header that is placed above the content.
*
* @param opts Options for the transition.
* @returns A promise that resolves when the transition is complete.
*/
var transition = (opts) => {
	return new Promise((resolve, reject) => {
		writeTask(() => {
			const transitioningInactiveHeader = getIosIonHeader(opts);
			beforeTransition(opts, transitioningInactiveHeader);
			runTransition(opts).then((result) => {
				if (result.animation) result.animation.destroy();
				afterTransition(opts);
				resolve(result);
			}, (error) => {
				afterTransition(opts);
				reject(error);
			}).finally(() => {
				setHeaderTransitionClass(transitioningInactiveHeader, false);
			});
		});
	});
};
var beforeTransition = (opts, transitioningInactiveHeader) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	focusController.saveViewFocus(leavingEl);
	setZIndex(enteringEl, leavingEl, opts.direction);
	setHeaderTransitionClass(transitioningInactiveHeader, true);
	if (opts.showGoBack) enteringEl.classList.add("can-go-back");
	else enteringEl.classList.remove("can-go-back");
	setPageHidden(enteringEl, false);
	/**
	* When transitioning, the page should not
	* respond to click events. This resolves small
	* issues like users double tapping the ion-back-button.
	* These pointer events are removed in `afterTransition`.
	*/
	enteringEl.style.setProperty("pointer-events", "none");
	if (leavingEl) {
		setPageHidden(leavingEl, false);
		leavingEl.style.setProperty("pointer-events", "none");
	}
};
var runTransition = async (opts) => {
	const animationBuilder = await getAnimationBuilder(opts);
	return animationBuilder && Build.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts);
};
var afterTransition = (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	enteringEl.classList.remove("ion-page-invisible");
	enteringEl.style.removeProperty("pointer-events");
	if (leavingEl !== void 0) {
		leavingEl.classList.remove("ion-page-invisible");
		leavingEl.style.removeProperty("pointer-events");
	}
	focusController.setViewFocus(enteringEl);
};
var getAnimationBuilder = async (opts) => {
	if (!opts.leavingEl || !opts.animated || opts.duration === 0) return;
	if (opts.animationBuilder) return opts.animationBuilder;
	return opts.mode === "ios" ? (await iosTransitionAnimation()).iosTransitionAnimation : (await mdTransitionAnimation()).mdTransitionAnimation;
};
var animation = async (animationBuilder, opts) => {
	await waitForReady(opts, true);
	const trans = animationBuilder(opts.baseEl, opts);
	fireWillEvents(opts.enteringEl, opts.leavingEl);
	const didComplete = await playTransition(trans, opts);
	if (opts.progressCallback) opts.progressCallback(void 0);
	if (didComplete) fireDidEvents(opts.enteringEl, opts.leavingEl);
	return {
		hasCompleted: didComplete,
		animation: trans
	};
};
var noAnimation = async (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	/**
	* If the focus manager is enabled then we need to wait for Ionic components to be
	* rendered otherwise the component to focus may not be focused because it is hidden.
	*/
	await waitForReady(opts, config.get("focusManagerPriority", false));
	fireWillEvents(enteringEl, leavingEl);
	fireDidEvents(enteringEl, leavingEl);
	return { hasCompleted: true };
};
var waitForReady = async (opts, defaultDeep) => {
	if (opts.deepWait !== void 0 ? opts.deepWait : defaultDeep) await Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
	await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
var notifyViewReady = async (viewIsReady, enteringEl) => {
	if (viewIsReady) await viewIsReady(enteringEl);
};
var playTransition = (trans, opts) => {
	const progressCallback = opts.progressCallback;
	const promise = new Promise((resolve) => {
		trans.onFinish((currentStep) => resolve(currentStep === 1));
	});
	if (progressCallback) {
		trans.progressStart(true);
		progressCallback(trans);
	} else trans.play();
	return promise;
};
var fireWillEvents = (enteringEl, leavingEl) => {
	lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
	lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
var fireDidEvents = (enteringEl, leavingEl) => {
	lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
	lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
var lifecycle = (el, eventName) => {
	if (el) {
		const ev = new CustomEvent(eventName, {
			bubbles: false,
			cancelable: false
		});
		el.dispatchEvent(ev);
	}
};
/**
* Wait two request animation frame loops.
* This allows the framework implementations enough time to mount
* the user-defined contents. This is often needed when using inline
* modals and popovers that accept user components. For popover,
* the contents must be mounted for the popover to be sized correctly.
* For modals, the contents must be mounted for iOS to run the
* transition correctly.
*
* On Angular and React, a single raf is enough time, but for Vue
* we need to wait two rafs. As a result we are using two rafs for
* all frameworks to ensure contents are mounted.
*/
var waitForMount = () => {
	return new Promise((resolve) => raf(() => raf(() => resolve())));
};
var deepReady = async (el) => {
	const element = el;
	if (element) {
		if (element.componentOnReady != null) {
			if (await element.componentOnReady() != null) return;
		} else if (element.__registerHost != null) {
			await new Promise((resolve) => raf(resolve));
			return;
		}
		await Promise.all(Array.from(element.children).map(deepReady));
	}
};
var setPageHidden = (el, hidden) => {
	if (hidden) {
		el.setAttribute("aria-hidden", "true");
		el.classList.add("ion-page-hidden");
	} else {
		el.hidden = false;
		el.removeAttribute("aria-hidden");
		el.classList.remove("ion-page-hidden");
	}
};
var setZIndex = (enteringEl, leavingEl, direction) => {
	if (enteringEl !== void 0) enteringEl.style.zIndex = direction === "back" ? "99" : "101";
	if (leavingEl !== void 0) leavingEl.style.zIndex = "100";
};
/**
* Add a class to ensure that the header (if any)
* does not flicker during the transition. By adding the
* transitioning class, we ensure that the header has
* the necessary styles to prevent the following flickers:
* 1. When entering a page with a condensed header, the
* header should never be visible. However,
* it briefly renders the background color while
* the transition is occurring.
* 2. When leaving a page with a condensed header, the
* header has an opacity of 0 and the pages
* have a z-index which causes the entering page to
* briefly show it's content underneath the leaving page.
* 3. When entering a page or leaving a page with a fade
* header, the header should not have a background color.
* However, it briefly shows the background color while
* the transition is occurring.
*
* @param header The header element to modify.
* @param isTransitioning Whether the transition is occurring.
*/
var setHeaderTransitionClass = (header, isTransitioning) => {
	if (!header) return;
	const transitionClass = "header-transitioning";
	if (isTransitioning) header.classList.add(transitionClass);
	else header.classList.remove(transitionClass);
};
var getIonPageElement = (element) => {
	if (element.classList.contains("ion-page")) return element;
	const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
	if (ionPage) return ionPage;
	return element;
};
/**
* Retrieves the ion-header element from a page based on the
* direction of the transition.
*
* @param opts Options for the transition.
* @returns The ion-header element or null if not found or not in 'ios' mode.
*/
var getIosIonHeader = (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	const direction = opts.direction;
	if (opts.mode !== "ios") return null;
	const element = direction === "back" ? leavingEl : enteringEl;
	if (!element) return null;
	return element.querySelector("ion-header");
};
//#endregion
//#region node_modules/@ionic/core/components/animation.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var animationPrefix;
var getAnimationPrefix = (el) => {
	if (animationPrefix === void 0) {
		const supportsUnprefixed = el.style.animationName !== void 0;
		const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
		animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
	}
	return animationPrefix;
};
var setStyleProperty = (element, propertyName, value) => {
	const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
	element.style.setProperty(prefix + propertyName, value);
};
var addClassToArray = (classes = [], className) => {
	if (className !== void 0) {
		const classNameToAppend = Array.isArray(className) ? className : [className];
		return [...classes, ...classNameToAppend];
	}
	return classes;
};
var createAnimation = (animationId) => {
	let _delay;
	let _duration;
	let _easing;
	let _iterations;
	let _fill;
	let _direction;
	let _keyframes = [];
	let beforeAddClasses = [];
	let beforeRemoveClasses = [];
	let initialized = false;
	let parentAnimation;
	let beforeStylesValue = {};
	let afterAddClasses = [];
	let afterRemoveClasses = [];
	let afterStylesValue = {};
	let numAnimationsRunning = 0;
	let shouldForceLinearEasing = false;
	let shouldForceSyncPlayback = false;
	let forceDirectionValue;
	let forceDurationValue;
	let forceDelayValue;
	let willComplete = true;
	let finished = false;
	let shouldCalculateNumAnimations = true;
	let ani;
	let paused = false;
	const id = animationId;
	const onFinishCallbacks = [];
	const onFinishOneTimeCallbacks = [];
	const onStopOneTimeCallbacks = [];
	const elements = [];
	const childAnimations = [];
	const stylesheets = [];
	const _beforeAddReadFunctions = [];
	const _beforeAddWriteFunctions = [];
	const _afterAddReadFunctions = [];
	const _afterAddWriteFunctions = [];
	const webAnimations = [];
	const supportsAnimationEffect = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
	/**
	* This is a feature detection for Web Animations.
	*
	* Certain environments such as emulated browser environments for testing,
	* do not support Web Animations. As a result, we need to check for support
	* and provide a fallback to test certain functionality related to Web Animations.
	*/
	const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
	const getWebAnimations = () => {
		return webAnimations;
	};
	const destroy = (clearStyleSheets) => {
		childAnimations.forEach((childAnimation) => {
			childAnimation.destroy(clearStyleSheets);
		});
		cleanUp(clearStyleSheets);
		elements.length = 0;
		childAnimations.length = 0;
		_keyframes.length = 0;
		clearOnFinish();
		initialized = false;
		shouldCalculateNumAnimations = true;
		return ani;
	};
	/**
	* Cancels any Web Animations, removes
	* any animation properties from the
	* animation's elements, and removes the
	* animation's stylesheets from the DOM.
	*/
	const cleanUp = (clearStyleSheets) => {
		cleanUpElements();
		if (clearStyleSheets) cleanUpStyleSheets();
	};
	const resetFlags = () => {
		shouldForceLinearEasing = false;
		shouldForceSyncPlayback = false;
		shouldCalculateNumAnimations = true;
		forceDirectionValue = void 0;
		forceDurationValue = void 0;
		forceDelayValue = void 0;
		numAnimationsRunning = 0;
		finished = false;
		willComplete = true;
		paused = false;
	};
	const isRunning = () => {
		return numAnimationsRunning !== 0 && !paused;
	};
	/**
	* @internal
	* Remove a callback from a chosen callback array
	* @param callbackToRemove: A reference to the callback that should be removed
	* @param callbackObjects: An array of callbacks that callbackToRemove should be removed from.
	*/
	const clearCallback = (callbackToRemove, callbackObjects) => {
		const index = callbackObjects.findIndex((callbackObject) => callbackObject.c === callbackToRemove);
		if (index > -1) callbackObjects.splice(index, 1);
	};
	/**
	* @internal
	* Add a callback to be fired when an animation is stopped/cancelled.
	* @param callback: A reference to the callback that should be fired
	* @param opts: Any options associated with this particular callback
	*/
	const onStop = (callback, opts) => {
		onStopOneTimeCallbacks.push({
			c: callback,
			o: opts
		});
		return ani;
	};
	const onFinish = (callback, opts) => {
		((opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks).push({
			c: callback,
			o: opts
		});
		return ani;
	};
	const clearOnFinish = () => {
		onFinishCallbacks.length = 0;
		onFinishOneTimeCallbacks.length = 0;
		return ani;
	};
	/**
	* Cancels any Web Animations and removes
	* any animation properties from the
	* the animation's elements.
	*/
	const cleanUpElements = () => {
		if (supportsWebAnimations) {
			webAnimations.forEach((animation) => {
				animation.cancel();
			});
			webAnimations.length = 0;
		}
	};
	/**
	* Removes the animation's stylesheets
	* from the DOM.
	*/
	const cleanUpStyleSheets = () => {
		stylesheets.forEach((stylesheet) => {
			/**
			* When sharing stylesheets, it's possible
			* for another animation to have already
			* cleaned up a particular stylesheet
			*/
			if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) stylesheet.parentNode.removeChild(stylesheet);
		});
		stylesheets.length = 0;
	};
	const beforeAddRead = (readFn) => {
		_beforeAddReadFunctions.push(readFn);
		return ani;
	};
	const beforeAddWrite = (writeFn) => {
		_beforeAddWriteFunctions.push(writeFn);
		return ani;
	};
	const afterAddRead = (readFn) => {
		_afterAddReadFunctions.push(readFn);
		return ani;
	};
	const afterAddWrite = (writeFn) => {
		_afterAddWriteFunctions.push(writeFn);
		return ani;
	};
	const beforeAddClass = (className) => {
		beforeAddClasses = addClassToArray(beforeAddClasses, className);
		return ani;
	};
	const beforeRemoveClass = (className) => {
		beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
		return ani;
	};
	/**
	* Set CSS inline styles to the animation's
	* elements before the animation begins.
	*/
	const beforeStyles = (styles = {}) => {
		beforeStylesValue = styles;
		return ani;
	};
	/**
	* Clear CSS inline styles from the animation's
	* elements before the animation begins.
	*/
	const beforeClearStyles = (propertyNames = []) => {
		for (const property of propertyNames) beforeStylesValue[property] = "";
		return ani;
	};
	const afterAddClass = (className) => {
		afterAddClasses = addClassToArray(afterAddClasses, className);
		return ani;
	};
	const afterRemoveClass = (className) => {
		afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
		return ani;
	};
	const afterStyles = (styles = {}) => {
		afterStylesValue = styles;
		return ani;
	};
	const afterClearStyles = (propertyNames = []) => {
		for (const property of propertyNames) afterStylesValue[property] = "";
		return ani;
	};
	const getFill = () => {
		if (_fill !== void 0) return _fill;
		if (parentAnimation) return parentAnimation.getFill();
		return "both";
	};
	const getDirection = () => {
		if (forceDirectionValue !== void 0) return forceDirectionValue;
		if (_direction !== void 0) return _direction;
		if (parentAnimation) return parentAnimation.getDirection();
		return "normal";
	};
	const getEasing = () => {
		if (shouldForceLinearEasing) return "linear";
		if (_easing !== void 0) return _easing;
		if (parentAnimation) return parentAnimation.getEasing();
		return "linear";
	};
	const getDuration = () => {
		if (shouldForceSyncPlayback) return 0;
		if (forceDurationValue !== void 0) return forceDurationValue;
		if (_duration !== void 0) return _duration;
		if (parentAnimation) return parentAnimation.getDuration();
		return 0;
	};
	const getIterations = () => {
		if (_iterations !== void 0) return _iterations;
		if (parentAnimation) return parentAnimation.getIterations();
		return 1;
	};
	const getDelay = () => {
		if (forceDelayValue !== void 0) return forceDelayValue;
		if (_delay !== void 0) return _delay;
		if (parentAnimation) return parentAnimation.getDelay();
		return 0;
	};
	const getKeyframes = () => {
		return _keyframes;
	};
	const direction = (animationDirection) => {
		_direction = animationDirection;
		update(true);
		return ani;
	};
	const fill = (animationFill) => {
		_fill = animationFill;
		update(true);
		return ani;
	};
	const delay = (animationDelay) => {
		_delay = animationDelay;
		update(true);
		return ani;
	};
	const easing = (animationEasing) => {
		_easing = animationEasing;
		update(true);
		return ani;
	};
	const duration = (animationDuration) => {
		/**
		* CSS Animation Durations of 0ms work fine on Chrome
		* but do not run on Safari, so force it to 1ms to
		* get it to run on both platforms.
		*/
		if (!supportsWebAnimations && animationDuration === 0) animationDuration = 1;
		_duration = animationDuration;
		update(true);
		return ani;
	};
	const iterations = (animationIterations) => {
		_iterations = animationIterations;
		update(true);
		return ani;
	};
	const parent = (animation) => {
		parentAnimation = animation;
		return ani;
	};
	const addElement = (el) => {
		if (el != null) if (el.nodeType === 1) elements.push(el);
		else if (el.length >= 0) for (let i = 0; i < el.length; i++) elements.push(el[i]);
		else printIonError("createAnimation - Invalid addElement value.");
		return ani;
	};
	const addAnimation = (animationToAdd) => {
		if (animationToAdd != null) if (Array.isArray(animationToAdd)) for (const animation of animationToAdd) {
			animation.parent(ani);
			childAnimations.push(animation);
		}
		else {
			animationToAdd.parent(ani);
			childAnimations.push(animationToAdd);
		}
		return ani;
	};
	const keyframes = (keyframeValues) => {
		const different = _keyframes !== keyframeValues;
		_keyframes = keyframeValues;
		if (different) updateKeyframes(_keyframes);
		return ani;
	};
	const updateKeyframes = (keyframeValues) => {
		if (supportsWebAnimations) getWebAnimations().forEach((animation) => {
			/**
			* animation.effect's type is AnimationEffect.
			* However, in this case we have a more specific
			* type of AnimationEffect called KeyframeEffect which
			* inherits from AnimationEffect. As a result,
			* we cast animation.effect to KeyframeEffect.
			*/
			const keyframeEffect = animation.effect;
			/**
			* setKeyframes is not supported in all browser
			* versions that Ionic supports, so we need to
			* check for support before using it.
			*/
			if (keyframeEffect.setKeyframes) keyframeEffect.setKeyframes(keyframeValues);
			else animation.effect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
		});
	};
	/**
	* Run all "before" animation hooks.
	*/
	const beforeAnimation = () => {
		_beforeAddReadFunctions.forEach((callback) => callback());
		_beforeAddWriteFunctions.forEach((callback) => callback());
		const addClasses = beforeAddClasses;
		const removeClasses = beforeRemoveClasses;
		const styles = beforeStylesValue;
		elements.forEach((el) => {
			const elementClassList = el.classList;
			addClasses.forEach((c) => elementClassList.add(c));
			removeClasses.forEach((c) => elementClassList.remove(c));
			for (const property in styles) if (styles.hasOwnProperty(property)) setStyleProperty(el, property, styles[property]);
		});
	};
	/**
	* Run all "after" animation hooks.
	*/
	const afterAnimation = () => {
		_afterAddReadFunctions.forEach((callback) => callback());
		_afterAddWriteFunctions.forEach((callback) => callback());
		const currentStep = willComplete ? 1 : 0;
		const addClasses = afterAddClasses;
		const removeClasses = afterRemoveClasses;
		const styles = afterStylesValue;
		elements.forEach((el) => {
			const elementClassList = el.classList;
			addClasses.forEach((c) => elementClassList.add(c));
			removeClasses.forEach((c) => elementClassList.remove(c));
			for (const property in styles) if (styles.hasOwnProperty(property)) setStyleProperty(el, property, styles[property]);
		});
		/**
		* Clean up any value coercion before
		* the user callbacks fire otherwise
		* they may get stale values. For example,
		* if someone calls progressStart(0) the
		* animation may still be reversed.
		*/
		forceDurationValue = void 0;
		forceDirectionValue = void 0;
		forceDelayValue = void 0;
		onFinishCallbacks.forEach((onFinishCallback) => {
			return onFinishCallback.c(currentStep, ani);
		});
		onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
			return onFinishCallback.c(currentStep, ani);
		});
		onFinishOneTimeCallbacks.length = 0;
		shouldCalculateNumAnimations = true;
		if (willComplete) finished = true;
		willComplete = true;
	};
	const animationFinish = () => {
		if (numAnimationsRunning === 0) return;
		numAnimationsRunning--;
		if (numAnimationsRunning === 0) {
			afterAnimation();
			if (parentAnimation) parentAnimation.animationFinish();
		}
	};
	const initializeWebAnimation = () => {
		elements.forEach((element) => {
			const animation = element.animate(_keyframes, {
				id,
				delay: getDelay(),
				duration: getDuration(),
				easing: getEasing(),
				iterations: getIterations(),
				fill: getFill(),
				direction: getDirection()
			});
			animation.pause();
			webAnimations.push(animation);
		});
		if (webAnimations.length > 0) webAnimations[0].onfinish = () => {
			animationFinish();
		};
	};
	const initializeAnimation = () => {
		beforeAnimation();
		if (_keyframes.length > 0) {
			if (supportsWebAnimations) initializeWebAnimation();
		}
		initialized = true;
	};
	const setAnimationStep = (step) => {
		step = Math.min(Math.max(step, 0), .9999);
		if (supportsWebAnimations) webAnimations.forEach((animation) => {
			animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
			animation.pause();
		});
	};
	const updateWebAnimation = (step) => {
		webAnimations.forEach((animation) => {
			animation.effect.updateTiming({
				delay: getDelay(),
				duration: getDuration(),
				easing: getEasing(),
				iterations: getIterations(),
				fill: getFill(),
				direction: getDirection()
			});
		});
		if (step !== void 0) setAnimationStep(step);
	};
	const update = (deep = false, toggleAnimationName = true, step) => {
		if (deep) childAnimations.forEach((animation) => {
			animation.update(deep, toggleAnimationName, step);
		});
		if (supportsWebAnimations) updateWebAnimation(step);
		return ani;
	};
	const progressStart = (forceLinearEasing = false, step) => {
		childAnimations.forEach((animation) => {
			animation.progressStart(forceLinearEasing, step);
		});
		pauseAnimation();
		shouldForceLinearEasing = forceLinearEasing;
		if (!initialized) initializeAnimation();
		update(false, true, step);
		return ani;
	};
	const progressStep = (step) => {
		childAnimations.forEach((animation) => {
			animation.progressStep(step);
		});
		setAnimationStep(step);
		return ani;
	};
	const progressEnd = (playTo, step, dur) => {
		shouldForceLinearEasing = false;
		childAnimations.forEach((animation) => {
			animation.progressEnd(playTo, step, dur);
		});
		if (dur !== void 0) forceDurationValue = dur;
		finished = false;
		willComplete = true;
		if (playTo === 0) {
			forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
			if (forceDirectionValue === "reverse") willComplete = false;
			if (supportsWebAnimations) {
				update();
				setAnimationStep(1 - step);
			} else {
				forceDelayValue = (1 - step) * getDuration() * -1;
				update(false, false);
			}
		} else if (playTo === 1) if (supportsWebAnimations) {
			update();
			setAnimationStep(step);
		} else {
			forceDelayValue = step * getDuration() * -1;
			update(false, false);
		}
		if (playTo !== void 0 && !parentAnimation) play();
		return ani;
	};
	const pauseAnimation = () => {
		if (initialized) {
			if (supportsWebAnimations) webAnimations.forEach((animation) => {
				animation.pause();
			});
			else elements.forEach((element) => {
				setStyleProperty(element, "animation-play-state", "paused");
			});
			paused = true;
		}
	};
	const pause = () => {
		childAnimations.forEach((animation) => {
			animation.pause();
		});
		pauseAnimation();
		return ani;
	};
	const playCSSAnimations = () => {
		animationFinish();
	};
	const playWebAnimations = () => {
		webAnimations.forEach((animation) => {
			animation.play();
		});
		if (_keyframes.length === 0 || elements.length === 0) animationFinish();
	};
	const resetAnimation = () => {
		if (supportsWebAnimations) {
			setAnimationStep(0);
			updateWebAnimation();
		}
	};
	const play = (opts) => {
		return new Promise((resolve) => {
			if (opts === null || opts === void 0 ? void 0 : opts.sync) {
				shouldForceSyncPlayback = true;
				onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
			}
			if (!initialized) initializeAnimation();
			if (finished) {
				resetAnimation();
				finished = false;
			}
			if (shouldCalculateNumAnimations) {
				numAnimationsRunning = childAnimations.length + 1;
				shouldCalculateNumAnimations = false;
			}
			/**
			* When one of these callbacks fires we
			* need to clear the other's callback otherwise
			* you can potentially get these callbacks
			* firing multiple times if the play method
			* is subsequently called.
			* Example:
			* animation.play() (onStop and onFinish callbacks are registered)
			* animation.stop() (onStop callback is fired, onFinish is not)
			* animation.play() (onStop and onFinish callbacks are registered)
			* Total onStop callbacks: 1
			* Total onFinish callbacks: 2
			*/
			const onStopCallback = () => {
				clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
				resolve();
			};
			const onFinishCallback = () => {
				clearCallback(onStopCallback, onStopOneTimeCallbacks);
				resolve();
			};
			/**
			* The play method resolves when an animation
			* run either finishes or is cancelled.
			*/
			onFinish(onFinishCallback, { oneTimeCallback: true });
			onStop(onStopCallback, { oneTimeCallback: true });
			childAnimations.forEach((animation) => {
				animation.play();
			});
			if (supportsWebAnimations) playWebAnimations();
			else playCSSAnimations();
			paused = false;
		});
	};
	/**
	* Stops an animation and resets it state to the
	* beginning. This does not fire any onFinish
	* callbacks because the animation did not finish.
	* However, since the animation was not destroyed
	* (i.e. the animation could run again) we do not
	* clear the onFinish callbacks.
	*/
	const stop = () => {
		childAnimations.forEach((animation) => {
			animation.stop();
		});
		if (initialized) {
			cleanUpElements();
			initialized = false;
		}
		resetFlags();
		onStopOneTimeCallbacks.forEach((onStopCallback) => onStopCallback.c(0, ani));
		onStopOneTimeCallbacks.length = 0;
	};
	const from = (property, value) => {
		const firstFrame = _keyframes[0];
		if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) firstFrame[property] = value;
		else _keyframes = [{
			offset: 0,
			[property]: value
		}, ..._keyframes];
		return ani;
	};
	const to = (property, value) => {
		const lastFrame = _keyframes[_keyframes.length - 1];
		if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) lastFrame[property] = value;
		else _keyframes = [..._keyframes, {
			offset: 1,
			[property]: value
		}];
		return ani;
	};
	const fromTo = (property, fromValue, toValue) => {
		return from(property, fromValue).to(property, toValue);
	};
	return ani = {
		parentAnimation,
		elements,
		childAnimations,
		id,
		animationFinish,
		from,
		to,
		fromTo,
		parent,
		play,
		pause,
		stop,
		destroy,
		keyframes,
		addAnimation,
		addElement,
		update,
		fill,
		direction,
		iterations,
		duration,
		easing,
		delay,
		getWebAnimations,
		getKeyframes,
		getFill,
		getDirection,
		getDelay,
		getIterations,
		getEasing,
		getDuration,
		afterAddRead,
		afterAddWrite,
		afterClearStyles,
		afterStyles,
		afterRemoveClass,
		afterAddClass,
		beforeAddRead,
		beforeAddWrite,
		beforeClearStyles,
		beforeStyles,
		beforeRemoveClass,
		beforeAddClass,
		onFinish,
		isRunning,
		progressStart,
		progressStep,
		progressEnd
	};
};
//#endregion
export { LIFECYCLE_WILL_LEAVE as a, getIonPageElement as c, transition as d, waitForMount as f, LIFECYCLE_WILL_ENTER as i, lifecycle as l, LIFECYCLE_DID_ENTER as n, LIFECYCLE_WILL_UNLOAD as o, LIFECYCLE_DID_LEAVE as r, deepReady as s, createAnimation as t, setPageHidden as u };

//# sourceMappingURL=animation-DDHHTMnT.js.map