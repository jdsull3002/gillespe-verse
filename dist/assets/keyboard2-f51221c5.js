import{K as f}from"./keyboard-6e11f8f7.js";import"./index-ed28c7fe.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g="ionKeyboardDidShow",p="ionKeyboardDidHide",b=150;let r={},o={},s=!1;const k=()=>{r={},o={},s=!1},H=e=>{if(f.getEngine())y(e);else{if(!e.visualViewport)return;o=d(e.visualViewport),e.visualViewport.onresize=()=>{K(e),l()||D(e)?n(e):a(e)&&i(e)}}},y=e=>{e.addEventListener("keyboardDidShow",t=>n(e,t)),e.addEventListener("keyboardDidHide",()=>i(e))},n=(e,t)=>{E(e,t),s=!0},i=e=>{u(e),s=!1},l=()=>{const e=(r.height-o.height)*o.scale;return!s&&r.width===o.width&&e>b},D=e=>s&&!a(e),a=e=>s&&o.height===e.innerHeight,E=(e,t)=>{const c=t?t.keyboardHeight:e.innerHeight-o.height,h=new CustomEvent(g,{detail:{keyboardHeight:c}});e.dispatchEvent(h)},u=e=>{const t=new CustomEvent(p);e.dispatchEvent(t)},K=e=>{r=Object.assign({},o),o=d(e.visualViewport)},d=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale});export{p as KEYBOARD_DID_CLOSE,g as KEYBOARD_DID_OPEN,d as copyVisualViewport,a as keyboardDidClose,l as keyboardDidOpen,D as keyboardDidResize,k as resetKeyboardAssist,i as setKeyboardClose,n as setKeyboardOpen,H as startKeyboardAssist,K as trackViewportChanges};