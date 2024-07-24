/* eslint-disable */
/* tslint-disable */

/**
 * This file includes detection for all popular browsers
 */
var opr;
var InstallTrigger;

var isOpera = false;
var isSafari = false;
var isChrome = false;
var isIE = false;
var isFirefox = false;
var isEdge = false;
var isBlink = false;

if (typeof window !== 'undefined') {
  // Opera 8.0+
  isOpera =
    (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Internet Explorer 6-11
  isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 71
  isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Blink engine detection
  isBlink = (isChrome || isOpera) && !!window.CSS;
}

export { isOpera, isSafari, isChrome, isIE, isFirefox, isEdge, isBlink };
