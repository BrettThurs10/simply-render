'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SimplyRender = function (_a) {
    var isTrue = _a.isTrue, children = _a.children, fallback = _a.fallback;
    return isTrue ? children : fallback;
};

exports.SimplyRender = SimplyRender;
