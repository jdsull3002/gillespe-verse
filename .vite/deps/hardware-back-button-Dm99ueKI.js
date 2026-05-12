import { t as __exportAll } from "./rolldown-runtime-CiIaOW0V.js";
import { i as printIonError, t as config } from "./index4-Dp5su7Z0.js";
import { n as win } from "./index9-Dbib3cpu.js";
//#region node_modules/@ionic/core/components/hardware-back-button.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var hardware_back_button_exports = /* @__PURE__ */ __exportAll({
	MENU_BACK_BUTTON_PRIORITY: () => 99,
	OVERLAY_BACK_BUTTON_PRIORITY: () => 100,
	blockHardwareBackButton: () => blockHardwareBackButton,
	shouldUseCloseWatcher: () => shouldUseCloseWatcher,
	startHardwareBackButton: () => startHardwareBackButton
});
/**
* CloseWatcher is a newer API that lets
* use detect the hardware back button event
* in a web browser: https://caniuse.com/?search=closewatcher
* However, not every browser supports it yet.
*
* This needs to be a function so that we can
* check the config once it has been set.
* Otherwise, this code would be evaluated the
* moment this file is evaluated which could be
* before the config is set.
*/
var shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
/**
* When hardwareBackButton: false in config,
* we need to make sure we also block the default
* webview behavior. If we don't then it will be
* possible for users to navigate backward while
* an overlay is still open. Additionally, it will
* give the appearance that the hardwareBackButton
* config is not working as the page transition
* will still happen.
*/
var blockHardwareBackButton = () => {
	document.addEventListener("backbutton", () => {});
};
var startHardwareBackButton = () => {
	const doc = document;
	let busy = false;
	const backButtonCallback = () => {
		if (busy) return;
		let index = 0;
		let handlers = [];
		const ev = new CustomEvent("ionBackButton", {
			bubbles: false,
			detail: { register(priority, handler) {
				handlers.push({
					priority,
					handler,
					id: index++
				});
			} }
		});
		doc.dispatchEvent(ev);
		const executeAction = async (handlerRegister) => {
			try {
				if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
					const result = handlerRegister.handler(processHandlers);
					if (result != null) await result;
				}
			} catch (e) {
				printIonError("[ion-app] - Exception in startHardwareBackButton:", e);
			}
		};
		const processHandlers = () => {
			if (handlers.length > 0) {
				let selectedHandler = {
					priority: Number.MIN_SAFE_INTEGER,
					handler: () => void 0,
					id: -1
				};
				handlers.forEach((handler) => {
					if (handler.priority >= selectedHandler.priority) selectedHandler = handler;
				});
				busy = true;
				handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
				executeAction(selectedHandler).then(() => busy = false);
			}
		};
		processHandlers();
	};
	/**
	* If the CloseWatcher is defined then
	* we don't want to also listen for the native
	* backbutton event otherwise we may get duplicate
	* events firing.
	*/
	if (shouldUseCloseWatcher()) {
		let watcher;
		const configureWatcher = () => {
			watcher === null || watcher === void 0 || watcher.destroy();
			watcher = new win.CloseWatcher();
			/**
			* Once a close request happens
			* the watcher gets destroyed.
			* As a result, we need to re-configure
			* the watcher so we can respond to other
			* close requests.
			*/
			watcher.onclose = () => {
				backButtonCallback();
				configureWatcher();
			};
		};
		configureWatcher();
	} else doc.addEventListener("backbutton", backButtonCallback);
};
//#endregion
export { shouldUseCloseWatcher as n, hardware_back_button_exports as t };

//# sourceMappingURL=hardware-back-button-Dm99ueKI.js.map