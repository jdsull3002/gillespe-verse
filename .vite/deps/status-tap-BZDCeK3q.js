import { d as readTask, p as writeTask } from "./client-C-sg6esh.js";
import { i as componentOnReady } from "./helpers-CcK7VbtN.js";
import { d as scrollToTop, i as findClosestIonContent } from "./index8-DfmWCWxB.js";
//#region node_modules/@ionic/core/components/status-tap.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var startStatusTap = () => {
	const win = window;
	win.addEventListener("statusTap", () => {
		readTask(() => {
			const width = win.innerWidth;
			const height = win.innerHeight;
			const el = document.elementFromPoint(width / 2, height / 2);
			if (!el) return;
			const contentEl = findClosestIonContent(el);
			if (contentEl) new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
				writeTask(async () => {
					/**
					* If scrolling and user taps status bar,
					* only calling scrollToTop is not enough
					* as engines like WebKit will jump the
					* scroll position back down and complete
					* any in-progress momentum scrolling.
					*/
					contentEl.style.setProperty("--overflow", "hidden");
					await scrollToTop(contentEl, 300);
					contentEl.style.removeProperty("--overflow");
				});
			});
		});
	});
};
//#endregion
export { startStatusTap };

//# sourceMappingURL=status-tap-BZDCeK3q.js.map